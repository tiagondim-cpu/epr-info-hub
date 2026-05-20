import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import * as Dialog from '@radix-ui/react-dialog'
import { cn } from '../../lib/utils'
import {
  Home,
  GraduationCap,
  HelpCircle,
  ClipboardList,
  Link2,
  Menu,
  X,
} from 'lucide-react'

const navItems = [
  { to: '/',               label: 'Início',        icon: Home,          desc: 'Visão geral e busca rápida' },
  { to: '/jornada',        label: 'Minha Jornada', icon: GraduationCap, desc: 'Por fase do curso' },
  { to: '/faq',            label: 'FAQ',            icon: HelpCircle,    desc: 'Perguntas frequentes' },
  { to: '/procedimentos',  label: 'Procedimentos',  icon: ClipboardList, desc: 'Passo a passo no SEI/SIGAA' },
  { to: '/links',          label: 'Links Úteis',    icon: Link2,         desc: 'Canais e formulários oficiais' },
]

export default function MobileSidebar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Abrir menu"
        >
          <Menu size={20} />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden" />
        <Dialog.Content
          className="fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-xl flex flex-col lg:hidden"
          aria-describedby={undefined}
        >
          {/* Cabeçalho do drawer */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <img src="/unb-logo.png" alt="Logo UnB" className="w-9 h-9 object-contain" />
              <div>
                <p className="text-sm font-bold text-unb-azul leading-tight">EPR Info Hub</p>
                <p className="text-xs text-slate-400">Eng. de Produção / UnB</p>
              </div>
            </div>
            <Dialog.Close className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 transition-colors">
              <X size={18} />
            </Dialog.Close>
          </div>

          {/* Navegação */}
          <nav className="flex-1 overflow-y-auto py-3 px-3 space-y-1">
            {navItems.map(({ to, label, icon: Icon, desc }) => {
              const isActive = to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)
              return (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'flex items-center gap-3 rounded-xl px-3 py-3 transition-colors',
                    isActive
                      ? 'bg-unb-azul text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  )}
                >
                  <Icon size={20} className="shrink-0" />
                  <div>
                    <p className="text-sm font-semibold leading-tight">{label}</p>
                    <p className={cn('text-xs mt-0.5', isActive ? 'text-blue-200' : 'text-slate-400')}>
                      {desc}
                    </p>
                  </div>
                </NavLink>
              )
            })}
          </nav>

          {/* Rodapé do drawer */}
          <div className="border-t border-slate-100 px-4 py-3">
            <p className="text-xs text-slate-400 text-center">
              Atualizado para 2026/1 · epr.unb.br
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
