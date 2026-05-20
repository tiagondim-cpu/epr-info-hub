import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, CheckCircle2 } from 'lucide-react'
import { cn } from '../lib/utils'
import Badge from '../components/ui/Badge'
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
    <div className="max-w-4xl mx-auto space-y-6 animate-page-enter">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Minha Jornada Acadêmica</h1>
        <p className="text-slate-500 mt-1 text-sm">
          Informações organizadas por fase do curso — do primeiro semestre à formatura.
        </p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl border border-slate-200 p-1 shadow-sm flex flex-wrap gap-1">
        {jornadaFases.map((f, i) => (
          <button
            key={f.id}
            onClick={() => handleFase(f.id)}
            className={cn(
              'relative flex-1 min-w-[110px] flex flex-col items-center px-3 py-2.5 rounded-lg text-xs font-medium transition-all',
              faseAtiva === f.id
                ? 'bg-unb-azul text-white shadow-sm'
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
            )}
          >
            <span className={cn(
              'w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold mb-1',
              faseAtiva === f.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
            )}>
              {i + 1}
            </span>
            <span className="leading-tight text-center">{f.titulo}</span>
            <span className={cn('text-[10px] mt-0.5', faseAtiva === f.id ? 'text-blue-200' : 'text-slate-400')}>
              {f.semestres}
            </span>
          </button>
        ))}
      </div>

      {/* Conteúdo animado */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={faseAtiva}
          custom={direction}
          initial={{ opacity: 0, x: direction * 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -20 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="space-y-3"
        >
          {fase.conteudo.map((faseItem, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="show"
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm"
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <h3 className="text-sm font-semibold text-slate-900">{faseItem.titulo}</h3>
                {faseItem.badges && faseItem.badges.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {faseItem.badges.map((badge, j) => (
                      <Badge key={j} {...badge} />
                    ))}
                  </div>
                )}
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">{faseItem.descricao}</p>

              {faseItem.detalhes && faseItem.detalhes.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {faseItem.detalhes.map((detalhe, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 size={14} className="text-unb-verde shrink-0 mt-0.5" />
                      <span>{detalhe}</span>
                    </li>
                  ))}
                </ul>
              )}

              {faseItem.links && faseItem.links.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-slate-100">
                  {faseItem.links.map((link) => (
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
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
