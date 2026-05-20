import { useState } from 'react'
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
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-unb-texto">Perguntas Frequentes</h1>
        <p className="text-gray-500 mt-2">
          Respostas diretas para as dúvidas mais comuns dos estudantes do EPR/UnB.
        </p>
      </div>

      <div className="mb-6 space-y-3">
        <input
          type="search"
          placeholder="Buscar nas perguntas..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-unb-azul focus:outline-none transition-colors text-sm"
        />
        <div className="flex flex-wrap gap-2">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoria(cat)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                categoria === cat
                  ? 'bg-unb-azul text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-unb-azul hover:text-unb-azul'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtrados.length === 0 ? (
        <div className="text-center py-12 text-gray-400">
          <p className="text-4xl mb-3">🔍</p>
          <p>Nenhuma pergunta encontrada para esta busca.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtrados.map((item, i) => (
            <Accordion key={i} item={item} />
          ))}
        </div>
      )}

      <div className="mt-10 bg-unb-azul-pale rounded-2xl p-6 text-center">
        <p className="text-unb-texto font-medium">Sua dúvida não está aqui?</p>
        <p className="text-gray-600 text-sm mt-1">
          Entre em contato com a secretaria do EPR:{' '}
          <a href="mailto:epr@unb.br" className="text-unb-azul font-medium hover:underline">
            epr@unb.br
          </a>
          {' '}| (61) 3107-5678
        </p>
      </div>
    </div>
  )
}
