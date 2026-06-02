import { motion } from 'framer-motion'
import { ExternalLink, Mail, Phone, Clock } from 'lucide-react'
import AtualizadoEm from '../components/ui/AtualizadoEm'
import { links } from '../content/links'

const categoriaLabel: Record<string, string> = {
  secretaria: 'Secretaria e Órgãos',
  sistema: 'Sistemas Acadêmicos',
  formulario: 'Formulários',
  regulamento: 'Regulamentos e Normas',
}

const categorias = ['secretaria', 'sistema', 'formulario', 'regulamento'] as const

export default function Links() {
  return (
    <div className="mx-auto max-w-5xl space-y-7 animate-page-enter">
      <div>
        <h1 className="text-[30px] font-bold leading-tight text-text-primary lg:text-[32px]">Links Úteis</h1>
        <p className="mt-2 text-base text-text-muted">
          Sites, formulários e contatos oficiais, validados e organizados por categoria.
        </p>
        <AtualizadoEm area="links" className="mt-3" />
      </div>

      <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
        <h2 className="mb-4 text-xs font-bold uppercase text-text-subtle">Contato Direto — Secretaria do EPR</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <a
            href="mailto:epr@unb.br"
            className="group flex items-center gap-3 rounded-xl border border-border bg-surface-muted p-4 transition-colors hover:bg-surface"
          >
            <Mail size={17} className="shrink-0 text-text-subtle transition-colors group-hover:text-unb-azul" />
            <div>
              <p className="mb-1 text-xs font-medium leading-none text-text-subtle">E-mail</p>
              <p className="text-sm font-semibold text-text-primary transition-colors group-hover:text-unb-azul">epr@unb.br</p>
            </div>
          </a>
          <div className="flex items-center gap-3 rounded-xl border border-border bg-surface-muted p-4">
            <Phone size={17} className="shrink-0 text-text-subtle" />
            <div>
              <p className="mb-1 text-xs font-medium leading-none text-text-subtle">Telefone</p>
              <p className="text-sm font-semibold text-text-primary">(61) 3107-5678</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-border bg-surface-muted p-4">
            <Clock size={17} className="shrink-0 text-text-subtle" />
            <div>
              <p className="mb-1 text-xs font-medium leading-none text-text-subtle">Horário</p>
              <p className="text-sm font-semibold text-text-primary">Seg–Sex, 7h–23h</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-7">
        {categorias.map((cat, catIdx) => {
          const itens = links.filter((l) => l.categoria === cat)
          if (itens.length === 0) return null
          return (
            <section key={cat}>
              <h2 className="mb-3 text-xs font-bold uppercase text-text-subtle">
                {categoriaLabel[cat]}
              </h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
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
                    className="group flex items-start justify-between gap-3 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-text-subtle hover:shadow-sm"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-base font-semibold text-text-primary transition-colors group-hover:text-unb-azul">
                        {link.nome}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-text-muted">{link.descricao}</p>
                    </div>
                    <ExternalLink
                      size={15}
                      className="mt-1 shrink-0 text-text-subtle opacity-0 transition-all group-hover:text-unb-azul group-hover:opacity-100"
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
