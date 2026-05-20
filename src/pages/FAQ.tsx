import { useState } from 'react'
import { Search, MessageCircleQuestion } from 'lucide-react'
import { cn } from '../lib/utils'
import Accordion from '../components/ui/Accordion'
import { faqItems } from '../content/faq'

const categorias = ['Todas', 'Estágio', 'Trancamento', 'IRA', 'Atividades', 'Desligamento', 'Prazos']

export default function FAQ() {
  const [categoria, setCategoria] = useState('Todas')
  const [busca, setBusca] = useState('')

  const filtrados = faqItems.filter((item) => {
    const matchBusca =
      busca === '' ||
      item.pergunta.toLowerCase().includes(busca.toLowerCase()) ||
      item.resposta.toLowerCase().includes(busca.toLowerCase())
    const matchCat =
      categoria === 'Todas' ||
      item.tags.some((t) => t.toLowerCase().includes(categoria.toLowerCase()))
    return matchBusca && matchCat
  })

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Cabeçalho */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Perguntas Frequentes</h1>
        <p className="text-slate-500 mt-1 text-sm">
          Respostas diretas para as dúvidas mais comuns dos estudantes do EPR/UnB.
        </p>
      </div>

      {/* Busca + filtros */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-3">
        <div className="relative">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            placeholder="Buscar nas perguntas..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-200 focus:border-unb-azul focus:outline-none text-sm transition-colors bg-slate-50 focus:bg-white"
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoria(cat)}
              className={cn(
                'px-3 py-1 rounded-full text-xs font-medium transition-colors',
                categoria === cat
                  ? 'bg-unb-azul text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Contador de resultados */}
      {(busca || categoria !== 'Todas') && (
        <p className="text-xs text-slate-500">
          {filtrados.length} {filtrados.length === 1 ? 'resultado' : 'resultados'} encontrados
        </p>
      )}

      {/* Lista */}
      {filtrados.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200 p-10 text-center">
          <MessageCircleQuestion size={32} className="text-slate-300 mx-auto mb-3" />
          <p className="text-sm text-slate-500">Nenhuma pergunta encontrada.</p>
          <button
            onClick={() => { setBusca(''); setCategoria('Todas') }}
            className="mt-3 text-xs text-unb-azul hover:underline"
          >
            Limpar filtros
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          {filtrados.map((item, i) => (
            <Accordion key={i} item={item} />
          ))}
        </div>
      )}

      {/* Contato */}
      <div className="rounded-xl bg-unb-azul-pale border border-blue-100 p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <MessageCircleQuestion size={20} className="text-unb-azul shrink-0" />
        <div>
          <p className="text-sm font-semibold text-slate-800">Sua dúvida não está aqui?</p>
          <p className="text-xs text-slate-600 mt-0.5">
            Secretaria do EPR:{' '}
            <a href="mailto:epr@unb.br" className="text-unb-azul font-medium hover:underline">epr@unb.br</a>
            {' '}· (61) 3107-5678 · Seg–Sex 7h–23h
          </p>
        </div>
      </div>
    </div>
  )
}
