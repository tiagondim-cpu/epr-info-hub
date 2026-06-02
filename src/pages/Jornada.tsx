import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, CheckCircle2 } from 'lucide-react'
import { cn } from '../lib/utils'
import Badge from '../components/ui/Badge'
import AtualizadoEm from '../components/ui/AtualizadoEm'
import { jornadaFases } from '../content/jornada'

const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.22, ease: 'easeOut' as const },
  }),
}

export default function Jornada() {
  const [faseAtiva, setFaseAtiva] = useState(jornadaFases[0].id)
  const [direction, setDirection] = useState(0)
  const fase = jornadaFases.find((f) => f.id === faseAtiva) ?? jornadaFases[0]

  const handleFase = (id: string) => {
    const currentIdx = jornadaFases.findIndex((f) => f.id === faseAtiva)
    const nextIdx = jornadaFases.findIndex((f) => f.id === id)
    setDirection(nextIdx > currentIdx ? 1 : -1)
    setFaseAtiva(id)
  }

  return (
    <div className="mx-auto max-w-5xl space-y-7 animate-page-enter">
      <div>
        <h1 className="text-[30px] font-bold leading-tight text-text-primary lg:text-[32px]">
          Minha Jornada Acadêmica
        </h1>
        <p className="mt-2 text-base text-text-muted">
          Informações organizadas por fase do curso, do primeiro semestre à formatura.
        </p>
        <AtualizadoEm area="jornada" className="mt-3" />
      </div>

      <div className="flex flex-wrap gap-2 rounded-xl border border-border bg-surface p-2 shadow-sm">
        {jornadaFases.map((f, i) => (
          <button
            key={f.id}
            onClick={() => handleFase(f.id)}
            className={cn(
              'min-w-[128px] flex-1 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all',
              faseAtiva === f.id
                ? 'border-text-primary bg-text-primary text-white shadow-sm'
                : 'border-border bg-surface text-text-muted hover:border-text-subtle hover:text-text-primary'
            )}
          >
            <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/15 text-[10px] font-bold">
              {i + 1}
            </span>
            {f.titulo}
            <span className={cn('ml-2 text-xs font-medium', faseAtiva === f.id ? 'text-white/80' : 'text-text-subtle')}>
              {f.semestres}
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={faseAtiva}
          custom={direction}
          initial={{ opacity: 0, x: direction * 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -20 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="space-y-4"
        >
          {fase.conteudo.map((faseItem, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="show"
              className="rounded-xl border border-border bg-surface p-6 shadow-sm"
            >
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-base font-semibold text-text-primary">{faseItem.titulo}</h3>
                {faseItem.badges && faseItem.badges.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {faseItem.badges.map((badge, j) => (
                      <Badge key={j} {...badge} />
                    ))}
                  </div>
                )}
              </div>

              <p className="text-sm leading-relaxed text-text-muted">{faseItem.descricao}</p>

              {faseItem.detalhes && faseItem.detalhes.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {faseItem.detalhes.map((detalhe, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-text-muted">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-unb-verde" />
                      <span>{detalhe}</span>
                    </li>
                  ))}
                </ul>
              )}

              {faseItem.links && faseItem.links.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2 border-t border-divider pt-4">
                  {faseItem.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-unb-azul-pale px-3 py-1.5 text-xs font-semibold text-unb-azul transition-colors hover:bg-blue-100"
                    >
                      {link.texto}
                      <ExternalLink size={12} />
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
