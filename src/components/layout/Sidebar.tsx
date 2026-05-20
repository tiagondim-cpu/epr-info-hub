import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
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
  { to: '/',              label: 'Início',        icon: Home },
  { to: '/jornada',       label: 'Minha Jornada', icon: GraduationCap },
  { to: '/faq',           label: 'FAQ',            icon: HelpCircle },
  { to: '/procedimentos', label: 'Procedimentos',  icon: ClipboardList },
  { to: '/links',         label: 'Links Úteis',    icon: Link2 },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(() => {
    try { return localStorage.getItem('sidebar-collapsed') === 'true' } catch { return false }
  })

  useEffect(() => {
    try { localStorage.setItem('sidebar-collapsed', String(collapsed)) } catch { /* noop */ }
  }, [collapsed])

  return (
    <Tooltip.Provider delayDuration={100}>
      <motion.aside
        animate={{ width: collapsed ? 60 : 240 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="hidden lg:flex flex-col h-screen bg-[#fafafa] border-r border-slate-200 shrink-0 overflow-hidden"
      >
        {/* Logo + título */}
        <div className="flex items-center gap-3 px-3 py-5 border-b border-slate-100">
          <img
            src="/unb-logo.png"
            alt="Logo UnB"
            className="w-8 h-8 object-contain shrink-0"
          />
          <AnimatePresence initial={false}>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.15 }}
                className="min-w-0"
              >
                <p className="text-sm font-bold text-unb-azul leading-tight truncate">EPR Info Hub</p>
                <p className="text-[11px] text-slate-400 leading-tight truncate">Eng. de Produção / UnB</p>
              </motion.div>
            )}
          </AnimatePresence>
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
                      'relative flex items-center gap-3 rounded-lg px-2.5 py-2.5 text-sm font-medium transition-all duration-150',
                      isActive
                        ? 'bg-unb-azul text-white shadow-sm shadow-blue-900/20'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span
                          layoutId="sidebar-active-indicator"
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-white/60 rounded-r"
                        />
                      )}
                      <Icon size={17} className="shrink-0" />
                      <AnimatePresence initial={false}>
                        {!collapsed && (
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.1 }}
                            className="truncate"
                          >
                            {label}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </NavLink>
              </Tooltip.Trigger>
              {collapsed && (
                <Tooltip.Portal>
                  <Tooltip.Content
                    side="right"
                    sideOffset={8}
                    className="z-50 bg-slate-900 text-white text-xs px-2.5 py-1.5 rounded-lg shadow-lg"
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
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button
                onClick={() => setCollapsed((c) => !c)}
                className="w-full flex items-center justify-center p-2 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
                aria-label={collapsed ? 'Expandir sidebar' : 'Recolher sidebar'}
              >
                {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                side="right"
                sideOffset={8}
                className="z-50 bg-slate-900 text-white text-xs px-2.5 py-1.5 rounded-lg shadow-lg"
              >
                {collapsed ? 'Expandir' : 'Recolher'}
                <Tooltip.Arrow className="fill-slate-900" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </div>
      </motion.aside>
    </Tooltip.Provider>
  )
}
