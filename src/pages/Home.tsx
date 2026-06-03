import type { ComponentType } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Briefcase,
  Star,
  Lock,
  Clock,
  AlertTriangle,
  BarChart2,
  Rocket,
  CalendarDays,
  Network,
} from 'lucide-react'
import SearchBar from '../components/ui/SearchBar'
import Badge from '../components/ui/Badge'
import { temaCards } from '../content/temas'
import { faqItems } from '../content/faq'
import { procedimentos } from '../content/procedimentos'
import { links } from '../content/links'

const iconMap: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  briefcase: Briefcase,
  star: Star,
  lock: Lock,
  clock: Clock,
  alert: AlertTriangle,
  chart: BarChart2,
}

const jornadaItems = [
  { label: 'Início', hash: 'inicio', num: '1–2', desc: 'semestre' },
  { label: 'Durante', hash: 'durante', num: '3–6', desc: 'semestre' },
  { label: 'Meio', hash: 'meio', num: '5–8', desc: 'semestre' },
  { label: 'Final', hash: 'final', num: '9–12', desc: 'semestre' },
  { label: 'Risco', hash: 'risco', num: '!', desc: 'urgente' },
]

const secretariaItems = [
  {
    label: 'Primeiros Passos',
    to: '/primeiros-passos',
    desc: 'Orientações iniciais para calouros de Produção.',
    icon: Rocket,
  },
  {
    label: 'Calendário Acadêmico',
    to: '/calendario',
    desc: 'Datas-chave do semestre com link para a SAA.',
    icon: CalendarDays,
  },
  {
    label: 'Fluxo do Curso',
    to: '/fluxo',
    desc: 'Grade por semestre e fontes oficiais do currículo.',
    icon: Network,
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' as const } },
}

export default function Home() {
  const stats = [
    { label: 'temas', value: temaCards.length },
    { label: 'FAQs', value: faqItems.length },
    { label: 'guias', value: procedimentos.length },
    { label: 'links', value: links.length },
  ]

  return (
    <div className="mx-auto max-w-6xl space-y-10 animate-page-enter">
      <div className="space-y-5">
        <div>
          <h1 className="text-[30px] font-bold leading-tight text-text-primary lg:text-[32px]">
            Bem-vindo ao EPR Info Hub
          </h1>
          <p className="mt-2 text-base text-text-muted">
            Tudo que você precisa saber sobre seu curso, num só lugar.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {stats.map((s, i) => (
            <span key={s.label} className="flex items-center gap-1.5 text-sm text-text-subtle">
              <span className="font-semibold text-text-primary">{s.value}</span>
              {s.label}
              {i < stats.length - 1 && <span className="ml-2 text-text-subtle">·</span>}
            </span>
          ))}
        </div>

        <SearchBar />
      </div>

      <section>
        <h2 className="mb-4 text-xs font-bold uppercase text-text-subtle">Demandas da secretaria</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {secretariaItems.map(({ label, to, desc, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className="group flex h-full flex-col gap-4 rounded-xl border border-border bg-surface p-5 transition-all hover:border-text-subtle hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-unb-azul-pale transition-colors group-hover:bg-nav-active">
                    <Icon size={18} className="text-unb-azul" />
                  </div>
                  <h3 className="text-base font-semibold leading-tight text-text-primary transition-colors group-hover:text-unb-azul">
                    {label}
                  </h3>
                </div>
                <ArrowRight size={16} className="mt-1 shrink-0 text-text-subtle transition-all group-hover:translate-x-0.5 group-hover:text-unb-azul" />
              </div>
              <p className="text-sm leading-relaxed text-text-muted">{desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xs font-bold uppercase text-text-subtle">Temas principais</h2>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {temaCards.map((tema) => {
            const Icon = iconMap[tema.icone] ?? Briefcase
            return (
              <motion.div key={tema.id} variants={item}>
                <Link
                  to={tema.rota}
                  className="group flex h-full flex-col gap-4 rounded-xl border border-border bg-surface p-5 transition-all hover:border-text-subtle hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-unb-azul-pale transition-colors group-hover:bg-nav-active">
                        <Icon size={18} className="text-unb-azul" />
                      </div>
                      <h3 className="text-base font-semibold leading-tight text-text-primary transition-colors group-hover:text-unb-azul">
                        {tema.titulo}
                      </h3>
                    </div>
                    <ArrowRight size={16} className="mt-1 shrink-0 text-text-subtle transition-all group-hover:translate-x-0.5 group-hover:text-unb-azul" />
                  </div>
                  <p className="text-sm leading-relaxed text-text-muted">{tema.descricao}</p>
                  {tema.badges.length > 0 && (
                    <div className="mt-auto flex flex-wrap gap-2">
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

      <section>
        <h2 className="mb-4 text-xs font-bold uppercase text-text-subtle">Por fase do curso</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {jornadaItems.map((j) => (
            <Link
              key={j.hash}
              to={`/jornada#${j.hash}`}
              className="group flex flex-col items-center rounded-xl border border-border bg-surface p-4 text-center transition-all hover:border-text-subtle hover:bg-surface"
            >
              <span
                className={`mb-2 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                  j.hash === 'risco'
                    ? 'bg-red-100 text-red-700 group-hover:bg-red-600 group-hover:text-white'
                    : 'bg-surface-muted text-text-muted group-hover:bg-text-primary group-hover:text-white'
                }`}
              >
                {j.num}
              </span>
              <span className="text-sm font-semibold leading-tight text-text-primary">{j.label}</span>
              <span className="mt-1 text-xs text-text-subtle">{j.desc}</span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xs font-bold uppercase text-text-subtle">Guias passo a passo</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {procedimentos.map((p) => (
            <Link
              key={p.id}
              to="/procedimentos"
              className="group flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-4 transition-all hover:border-text-subtle hover:shadow-sm"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-unb-verde transition-transform group-hover:scale-125" />
              <span className="flex-1 text-sm font-semibold text-text-primary">{p.titulo}</span>
              <ArrowRight size={16} className="shrink-0 text-text-subtle transition-all group-hover:translate-x-0.5 group-hover:text-unb-verde" />
            </Link>
          ))}
        </div>
      </section>

      <div className="rounded-xl border border-border bg-surface px-5 py-4 text-center text-sm text-text-muted">
        Informações baseadas em fontes oficiais: epr.unb.br, saa.unb.br, deg.unb.br e SIGAA.
        Dúvidas:{' '}
        <a href="mailto:epr@unb.br" className="font-semibold text-unb-azul hover:underline">
          epr@unb.br
        </a>
      </div>
    </div>
  )
}
