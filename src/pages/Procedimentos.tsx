import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Info, ExternalLink } from 'lucide-react'
import { cn } from '../lib/utils'
import AtualizadoEm from '../components/ui/AtualizadoEm'
import { procedimentos } from '../content/procedimentos'

export default function Procedimentos() {
  const [ativo, setAtivo] = useState(procedimentos[0].id)
  const proc = procedimentos.find((p) => p.id === ativo) ?? procedimentos[0]

  return (
    <div className="mx-auto max-w-5xl space-y-7 animate-page-enter">
      <div>
        <h1 className="text-[30px] font-bold leading-tight text-text-primary lg:text-[32px]">Procedimentos</h1>
        <p className="mt-2 text-base text-text-muted">
          Guias passo a passo para os processos mais críticos do curso.
        </p>
        <AtualizadoEm area="procedimentos" className="mt-3" />
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
        <div className="relative border-b border-divider sm:hidden">
          <select
            value={ativo}
            onChange={(e) => setAtivo(e.target.value)}
            className="w-full appearance-none bg-surface px-4 py-3 text-sm font-semibold text-text-primary focus:outline-none"
          >
            {procedimentos.map((p) => (
              <option key={p.id} value={p.id}>{p.titulo}</option>
            ))}
          </select>
          <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-subtle" />
        </div>

        <div className="hidden flex-wrap gap-2 border-b border-divider p-2 sm:flex">
          {procedimentos.map((p) => (
            <button
              key={p.id}
              onClick={() => setAtivo(p.id)}
              className={cn(
                'min-w-[160px] flex-1 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all',
                ativo === p.id
                  ? 'border-text-primary bg-text-primary text-white shadow-sm'
                  : 'border-border bg-surface text-text-muted hover:border-text-subtle hover:text-text-primary'
              )}
            >
              {p.titulo}
            </button>
          ))}
        </div>

        <div className="p-6 lg:p-8">
          <h2 className="mb-7 text-xl font-bold text-text-primary">{proc.titulo}</h2>

          <ol className="relative space-y-6">
            {proc.passos.map((passo, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, duration: 0.2 }}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-text-primary text-sm font-bold text-white">
                    {i + 1}
                  </div>
                  {i < proc.passos.length - 1 && (
                    <div className="mt-2 w-px flex-1 bg-divider" />
                  )}
                </div>

                <div className="min-w-0 flex-1 pb-2">
                  <p className="text-base font-semibold leading-tight text-text-primary">{passo.titulo}</p>
                  {passo.descricao && (
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">{passo.descricao}</p>
                  )}
                </div>
              </motion.li>
            ))}
          </ol>

          {proc.links && proc.links.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-2">
              {proc.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-unb-azul-pale px-3 py-1.5 text-sm font-semibold text-unb-azul transition-colors hover:bg-blue-100"
                >
                  {link.texto}
                  <ExternalLink size={13} />
                </a>
              ))}
            </div>
          )}

          {proc.observacoes && proc.observacoes.length > 0 && (
            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
              <div className="mb-3 flex items-center gap-2">
                <Info size={15} className="shrink-0 text-amber-700" />
                <span className="text-xs font-bold uppercase text-amber-800">Atenção</span>
              </div>
              <ul className="space-y-2">
                {proc.observacoes.map((obs, i) => (
                  <li key={i} className="flex gap-2 text-sm leading-relaxed text-amber-800">
                    <span className="mt-0.5 shrink-0 text-amber-700">•</span>
                    {obs}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
