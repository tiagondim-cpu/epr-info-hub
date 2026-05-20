import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import * as Tooltip from '@radix-ui/react-tooltip'
import { cn } from '../../lib/utils'
import {
  Home,
  GraduationCap,
  HelpCircle,
  ClipboardList,
  Link2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

const navItems = [
  { to: '/',               label: 'Início',        icon: Home },
  { to: '/jornada',        label: 'Minha Jornada', icon: GraduationCap },
  { to: '/faq',            label: 'FAQ',            icon: HelpCircle },
  { to: '/procedimentos',  label: 'Procedimentos',  icon: ClipboardList },
  { to: '/links',          label: 'Links Úteis',    icon: Link2 },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(() => {
    try { return localStorage.getItem('sidebar-collapsed') === 'true' } catch { return false }
  })

  useEffect(() => {
    try { localStorage.setItem('sidebar-collapsed', String(collapsed)) } catch { /* noop */ }
  }, [collapsed])

  return (
    <Tooltip.Provider delayDuration={0}>
      <aside
        className={cn(
          'hidden lg:flex flex-col h-screen bg-white border-r border-slate-200 transition-all duration-200 shrink-0',
          collapsed ? 'w-[60px]' : 'w-[240px]'
        )}
      >
        {/* Logo + título */}
        <div className="flex items-center gap-3 px-3 py-4 border-b border-slate-100 overflow-hidden">
          <img
            src="/unb-logo.png"
            alt="Logo UnB"
            className="w-9 h-9 object-contain shrink-0"
          />
          {!collapsed && (
            <div className="min-w-0">
              <p className="text-sm font-bold text-unb-azul leading-tight truncate">EPR Info Hub</p>
              <p className="text-xs text-slate-400 leading-tight truncate">Eng. de Produção / UnB</p>
            </div>
          )}
        </div>

        {/* Navegação */}
        <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-0.5">
          {navItems.map(({ to, label, icon: Icon }) => (
            <Tooltip.Root key={to}>
              <Tooltip.Trigger asChild>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center gap-3 rounded-lg px-2.5 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-unb-azul text-white'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    )
                  }
                >
                  <Icon size={18} className="shrink-0" />
                  {!collapsed && <span className="truncate">{label}</span>}
                </NavLink>
              </Tooltip.Trigger>
              {collapsed && (
                <Tooltip.Portal>
                  <Tooltip.Content
                    side="right"
                    className="z-50 bg-slate-900 text-white text-xs px-2.5 py-1.5 rounded shadow-md"
                  >
                    {label}
                    <Tooltip.Arrow className="fill-slate-900" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              )}
            </Tooltip.Root>
          ))}
        </nav>

        {/* Botão colapsar */}
        <div className="border-t border-slate-100 p-2">
          <button
            onClick={() => setCollapsed((c) => !c)}
            className="w-full flex items-center justify-center gap-2 px-2.5 py-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 text-sm transition-colors"
            title={collapsed ? 'Expandir sidebar' : 'Recolher sidebar'}
          >
            {collapsed ? <ChevronRight size={16} /> : <><ChevronLeft size={16} /><span>Recolher</span></>}
          </button>
        </div>
      </aside>
    </Tooltip.Provider>
  )
}
