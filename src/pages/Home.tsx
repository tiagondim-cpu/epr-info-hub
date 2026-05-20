import { Link } from 'react-router-dom'
import SearchBar from '../components/ui/SearchBar'
import Badge from '../components/ui/Badge'
import { temaCards } from '../content/temas'

const icones: Record<string, string> = {
  briefcase: '💼',
  star:      '⭐',
  lock:      '🔒',
  clock:     '⏳',
  alert:     '⚠️',
  chart:     '📊',
}

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-br from-unb-azul to-unb-azul-light py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            EPR Info Hub
          </h1>
          <p className="text-blue-200 text-lg mt-2 mb-8">
            Tudo que você precisa saber sobre seu curso, num só lugar.
          </p>
          <SearchBar />
          <p className="text-blue-300 text-sm mt-3">
            Busque por: estágio, trancamento, IRA, atividades complementares, desligamento...
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-unb-texto">Temas Mais Buscados</h2>
            <p className="text-gray-500 mt-1">Clique no tema que você precisa saber mais</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {temaCards.map((tema) => (
              <Link
                key={tema.id}
                to={tema.rota}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:border-unb-azul hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-3">
                  <div className="text-2xl flex-shrink-0 w-10 h-10 bg-unb-azul-pale rounded-xl flex items-center justify-center">
                    {icones[tema.icone] ?? '📌'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-unb-texto group-hover:text-unb-azul transition-colors">
                      {tema.titulo}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">{tema.descricao}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {tema.badges.map((badge, i) => (
                        <Badge key={i} {...badge} />
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-4 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-unb-texto text-center mb-8">
            Acesso Rápido por Jornada
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { emoji: '🎓', label: 'Início do Curso',  rota: '/jornada#inicio'  },
              { emoji: '📚', label: 'Durante o Curso',  rota: '/jornada#durante' },
              { emoji: '🏢', label: 'Meio do Curso',    rota: '/jornada#meio'    },
              { emoji: '🔧', label: 'Final do Curso',   rota: '/jornada#final'   },
              { emoji: '⚠️', label: 'Situações de Risco', rota: '/jornada#risco' },
            ].map((item) => (
              <Link
                key={item.rota}
                to={item.rota}
                className="flex flex-col items-center p-4 rounded-xl bg-unb-azul-pale hover:bg-unb-azul hover:text-white transition-all text-center group"
              >
                <span className="text-2xl mb-2">{item.emoji}</span>
                <span className="text-xs font-medium text-unb-azul group-hover:text-white leading-tight">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-unb-verde-pale py-10 px-4 border-t border-green-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-unb-texto mb-4">Guias Passo a Passo</h2>
          <p className="text-gray-600 mb-6">
            Procedimentos detalhados para os processos mais críticos do curso.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            {[
              'Como trancar pelo SEI',
              'Inscrição no Estágio Obrigatório',
              'Validar Atividades Complementares',
              'Pedir prorrogação de prazo',
            ].map((titulo) => (
              <Link
                key={titulo}
                to="/procedimentos"
                className="flex items-center gap-3 bg-white p-4 rounded-xl border border-green-100 hover:border-unb-verde hover:shadow-sm transition-all"
              >
                <span className="w-6 h-6 bg-unb-verde rounded-full flex items-center justify-center text-white text-xs flex-shrink-0">
                  →
                </span>
                <span className="text-sm font-medium text-unb-texto">{titulo}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-unb-azul py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-200 text-sm">
            Informações baseadas em fontes oficiais: epr.unb.br, saa.unb.br, deg.unb.br e SIGAA.
            Em caso de dúvida, consulte a secretaria do EPR:{' '}
            <a href="mailto:epr@unb.br" className="text-white underline hover:no-underline">
              epr@unb.br
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
