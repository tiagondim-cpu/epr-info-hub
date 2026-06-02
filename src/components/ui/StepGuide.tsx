import type { Procedimento } from '../../content/types'

interface Props {
  procedimento: Procedimento
}

export default function StepGuide({ procedimento }: Props) {
  return (
    <article className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
      <div className="border-b border-divider bg-surface-muted px-6 py-5">
        <h2 className="text-xl font-bold text-text-primary">{procedimento.titulo}</h2>
        <p className="mt-1 text-sm text-text-muted">{procedimento.descricao}</p>
      </div>

      <div className="p-6">
        <ol className="space-y-5">
          {procedimento.passos.map((passo) => (
            <li key={passo.numero} className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-text-primary text-sm font-bold text-white">
                {passo.numero}
              </div>
              <div className="flex-1 pt-0.5">
                <h3 className="font-semibold text-text-primary">{passo.titulo}</h3>
                <p className="mt-1 text-sm leading-relaxed text-text-muted">{passo.descricao}</p>
              </div>
            </li>
          ))}
        </ol>

        {procedimento.observacoes && procedimento.observacoes.length > 0 && (
          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="mb-2 text-sm font-semibold text-amber-800">Observações importantes</p>
            <ul className="space-y-1">
              {procedimento.observacoes.map((obs, i) => (
                <li key={i} className="flex gap-2 text-sm text-amber-800">
                  <span className="shrink-0">•</span>
                  <span>{obs}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {procedimento.links && procedimento.links.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {procedimento.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-unb-azul-pale px-3 py-1.5 text-sm font-medium text-unb-azul transition-colors hover:bg-blue-100"
              >
                {link.texto} →
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
