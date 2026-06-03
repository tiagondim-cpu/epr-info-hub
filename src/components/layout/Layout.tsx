import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import MobileSidebar from './MobileSidebar'

const pageTitles: Record<string, string> = {
  '/':              'Início',
  '/jornada':       'Minha Jornada',
  '/faq':           'FAQ',
  '/procedimentos': 'Procedimentos',
  '/links':         'Links Úteis',
  '/primeiros-passos': 'Primeiros Passos',
  '/calendario':       'Calendário Acadêmico',
  '/fluxo':            'Fluxo do Curso',
}

export default function Layout() {
  const location = useLocation()
  const title = pageTitles[location.pathname] ?? 'EPR Info Hub'

  return (
    <>
      <ScrollRestoration />
      <div className="flex h-screen w-full overflow-hidden bg-surface-muted">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0 overflow-auto">
          {/* TopBar mobile */}
          <header className="lg:hidden flex items-center gap-3 px-4 py-3 bg-surface border-b border-border sticky top-0 z-30">
            <MobileSidebar />
            <div className="flex items-center gap-2">
              <img src="/unb-logo.png" alt="Logo UnB" className="w-7 h-7 object-contain" />
              <span className="text-sm font-semibold text-text-primary">{title}</span>
            </div>
          </header>
          <main className="flex-1 px-5 py-6 sm:px-6 lg:px-10 lg:py-8">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  )
}
