import { Link } from 'react-router-dom'
import { ArrowRight, Briefcase, Star, Lock, Clock, AlertTriangle, BarChart2, GraduationCap, Search } from 'lucide-react'
import SearchBar from '../components/ui/SearchBar'
import Badge from '../components/ui/Badge'
import { temaCards } from '../content/temas'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  briefcase: Briefcase,
  star:      Star,
  lock:      Lock,
  clock:     Clock,
  alert:     AlertTriangle,
  chart:     BarChart2,
}

const jornadaItems = [
  { label: 'Início do Curso',    hash: 'inicio',  desc: '1º–2º semestre'   },
  { label: 'Durante o Curso',    hash: 'durante', desc: '3º–6º semestre'   },
  { label: 'Meio do Curso',      hash: 'meio',    desc: '5º–8º semestre'   },
  { label: 'Final do Curso',     hash: 'final',   desc: '9º–12º semestre'  },
  { label: 'Situações de Risco', hash: 'risco',   desc: 'Fase probatória'  },
]

const procedimentoItems = [
  'Como trancar pelo SEI',
  'Inscrição no Estágio Obrigatório',
  'Validar Atividades Complementares',
  'Pedir prorrogação de prazo',
]

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto space-y-10">
      {/* Cabeçalho da página */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <GraduationCap size={20} className="text-unb-azul" />
          <span className="text-sm font-medium text-unb-azul">EPR / UnB — 2026/1</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Bem-vindo ao EPR Info Hub</h1>
        <p className="text-slate-500 mt-1 text-sm">
          Tudo que você precisa saber sobre seu curso, num só lugar. Busque ou navegue pelos temas abaixo.
        </p>
      </div>

      {/* SearchBar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
        <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2.5 flex items-center gap-1.5">
          <Search size={12} />
          Busca rápida
        </p>
        <SearchBar />
        <p className="text-xs text-slate-400 mt-2">
          Tente: estágio, trancamento, IRA, atividades complementares, desligamento...
        </p>
      </div>

      {/* Temas */}
      <section>
        <h2 className="text-base font-semibold text-slate-700 mb-3">Temas principais</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {temaCards.map((tema) => {
            const Icon = iconMap[tema.icone] ?? Briefcase
            return (
              <Link
                key={tema.id}
                to={tema.rota}
                className="group bg-white rounded-xl p-4 border border-slate-200 hover:border-unb-azul hover:shadow-md transition-all flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 bg-unb-azul-pale rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={15} className="text-unb-azul" />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-900 group-hover:text-unb-azul transition-colors leading-tight">
                      {tema.titulo}
                    </h3>
                  </div>
                  <ArrowRight size={14} className="text-slate-300 group-hover:text-unb-azul transition-colors shrink-0 mt-0.5" />
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{tema.descricao}</p>
                {tema.badges.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {tema.badges.map((badge, i) => (
                      <Badge key={i} {...badge} />
                    ))}
                  </div>
                )}
              </Link>
            )
          })}
        </div>
      </section>

      {/* Por fase da jornada */}
      <section>
        <h2 className="text-base font-semibold text-slate-700 mb-3">Por fase do curso</h2>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
          {jornadaItems.map((item) => (
            <Link
              key={item.hash}
              to={`/jornada#${item.hash}`}
              className="group flex flex-col items-center text-center p-3.5 rounded-xl bg-white border border-slate-200 hover:border-unb-azul hover:bg-unb-azul-pale transition-all"
            >
              <span className="text-xs font-semibold text-slate-700 group-hover:text-unb-azul leading-tight transition-colors">
                {item.label}
              </span>
              <span className="text-xs text-slate-400 mt-0.5">{item.desc}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Procedimentos rápidos */}
      <section>
        <h2 className="text-base font-semibold text-slate-700 mb-3">Guias passo a passo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {procedimentoItems.map((titulo, i) => (
            <Link
              key={titulo}
              to="/procedimentos"
              className="group flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-slate-200 hover:border-unb-verde hover:shadow-sm transition-all"
            >
              <span className="w-6 h-6 rounded-full bg-unb-verde-pale text-unb-verde flex items-center justify-center text-xs font-bold shrink-0 group-hover:bg-unb-verde group-hover:text-white transition-colors">
                {i + 1}
              </span>
              <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">{titulo}</span>
              <ArrowRight size={14} className="ml-auto text-slate-300 group-hover:text-unb-verde transition-colors shrink-0" />
            </Link>
          ))}
        </div>
      </section>

      {/* Nota de rodapé */}
      <div className="rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-xs text-slate-500 text-center">
        Informações baseadas em fontes oficiais: epr.unb.br, saa.unb.br, deg.unb.br e SIGAA.
        Dúvidas: <a href="mailto:epr@unb.br" className="text-unb-azul hover:underline font-medium">epr@unb.br</a>
      </div>
    </div>
  )
}
