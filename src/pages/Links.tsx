import { links } from '../content/links'

const categoriaLabel: Record<string, string> = {
  secretaria:  'Secretaria / Orgaos',
  sistema:     'Sistemas',
  formulario:  'Formularios',
  regulamento: 'Regulamentos',
}

const categoriaIcon: Record<string, string> = {
  secretaria:  '🏛️',
  sistema:     '💻',
  formulario:  '📝',
  regulamento: '📋',
}

const categorias = ['secretaria', 'sistema', 'formulario', 'regulamento'] as const

export default function Links() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-unb-texto">Links Uteis</h1>
        <p className="text-gray-500 mt-2">
          Sites, formularios e contatos oficiais — todos validados e organizados por categoria.
        </p>
      </div>

      <div className="space-y-8">
        {categorias.map((cat) => {
          const itens = links.filter((l) => l.categoria === cat)
          if (itens.length === 0) return null
          return (
            <section key={cat}>
              <h2 className="flex items-center gap-2 text-lg font-bold text-unb-azul mb-3">
                <span>{categoriaIcon[cat]}</span>
                {categoriaLabel[cat]}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {itens.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="bg-white rounded-xl p-4 border border-gray-100 hover:border-unb-azul hover:shadow-sm transition-all group"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-medium text-unb-texto group-hover:text-unb-azul text-sm transition-colors">
                        {link.nome}
                      </span>
                      <span className="text-unb-azul opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0">
                        →
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs mt-1 leading-relaxed">{link.descricao}</p>
                  </a>
                ))}
              </div>
            </section>
          )
        })}
      </div>

      <div className="mt-10 bg-unb-azul-pale rounded-2xl p-6">
        <h2 className="font-bold text-unb-texto mb-3">Contato Direto — Secretaria do EPR</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-gray-500 text-xs mb-1">E-mail</p>
            <a href="mailto:epr@unb.br" className="font-medium text-unb-azul hover:underline">
              epr@unb.br
            </a>
          </div>
          <div>
            <p className="text-gray-500 text-xs mb-1">Telefone</p>
            <p className="font-medium text-unb-texto">(61) 3107-5678</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs mb-1">Horario</p>
            <p className="font-medium text-unb-texto">Seg. a Sex. 7h–23h</p>
          </div>
        </div>
      </div>
    </div>
  )
}
