import { motion } from 'framer-motion'
import { ExternalLink, Mail, Phone, Clock } from 'lucide-react'
import { links } from '../content/links'

const categoriaLabel: Record<string, string> = {
  secretaria:  'Secretaria e Órgãos',
  sistema:     'Sistemas Acadêmicos',
  formulario:  'Formulários',
  regulamento: 'Regulamentos e Normas',
}

const categorias = ['secretaria', 'sistema', 'formulario', 'regulamento'] as const

export default function Links() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-page-enter">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Links Úteis</h1>
        <p className="text-slate-500 mt-1 text-sm">
          Sites, formulários e contatos oficiais — validados e organizados por categoria.
        </p>
      </div>

      {/* Contato em destaque */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
        <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Contato Direto — Secretaria do EPR</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a
            href="mailto:epr@unb.br"
            className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 hover:bg-unb-azul-pale transition-colors group"
          >
            <Mail size={15} className="text-slate-400 group-hover:text-unb-azul shrink-0 transition-colors" />
            <div>
              <p className="text-[10px] text-slate-400 leading-none mb-0.5">E-mail</p>
              <p className="text-sm font-medium text-slate-800 group-hover:text-unb-azul transition-colors">epr@unb.br</p>
            </div>
          </a>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50">
            <Phone size={15} className="text-slate-400 shrink-0" />
            <div>
              <p className="text-[10px] text-slate-400 leading-none mb-0.5">Telefone</p>
              <p className="text-sm font-medium text-slate-800">(61) 3107-5678</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50">
            <Clock size={15} className="text-slate-400 shrink-0" />
            <div>
              <p className="text-[10px] text-slate-400 leading-none mb-0.5">Horário</p>
              <p className="text-sm font-medium text-slate-800">Seg–Sex, 7h–23h</p>
            </div>
          </div>
        </div>
      </div>

      {/* Links por categoria */}
      <div className="space-y-6">
        {categorias.map((cat, catIdx) => {
          const itens = links.filter((l) => l.categoria === cat)
          if (itens.length === 0) return null
          return (
            <section key={cat}>
              <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2.5">
                {categoriaLabel[cat]}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {itens.map((link, i) => (
                  <motion.a
                    key={link.url}
                    href={link.url}
                    target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -4 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (catIdx * 0.05) + (i * 0.04), duration: 0.2 }}
                    whileHover={{ x: 2 }}
                    className="group flex items-start justify-between gap-3 bg-white rounded-xl p-4 border border-slate-200 hover:border-unb-azul hover:shadow-sm transition-colors"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-slate-800 group-hover:text-unb-azul transition-colors truncate">
                        {link.nome}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{link.descricao}</p>
                    </div>
                    <ExternalLink
                      size={13}
                      className="text-slate-200 group-hover:text-unb-azul transition-all shrink-0 mt-0.5 opacity-0 group-hover:opacity-100"
                    />
                  </motion.a>
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
