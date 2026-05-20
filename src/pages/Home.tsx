import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Briefcase, Star, Lock, Clock, AlertTriangle, BarChart2 } from 'lucide-react'
import SearchBar from '../components/ui/SearchBar'
import Badge from '../components/ui/Badge'
import { temaCards } from '../content/temas'
import { faqItems } from '../content/faq'
import { procedimentos } from '../content/procedimentos'
import { links } from '../content/links'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  briefcase: Briefcase,
  star:      Star,
  lock:      Lock,
  clock:     Clock,
  alert:     AlertTriangle,
  chart:     BarChart2,
}

const jornadaItems = [
  { label: 'Início',    hash: 'inicio',  num: '1–2', desc: 'semestre' },
  { label: 'Durante',   hash: 'durante', num: '3–6', desc: 'semestre' },
  { label: 'Meio',      hash: 'meio',    num: '5–8', desc: 'semestre' },
  { label: 'Final',     hash: 'final',   num: '9–12', desc: 'semestre' },
  { label: 'Risco',     hash: 'risco',   num: '!',    desc: 'urgente' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' as const } },
}

export default function Home() {
  const stats = [
    { label: 'temas', value: temaCards.length },
    { label: 'FAQs', value: faqItems.length },
    { label: 'guias', value: procedimentos.length },
    { label: 'links', value: links.length },
  ]

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-page-enter">
      {/* Cabeçalho */}
      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Bem-vindo ao EPR Info Hub</h1>
          <p className="text-slate-500 mt-1 text-sm">
            Tudo que você precisa saber sobre seu curso, num só lugar.
          </p>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 flex-wrap">
          {stats.map((s, i) => (
            <span key={s.label} className="flex items-center gap-1.5 text-xs text-slate-400">
              <span className="font-semibold text-slate-700">{s.value}</span>
              {s.label}
              {i < stats.length - 1 && <span className="text-slate-200 ml-2">·</span>}
            </span>
          ))}
        </div>

        {/* SearchBar integrada */}
        <div className="relative">
          <SearchBar />
        </div>
      </div>

      {/* Temas principais */}
      <section>
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Temas principais</h2>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {temaCards.map((tema) => {
            const Icon = iconMap[tema.icone] ?? Briefcase
            return (
              <motion.div key={tema.id} variants={item}>
                <Link
                  to={tema.rota}
                  className="group bg-white rounded-xl p-4 border border-slate-200 hover:border-unb-azul hover:shadow-md transition-all flex flex-col gap-3 h-full"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 bg-unb-azul-pale rounded-lg flex items-center justify-center shrink-0 group-hover:bg-unb-azul/10 transition-colors">
                        <Icon size={15} className="text-unb-azul" />
                      </div>
                      <h3 className="text-sm font-semibold text-slate-900 group-hover:text-unb-azul transition-colors leading-tight">
                        {tema.titulo}
                      </h3>
                    </div>
                    <ArrowRight size={14} className="text-slate-300 group-hover:text-unb-azul group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5" />
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{tema.descricao}</p>
                  {tema.badges.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {tema.badges.map((badge, i) => (
                        <Badge key={i} {...badge} />
                      ))}
                    </div>
                  )}
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </section>

      {/* Por fase do curso */}
      <section>
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Por fase do curso</h2>
        <div className="grid grid-cols-5 gap-2">
          {jornadaItems.map((j) => (
            <Link
              key={j.hash}
              to={`/jornada#${j.hash}`}
              className="group flex flex-col items-center text-center p-3 rounded-xl bg-white border border-slate-200 hover:border-unb-azul hover:bg-unb-azul-pale transition-all"
            >
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mb-1.5 transition-colors
                ${j.hash === 'risco'
                  ? 'bg-red-100 text-red-600 group-hover:bg-red-500 group-hover:text-white'
                  : 'bg-slate-100 text-slate-600 group-hover:bg-unb-azul group-hover:text-white'
                }`}
              >
                {j.num}
              </span>
              <span className="text-xs font-semibold text-slate-700 group-hover:text-unb-azul leading-tight transition-colors">
                {j.label}
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5">{j.desc}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Guias passo a passo */}
      <section>
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Guias passo a passo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {procedimentos.map((p) => (
            <Link
              key={p.id}
              to="/procedimentos"
              className="group flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-slate-200 hover:border-unb-verde hover:shadow-sm transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-unb-verde shrink-0 group-hover:scale-125 transition-transform" />
              <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors flex-1">{p.titulo}</span>
              <ArrowRight size={14} className="ml-auto text-slate-300 group-hover:text-unb-verde group-hover:translate-x-0.5 transition-all shrink-0" />
            </Link>
          ))}
        </div>
      </section>

      {/* Rodapé informativo */}
      <div className="rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-xs text-slate-500 text-center">
        Informações baseadas em fontes oficiais: epr.unb.br, saa.unb.br, deg.unb.br e SIGAA.
        Dúvidas: <a href="mailto:epr@unb.br" className="text-unb-azul hover:underline font-medium">epr@unb.br</a>
      </div>
    </div>
  )
}
