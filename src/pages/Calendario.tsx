import { CalendarDays, ExternalLink } from 'lucide-react'
import Badge from '../components/ui/Badge'
import AtualizadoEm from '../components/ui/AtualizadoEm'
import {
  calendarioAcademicoFonte,
  datasAcademicas,
  semestreVigente,
} from '../content/calendario'
import type { DataAcademica } from '../content/types'
import { encontrarProximaData } from '../lib/datasAcademicas'

const badgeLabel: Record<DataAcademica['tipo'], string> = {
  alerta: 'Prazo crítico',
  aviso: 'Atenção',
  info: 'Informação',
  ok: 'Confirmado',
}

function formatarData(valor: string): string {
  const [ano, mes, dia] = valor.split('-').map(Number)
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(ano, mes - 1, dia))
}

function formatarPeriodo(data: DataAcademica): string {
  if (!data.fim) return formatarData(data.inicio)
  return `${formatarData(data.inicio)} a ${formatarData(data.fim)}`
}

export default function Calendario() {
  const proximaData = encontrarProximaData(datasAcademicas)

  return (
    <div className="mx-auto max-w-5xl space-y-7 animate-page-enter">
      <div>
        <h1 className="text-[30px] font-bold leading-tight text-text-primary lg:text-[32px]">
          Calendário Acadêmico
        </h1>
        <p className="mt-2 text-base text-text-muted">
          Datas-chave do semestre {semestreVigente}, sempre acompanhadas da fonte oficial da SAA.
        </p>
        <AtualizadoEm area="calendario" className="mt-3" />
      </div>

      <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-amber-800">
        <p className="font-semibold">Conteúdo em atualização</p>
        <p className="mt-1">
          As datas abaixo são exemplos para validar a página. Elas devem ser substituídas pelas datas oficiais transcritas da SAA.
        </p>
      </div>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-surface p-5 shadow-sm">
          <p className="text-xs font-bold uppercase text-text-subtle">Semestre</p>
          <p className="mt-2 text-2xl font-bold text-text-primary">{semestreVigente}</p>
        </div>
        <a
          href={calendarioAcademicoFonte.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-xl border border-border bg-surface p-5 shadow-sm transition-all hover:border-text-subtle hover:shadow-md sm:col-span-2"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase text-text-subtle">Fonte oficial</p>
              <p className="mt-2 text-base font-semibold text-text-primary">
                {calendarioAcademicoFonte.texto}
              </p>
            </div>
            <ExternalLink
              size={18}
              className="mt-0.5 shrink-0 text-text-subtle transition-colors group-hover:text-unb-azul"
            />
          </div>
        </a>
      </section>

      <section className="space-y-3">
        <h2 className="text-xs font-bold uppercase text-text-subtle">Datas-chave</h2>
        <div className="space-y-3">
          {datasAcademicas.map((data) => {
            const isProxima = data === proximaData
            return (
              <article
                key={`${data.titulo}-${data.inicio}`}
                className={`rounded-xl border bg-surface p-5 shadow-sm transition-all ${
                  isProxima ? 'border-unb-azul shadow-md' : 'border-border'
                }`}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <Badge texto={badgeLabel[data.tipo]} tipo={data.tipo} />
                      {isProxima && <Badge texto="Próxima data" tipo="ok" />}
                    </div>
                    <h3 className="text-base font-semibold leading-tight text-text-primary">
                      {data.titulo}
                    </h3>
                    {data.descricao && (
                      <p className="mt-2 text-sm leading-relaxed text-text-muted">
                        {data.descricao}
                      </p>
                    )}
                  </div>
                  <div className="flex shrink-0 items-center gap-2 rounded-xl border border-border bg-surface-muted px-3 py-2 text-sm font-semibold text-text-primary">
                    <CalendarDays size={16} className="text-text-subtle" />
                    {formatarPeriodo(data)}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}
