import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
    <div className="max-w-3xl mx-auto space-y-6 animate-page-enter">
      {/* Cabeçalho */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Perguntas Frequentes
          <span className="text-sm font-normal text-slate-400 ml-2">({faqItems.length} perguntas)</span>
        </h1>
        <p className="text-slate-500 mt-1 text-sm">
          Respostas diretas para as dúvidas mais comuns dos estudantes do EPR/UnB.
        </p>
      </div>

      {/* Busca + filtros */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-3">
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            placeholder="Buscar nas perguntas..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full pl-8 pr-4 py-2 rounded-lg border border-slate-200 focus:border-unb-azul focus:outline-none focus:ring-2 focus:ring-unb-azul/10 text-sm transition-all bg-slate-50 focus:bg-white"
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoria(cat)}
              className={cn(
                'px-2.5 py-1 rounded-full text-xs font-medium transition-all',
                categoria === cat
                  ? 'bg-unb-azul text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Contador */}
      {(busca || categoria !== 'Todas') && (
        <p className="text-xs text-slate-400">
          {filtrados.length} {filtrados.length === 1 ? 'resultado' : 'resultados'}
        </p>
      )}

      {/* Lista com animação */}
      <AnimatePresence mode="wait">
        {filtrados.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="bg-white rounded-xl border border-slate-200 p-12 text-center"
          >
            <MessageCircleQuestion size={36} className="text-slate-200 mx-auto mb-3" />
            <p className="text-sm font-medium text-slate-500">Nenhuma pergunta encontrada.</p>
            <button
              onClick={() => { setBusca(''); setCategoria('Todas') }}
              className="mt-3 text-xs text-unb-azul hover:underline"
            >
              Limpar filtros
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="space-y-2"
          >
            {filtrados.map((faqItem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.2 }}
              >
                <Accordion item={faqItem} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contato */}
      <div className="rounded-xl bg-unb-azul-pale border border-blue-100 p-4 flex items-start gap-3">
        <MessageCircleQuestion size={18} className="text-unb-azul shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-semibold text-slate-800">Sua dúvida não está aqui?</p>
          <p className="text-xs text-slate-600 mt-0.5">
            Secretaria do EPR:{' '}
            <a href="mailto:epr@unb.br" className="text-unb-azul font-medium hover:underline">epr@unb.br</a>
            {' '}· (61) 3107-5678
          </p>
        </div>
      </div>
    </div>
  )
}
