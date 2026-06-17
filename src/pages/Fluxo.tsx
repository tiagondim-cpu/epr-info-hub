import { ExternalLink, Network } from 'lucide-react'
import Badge from '../components/ui/Badge'
import AtualizadoEm from '../components/ui/AtualizadoEm'
import {
  fluxoCurso,
  fluxoTotaisReferencia,
  fontesFluxoCurso,
  novoCurriculo617,
} from '../content/fluxo'
import type { Disciplina } from '../content/types'
import { cn } from '../lib/utils'

const tipoDisciplina: Record<
  Disciplina['tipo'],
  { label: string; badge: 'alerta' | 'aviso' | 'info' | 'ok'; border: string }
> = {
  obrigatoria: {
    label: 'Obrigatória',
    badge: 'info',
    border: 'border-l-unb-azul',
  },
  optativa: {
    label: 'Optativa',
    badge: 'ok',
    border: 'border-l-unb-verde',
  },
  'modulo-livre': {
    label: 'Módulo livre',
    badge: 'aviso',
    border: 'border-l-unb-aviso',
  },
}

export default function Fluxo() {
  return (
    <div className="mx-auto max-w-6xl space-y-7 animate-page-enter">
      <div>
        <h1 className="text-[30px] font-bold leading-tight text-text-primary lg:text-[32px]">
          Fluxo do Curso
        </h1>
        <p className="mt-2 text-base text-text-muted">
          Grade organizada por semestre, com links para conferir currículo e fluxo nas fontes oficiais.
        </p>
        <AtualizadoEm area="fluxo" className="mt-3" />
      </div>

      <div className="rounded-xl border border-amber-300 bg-amber-50 p-5 text-sm leading-relaxed text-amber-900">
        <p className="font-semibold">{novoCurriculo617.titulo}</p>
        <p className="mt-1">{novoCurriculo617.descricao}</p>
      </div>

      <div className="rounded-xl border border-blue-200 bg-blue-50 p-5 text-sm leading-relaxed text-blue-900">
        <p className="font-semibold">Grade da matriz atual (currículo 2021)</p>
        <p className="mt-1">
          Baseada na grade curricular do Projeto Político-Pedagógico (PPP) do curso. Confirme sempre os pré-requisitos e a matriz aplicável a você no SIGAA antes de planejar sua matrícula.
        </p>
      </div>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-surface p-5 shadow-sm">
          <p className="text-xs font-bold uppercase text-text-subtle">Semestres</p>
          <p className="mt-2 text-2xl font-bold text-text-primary">
            {fluxoTotaisReferencia.semestres}
          </p>
        </div>
        <div className="rounded-xl border border-border bg-surface p-5 shadow-sm">
          <p className="text-xs font-bold uppercase text-text-subtle">Créditos totais</p>
          <p className="mt-2 text-2xl font-bold text-text-primary">
            {fluxoTotaisReferencia.creditos}
          </p>
        </div>
        <div className="rounded-xl border border-border bg-surface p-5 shadow-sm">
          <p className="text-xs font-bold uppercase text-text-subtle">Obrigatórios</p>
          <p className="mt-2 text-2xl font-bold text-text-primary">
            {fluxoTotaisReferencia.creditosObrigatorios}
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xs font-bold uppercase text-text-subtle">Grade por semestre</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {fluxoCurso.map((semestre) => (
            <article
              key={semestre.numero}
              className="rounded-xl border border-border bg-surface p-5 shadow-sm"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-unb-azul-pale">
                    <Network size={17} className="text-unb-azul" />
                  </div>
                  <h3 className="text-base font-semibold text-text-primary">
                    {semestre.numero}º semestre
                  </h3>
                </div>
                <span className="text-xs font-semibold text-text-subtle">
                  {semestre.disciplinas.length} disciplinas
                </span>
              </div>

              {semestre.disciplinas.length === 0 ? (
                <p className="rounded-xl border border-dashed border-border bg-surface-muted p-4 text-sm leading-relaxed text-text-muted">
                  Aguardando transcrição dos dados oficiais deste semestre.
                </p>
              ) : (
                <ul className="space-y-3">
                  {semestre.disciplinas.map((disciplina) => {
                    const tipo = tipoDisciplina[disciplina.tipo]
                    return (
                      <li
                        key={`${disciplina.codigo}-${disciplina.nome}`}
                        className={cn(
                          'rounded-xl border border-l-4 border-border bg-surface-muted p-4',
                          tipo.border
                        )}
                      >
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <Badge texto={tipo.label} tipo={tipo.badge} />
                          <span className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs font-semibold text-text-subtle">
                            {disciplina.creditos} créditos
                          </span>
                        </div>
                        <p className="text-xs font-bold uppercase text-text-subtle">
                          {disciplina.codigo}
                        </p>
                        <p className="mt-1 text-sm font-semibold leading-snug text-text-primary">
                          {disciplina.nome}
                        </p>
                      </li>
                    )
                  })}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-xs font-bold uppercase text-text-subtle">Fontes oficiais</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {fontesFluxoCurso.map((fonte) => (
            <a
              key={fonte.url}
              href={fonte.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-4 rounded-xl border border-border bg-surface p-5 shadow-sm transition-all hover:border-text-subtle hover:shadow-md"
            >
              <span className="text-sm font-semibold text-text-primary">{fonte.texto}</span>
              <ExternalLink
                size={17}
                className="mt-0.5 shrink-0 text-text-subtle transition-colors group-hover:text-unb-azul"
              />
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
