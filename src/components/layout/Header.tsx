import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/',              label: 'Início',        end: true },
  { to: '/jornada',       label: 'Minha Jornada', end: false },
  { to: '/faq',           label: 'FAQ',           end: false },
  { to: '/procedimentos', label: 'Procedimentos', end: false },
  { to: '/links',         label: 'Links Úteis',   end: false },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
      isActive
        ? 'bg-white/20 text-white'
        : 'text-blue-100 hover:bg-white/10 hover:text-white'
    }`

  return (
    <header className="bg-unb-azul shadow-md sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-unb-verde flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">EP</span>
            </div>
            <div className="leading-tight">
              <span className="text-white font-bold text-base block">EPR Info Hub</span>
              <span className="text-blue-200 text-xs hidden sm:block">Eng. de Produção / UnB</span>
            </div>
          </NavLink>

          <nav className="hidden md:flex items-center gap-1" aria-label="Navegação principal">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>

        {open && (
          <nav className="md:hidden pb-3 border-t border-white/10 mt-1 pt-3" aria-label="Menu mobile">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded-lg text-sm font-medium mb-1 transition-colors ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'text-blue-100 hover:bg-white/10 hover:text-white'
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
