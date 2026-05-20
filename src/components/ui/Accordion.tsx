import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import type { FaqItem } from '../../content/types'

interface Props {
  item: FaqItem
  defaultOpen?: boolean
}

export default function Accordion({ item, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-shadow hover:shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-3 p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-unb-azul focus-visible:ring-inset"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-slate-800 leading-snug">{item.pergunta}</span>
        <span className="shrink-0 w-5 h-5 rounded-full border border-slate-200 flex items-center justify-center mt-0.5 transition-colors text-slate-400">
          {open ? <Minus size={11} /> : <Plus size={11} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 border-t border-slate-100">
              <p className="text-sm text-slate-600 leading-relaxed mt-3">{item.resposta}</p>
              {item.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
