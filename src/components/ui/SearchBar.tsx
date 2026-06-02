import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'
import { cn } from '../../lib/utils'
import { useSearch } from '../../hooks/useSearch'

const tipoLabel: Record<string, string> = {
  faq: 'FAQ',
  tema: 'Tema',
  procedimento: 'Guia',
  link: 'Link',
}

const tipoColor: Record<string, string> = {
  faq: 'bg-blue-50 text-blue-700 border-blue-200',
  tema: 'bg-purple-100 text-purple-700 border-purple-200',
  procedimento: 'bg-green-50 text-green-700 border-green-200',
  link: 'bg-surface-muted text-text-muted border-border',
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
        <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-subtle" />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          placeholder="Buscar: estágio, trancamento, IRA, atividades..."
          className="w-full rounded-xl border border-border bg-surface py-3 pl-11 pr-4 text-sm text-text-primary placeholder:text-text-subtle shadow-sm transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/15"
          aria-label="Buscar no EPR Info Hub"
        />
      </div>

      {showDropdown && (
        <div className="absolute top-full left-0 right-0 z-50 mt-2 overflow-hidden rounded-xl border border-border bg-surface shadow-lg">
          {results.length === 0 ? (
            <p className="px-4 py-3 text-sm text-text-muted">
              Nenhum resultado para "{query}"
            </p>
          ) : (
            <ul className="divide-y divide-divider">
              {results.map((item) => (
                <li key={item.id}>
                  <button
                    onMouseDown={() => handleSelect(item.rota)}
                    className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-surface-muted"
                  >
                    <span className={cn('shrink-0 rounded-full border px-2 py-0.5 text-xs font-medium', tipoColor[item.tipo] ?? 'bg-surface-muted text-text-muted border-border')}>
                      {tipoLabel[item.tipo]}
                    </span>
                    <span className="truncate text-sm text-text-primary">{item.titulo}</span>
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
