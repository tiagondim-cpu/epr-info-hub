import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Jornada from './pages/Jornada'
import FAQ from './pages/FAQ'
import Procedimentos from './pages/Procedimentos'
import Links from './pages/Links'
import PrimeirosPassos from './pages/PrimeirosPassos'
import Calendario from './pages/Calendario'
import Fluxo from './pages/Fluxo'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'jornada', element: <Jornada /> },
      { path: 'faq', element: <FAQ /> },
      { path: 'procedimentos', element: <Procedimentos /> },
      { path: 'links', element: <Links /> },
      { path: 'primeiros-passos', element: <PrimeirosPassos /> },
      { path: 'calendario', element: <Calendario /> },
      { path: 'fluxo', element: <Fluxo /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
