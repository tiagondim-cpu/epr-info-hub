import { useState } from 'react'
import { ExternalLink, CheckCircle2 } from 'lucide-react'
import { cn } from '../lib/utils'
import Badge from '../components/ui/Badge'
import { jornadaFases } from '../content/jornada'

export default function Jornada() {
  const [faseAtiva, setFaseAtiva] = useState(jornadaFases[0].id)
  const fase = jornadaFases.find((f) => f.id === faseAtiva) ?? jornadaFases[0]

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Cabeçalho */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Minha Jornada Acadêmica</h1>
        <p className="text-slate-500 mt-1 text-sm">
          Informações organizadas por fase do curso — do primeiro semestre à formatura.
        </p>
      </div>

      {/* Tabs de fase */}
      <div className="bg-white rounded-xl border border-slate-200 p-1 shadow-sm flex flex-wrap gap-1">
        {jornadaFases.map((f, i) => (
          <button
            key={f.id}
            onClick={() => setFaseAtiva(f.id)}
            className={cn(
              'flex-1 min-w-[120px] flex flex-col items-center px-3 py-2.5 rounded-lg text-xs font-medium transition-all',
              faseAtiva === f.id
                ? 'bg-unb-azul text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            )}
          >
            <span className={cn('w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold mb-1',
              faseAtiva === f.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
            )}>
              {i + 1}
            </span>
            <span className="leading-tight text-center">{f.titulo}</span>
            <span className={cn('text-xs mt-0.5', faseAtiva === f.id ? 'text-blue-200' : 'text-slate-400')}>
              {f.semestres}
            </span>
          </button>
        ))}
      </div>

      {/* Conteúdo da fase ativa */}
      <div className="space-y-4">
        {fase.conteudo.map((item, i) => (
          <div key={i} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
            {/* Título + badges */}
            <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
              <h3 className="text-base font-semibold text-slate-900">{item.titulo}</h3>
              {item.badges && item.badges.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {item.badges.map((badge, j) => (
                    <Badge key={j} {...badge} />
                  ))}
                </div>
              )}
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">{item.descricao}</p>

            {item.detalhes && item.detalhes.length > 0 && (
              <ul className="mt-4 space-y-2">
                {item.detalhes.map((detalhe, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 size={15} className="text-unb-verde shrink-0 mt-0.5" />
                    <span>{detalhe}</span>
                  </li>
                ))}
              </ul>
            )}

            {item.links && item.links.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100">
                {item.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-unb-azul bg-unb-azul-pale px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    {link.texto}
                    <ExternalLink size={11} />
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
