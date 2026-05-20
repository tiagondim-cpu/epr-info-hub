import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'
import { cn } from '../../lib/utils'
import { useSearch } from '../../hooks/useSearch'

const tipoLabel: Record<string, string> = {
  faq:          'FAQ',
  tema:         'Tema',
  procedimento: 'Guia',
  link:         'Link',
}

const tipoColor: Record<string, string> = {
  faq:          'bg-blue-100 text-blue-700',
  tema:         'bg-purple-100 text-purple-700',
  procedimento: 'bg-green-100 text-green-700',
  link:         'bg-slate-100 text-slate-600',
}

export default function SearchBar() {
  const { query, setQuery, results } = useSearch()
  const [focused, setFocused] = useState(false)
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSelect = (rota: string) => {
    setQuery('')
    setFocused(false)
    navigate(rota)
  }

  const showDropdown = focused && query.length >= 2

  return (
    <div className="relative w-full">
      <div className="relative">
        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          placeholder="Buscar: estágio, trancamento, IRA, atividades..."
          className="w-full pl-9 pr-4 py-2.5 text-sm rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-unb-azul focus:ring-2 focus:ring-unb-azul/10 transition-all"
          aria-label="Buscar no EPR Info Hub"
        />
      </div>

      {showDropdown && (
        <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden z-50">
          {results.length === 0 ? (
            <p className="px-4 py-3 text-sm text-slate-500">
              Nenhum resultado para "{query}"
            </p>
          ) : (
            <ul className="divide-y divide-slate-50">
              {results.map((item) => (
                <li key={item.id}>
                  <button
                    onMouseDown={() => handleSelect(item.rota)}
                    className="w-full text-left px-3.5 py-2.5 hover:bg-slate-50 flex items-center gap-2.5 transition-colors"
                  >
                    <span className={cn('text-xs font-medium px-2 py-0.5 rounded shrink-0', tipoColor[item.tipo] ?? 'bg-slate-100 text-slate-600')}>
                      {tipoLabel[item.tipo]}
                    </span>
                    <span className="text-sm text-slate-700 truncate">{item.titulo}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
