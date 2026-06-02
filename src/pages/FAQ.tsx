import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, MessageCircleQuestion } from 'lucide-react'
import { cn } from '../lib/utils'
import Accordion from '../components/ui/Accordion'
import AtualizadoEm from '../components/ui/AtualizadoEm'
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
    <div className="mx-auto max-w-4xl space-y-7 animate-page-enter">
      <div>
        <h1 className="text-[30px] font-bold leading-tight text-text-primary lg:text-[32px]">
          Perguntas Frequentes
          <span className="ml-2 align-middle text-sm font-medium text-text-subtle">({faqItems.length} perguntas)</span>
        </h1>
        <p className="mt-2 text-base text-text-muted">
          Respostas diretas para as dúvidas mais comuns dos estudantes do EPR/UnB.
        </p>
        <AtualizadoEm area="faq" className="mt-3" />
      </div>

      <div className="space-y-4 rounded-xl border border-border bg-surface p-5 shadow-sm">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-subtle" />
          <input
            type="search"
            placeholder="Buscar nas perguntas..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full rounded-xl border border-border bg-surface-muted py-3 pl-10 pr-4 text-sm text-text-primary placeholder:text-text-subtle transition-all focus:border-accent focus:bg-surface focus:outline-none focus:ring-2 focus:ring-accent/15"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoria(cat)}
              className={cn(
                'rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-all',
                categoria === cat
                  ? 'border-text-primary bg-text-primary text-white shadow-sm'
                  : 'border-border bg-surface text-text-muted hover:border-text-subtle hover:text-text-primary'
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {(busca || categoria !== 'Todas') && (
        <p className="text-sm text-text-muted">
          {filtrados.length} {filtrados.length === 1 ? 'resultado' : 'resultados'}
        </p>
      )}

      <AnimatePresence mode="wait">
        {filtrados.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-xl border border-border bg-surface p-12 text-center"
          >
            <MessageCircleQuestion size={40} className="mx-auto mb-4 text-text-subtle" />
            <p className="text-sm font-semibold text-text-muted">Nenhuma pergunta encontrada.</p>
            <button
              onClick={() => { setBusca(''); setCategoria('Todas') }}
              className="mt-3 text-sm font-semibold text-unb-azul hover:underline"
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
            className="space-y-3"
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

      <div className="flex items-start gap-3 rounded-xl border border-border bg-surface p-5">
        <MessageCircleQuestion size={20} className="mt-0.5 shrink-0 text-unb-azul" />
        <div>
          <p className="text-sm font-semibold text-text-primary">Sua dúvida não está aqui?</p>
          <p className="mt-1 text-sm text-text-muted">
            Secretaria do EPR:{' '}
            <a href="mailto:epr@unb.br" className="font-semibold text-unb-azul hover:underline">epr@unb.br</a>
            {' '}· (61) 3107-5678
          </p>
        </div>
      </div>
    </div>
  )
}
