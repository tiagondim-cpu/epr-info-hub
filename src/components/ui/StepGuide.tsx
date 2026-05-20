import type { Procedimento } from '../../content/types'

interface Props {
  procedimento: Procedimento
}

export default function StepGuide({ procedimento }: Props) {
  return (
    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-unb-azul px-6 py-5">
        <h2 className="text-xl font-bold text-white">{procedimento.titulo}</h2>
        <p className="text-blue-200 text-sm mt-1">{procedimento.descricao}</p>
      </div>

      <div className="p-6">
        <ol className="space-y-4">
          {procedimento.passos.map((passo) => (
            <li key={passo.numero} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-unb-azul text-white text-sm font-bold flex items-center justify-center">
                {passo.numero}
              </div>
              <div className="flex-1 pt-0.5">
                <h3 className="font-semibold text-unb-texto">{passo.titulo}</h3>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">{passo.descricao}</p>
              </div>
            </li>
          ))}
        </ol>

        {procedimento.observacoes && procedimento.observacoes.length > 0 && (
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-sm font-semibold text-amber-800 mb-2">Observacoes importantes</p>
            <ul className="space-y-1">
              {procedimento.observacoes.map((obs, i) => (
                <li key={i} className="text-sm text-amber-700 flex gap-2">
                  <span className="flex-shrink-0">•</span>
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
                className="inline-flex items-center gap-1.5 text-sm font-medium text-unb-azul bg-unb-azul-pale px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors"
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
