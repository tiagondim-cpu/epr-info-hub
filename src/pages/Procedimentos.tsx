import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Info, ExternalLink } from 'lucide-react'
import { cn } from '../lib/utils'
import { procedimentos } from '../content/procedimentos'

export default function Procedimentos() {
  const [ativo, setAtivo] = useState(procedimentos[0].id)
  const proc = procedimentos.find((p) => p.id === ativo) ?? procedimentos[0]

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-page-enter">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Procedimentos</h1>
        <p className="text-slate-500 mt-1 text-sm">
          Guias passo a passo para os processos mais críticos do curso.
        </p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Mobile select */}
        <div className="sm:hidden relative border-b border-slate-100">
          <select
            value={ativo}
            onChange={(e) => setAtivo(e.target.value)}
            className="w-full px-4 py-3 text-sm font-medium text-slate-800 bg-white appearance-none focus:outline-none"
          >
            {procedimentos.map((p) => (
              <option key={p.id} value={p.id}>{p.titulo}</option>
            ))}
          </select>
          <ChevronDown size={15} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        </div>

        {/* Desktop tabs */}
        <div className="hidden sm:flex border-b border-slate-100">
          {procedimentos.map((p) => (
            <button
              key={p.id}
              onClick={() => setAtivo(p.id)}
              className={cn(
                'flex-1 px-4 py-3 text-xs font-medium transition-all border-b-2 -mb-px',
                ativo === p.id
                  ? 'border-unb-azul text-unb-azul bg-unb-azul-pale'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'
              )}
            >
              {p.titulo}
            </button>
          ))}
        </div>

        {/* Conteúdo */}
        <div className="p-6">
          <h2 className="text-base font-semibold text-slate-900 mb-6">{proc.titulo}</h2>

          <ol className="relative space-y-6">
            {proc.passos.map((passo, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, duration: 0.2 }}
                className="flex gap-4"
              >
                {/* Linha conectora */}
                <div className="flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-unb-azul text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-sm shadow-blue-900/20">
                    {i + 1}
                  </div>
                  {i < proc.passos.length - 1 && (
                    <div className="w-px flex-1 bg-slate-200 mt-2" />
                  )}
                </div>

                <div className="flex-1 min-w-0 pb-2">
                  <p className="text-sm font-semibold text-slate-800 leading-tight">{passo.titulo}</p>
                  {passo.descricao && (
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">{passo.descricao}</p>
                  )}
                </div>
              </motion.li>
            ))}
          </ol>

          {proc.links && proc.links.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {proc.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-unb-azul bg-unb-azul-pale px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  {link.texto}
                  <ExternalLink size={11} />
                </a>
              ))}
            </div>
          )}

          {proc.observacoes && proc.observacoes.length > 0 && (
            <div className="mt-5 rounded-lg bg-amber-50 border border-amber-200 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Info size={14} className="text-amber-600 shrink-0" />
                <span className="text-xs font-semibold text-amber-800 uppercase tracking-wide">Atenção</span>
              </div>
              <ul className="space-y-1.5">
                {proc.observacoes.map((obs, i) => (
                  <li key={i} className="text-xs text-amber-800 leading-relaxed flex gap-2">
                    <span className="text-amber-400 shrink-0 mt-0.5">·</span>
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
