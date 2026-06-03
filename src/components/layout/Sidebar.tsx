import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import * as Tooltip from '@radix-ui/react-tooltip'
import { cn } from '../../lib/utils'
import {
  Home,
  GraduationCap,
  HelpCircle,
  ClipboardList,
  Link2,
  Rocket,
  CalendarDays,
  Network,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

const navItems = [
  { to: '/', label: 'Início', icon: Home },
  { to: '/jornada', label: 'Minha Jornada', icon: GraduationCap },
  { to: '/faq', label: 'FAQ', icon: HelpCircle },
  { to: '/procedimentos', label: 'Procedimentos', icon: ClipboardList },
  { to: '/primeiros-passos', label: 'Primeiros Passos', icon: Rocket },
  { to: '/calendario', label: 'Calendário', icon: CalendarDays },
  { to: '/fluxo', label: 'Fluxo do Curso', icon: Network },
  { to: '/links', label: 'Links Úteis', icon: Link2 },
]

export default function Sidebar() {
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(() => {
    try {
      return localStorage.getItem('sidebar-collapsed') === 'true'
    } catch {
      return false
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('sidebar-collapsed', String(collapsed))
    } catch {
      /* noop */
    }
  }, [collapsed])

  const isRouteActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

  return (
    <Tooltip.Provider delayDuration={100}>
      <motion.aside
        animate={{ width: collapsed ? 60 : 240 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="hidden lg:flex flex-col h-screen bg-surface border-r border-border shrink-0 overflow-hidden"
      >
        <div className="flex items-center gap-3 px-3 py-5 border-b border-divider">
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
                <p className="text-sm font-bold text-text-primary leading-tight truncate">EPR Info Hub</p>
                <p className="text-[11px] text-text-subtle leading-tight truncate">Eng. de Produção / UnB</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-1" aria-label="Navegação principal">
          {navItems.map(({ to, label, icon: Icon }) => {
            const isActive = isRouteActive(to)

            return (
              <Tooltip.Root key={to}>
                <Tooltip.Trigger asChild>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-150',
                      isActive
                        ? 'bg-nav-active text-text-primary'
                        : 'text-text-muted hover:bg-surface-muted hover:text-text-primary'
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="sidebar-active-indicator"
                        className="absolute left-1 top-1/2 -translate-y-1/2 h-5 w-1 rounded-full bg-accent"
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
                  </NavLink>
                </Tooltip.Trigger>
                {collapsed && (
                  <Tooltip.Portal>
                    <Tooltip.Content
                      side="right"
                      sideOffset={8}
                      className="z-50 bg-text-primary text-white text-xs px-2.5 py-1.5 rounded-lg shadow-lg"
                    >
                      {label}
                      <Tooltip.Arrow className="fill-text-primary" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                )}
              </Tooltip.Root>
            )
          })}
        </nav>

        <div className="border-t border-divider p-2">
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button
                onClick={() => setCollapsed((c) => !c)}
                className="w-full flex items-center justify-center p-2 rounded-lg text-text-subtle hover:bg-surface-muted hover:text-text-primary transition-colors"
                aria-label={collapsed ? 'Expandir sidebar' : 'Recolher sidebar'}
              >
                {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                side="right"
                sideOffset={8}
                className="z-50 bg-text-primary text-white text-xs px-2.5 py-1.5 rounded-lg shadow-lg"
              >
                {collapsed ? 'Expandir' : 'Recolher'}
                <Tooltip.Arrow className="fill-text-primary" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </div>
      </motion.aside>
    </Tooltip.Provider>
  )
}
