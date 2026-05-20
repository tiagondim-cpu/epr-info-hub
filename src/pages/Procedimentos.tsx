import { useState } from 'react'
import StepGuide from '../components/ui/StepGuide'
import { procedimentos } from '../content/procedimentos'

export default function Procedimentos() {
  const [ativo, setAtivo] = useState(procedimentos[0].id)
  const proc = procedimentos.find((p) => p.id === ativo) ?? procedimentos[0]

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-unb-texto">Procedimentos</h1>
        <p className="text-gray-500 mt-2">
          Guias passo a passo para os processos mais criticos do curso.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <aside className="md:w-64 flex-shrink-0">
          <nav className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            {procedimentos.map((p) => (
              <button
                key={p.id}
                onClick={() => setAtivo(p.id)}
                className={`w-full text-left px-4 py-3.5 text-sm font-medium border-b border-gray-50 last:border-0 transition-colors ${
                  ativo === p.id
                    ? 'bg-unb-azul text-white'
                    : 'text-gray-700 hover:bg-unb-azul-pale hover:text-unb-azul'
                }`}
              >
                {p.titulo}
              </button>
            ))}
          </nav>
        </aside>

        <div className="flex-1">
          <StepGuide procedimento={proc} />
        </div>
      </div>
    </div>
  )
}
