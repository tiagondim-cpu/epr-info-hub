import { useState } from 'react'
import type { FaqItem } from '../../content/types'

interface Props {
  item: FaqItem
  defaultOpen?: boolean
}

export default function Accordion({ item, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between p-4 text-left bg-white hover:bg-unb-azul-pale transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-unb-azul"
        aria-expanded={open}
      >
        <span className="font-medium text-unb-texto pr-4">{item.pergunta}</span>
        <span className="text-unb-azul text-xl flex-shrink-0 mt-0.5">
          {open ? '−' : '+'}
        </span>
      </button>

      {open && (
        <div className="px-4 pb-4 bg-white border-t border-gray-100">
          <p className="text-gray-700 leading-relaxed mt-3">{item.resposta}</p>
          {item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {item.tags.map((tag) => (
                <span key={tag} className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
