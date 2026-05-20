import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSearch } from '../../hooks/useSearch'

const tipoLabel: Record<string, string> = {
  faq:          'FAQ',
  tema:         'Tema',
  procedimento: 'Procedimento',
  link:         'Link',
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
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
          🔍
        </span>
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          placeholder="Buscar: estágio, trancamento, IRA, atividades..."
          className="w-full pl-11 pr-4 py-3.5 text-base rounded-xl border-2 border-gray-200 bg-white shadow-sm focus:outline-none focus:border-unb-azul transition-colors"
          aria-label="Buscar no EPR Info Hub"
        />
      </div>

      {showDropdown && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50">
          {results.length === 0 ? (
            <p className="px-4 py-3 text-gray-500 text-sm">
              Nenhum resultado para "{query}"
            </p>
          ) : (
            <ul>
              {results.map((item) => (
                <li key={item.id}>
                  <button
                    onMouseDown={() => handleSelect(item.rota)}
                    className="w-full text-left px-4 py-3 hover:bg-unb-azul-pale flex items-start gap-3 transition-colors"
                  >
                    <span className="text-xs font-medium text-unb-azul bg-unb-azul-pale px-2 py-0.5 rounded mt-0.5 flex-shrink-0">
                      {tipoLabel[item.tipo]}
                    </span>
                    <span className="text-sm text-unb-texto">{item.titulo}</span>
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
