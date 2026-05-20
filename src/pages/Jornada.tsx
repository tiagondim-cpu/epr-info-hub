import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Badge from '../components/ui/Badge'
import { jornadaFases } from '../content/jornada'

export default function Jornada() {
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (hash) {
      const el = document.getElementById(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.hash])

  return (
    <div>
      <div className="bg-gradient-to-br from-unb-azul to-unb-azul-light py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold text-white">Minha Jornada Academica</h1>
          <p className="text-blue-200 mt-2">
            Informacoes organizadas por fase do curso — do primeiro semestre a formatura.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {jornadaFases.map((fase) => (
              <a
                key={fase.id}
                href={`#${fase.id}`}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm text-white transition-colors"
              >
                {fase.titulo}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-16">
        {jornadaFases.map((fase) => (
          <section key={fase.id} id={fase.id}>
            <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-unb-azul">
              <h2 className="text-2xl font-bold text-unb-azul">{fase.titulo}</h2>
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                {fase.semestres}
              </span>
            </div>

            <div className="space-y-5">
              {fase.conteudo.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
                >
                  <h3 className="font-semibold text-unb-texto text-lg mb-2">{item.titulo}</h3>

                  {item.badges && item.badges.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {item.badges.map((badge, j) => (
                        <Badge key={j} {...badge} />
                      ))}
                    </div>
                  )}

                  <p className="text-gray-600 leading-relaxed">{item.descricao}</p>

                  {item.detalhes && item.detalhes.length > 0 && (
                    <ul className="mt-3 space-y-1.5">
                      {item.detalhes.map((detalhe, j) => (
                        <li key={j} className="flex gap-2 text-sm text-gray-600">
                          <span className="text-unb-verde flex-shrink-0 mt-0.5">✓</span>
                          <span>{detalhe}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.links && item.links.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-unb-azul bg-unb-azul-pale px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors"
                        >
                          {link.texto} →
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
