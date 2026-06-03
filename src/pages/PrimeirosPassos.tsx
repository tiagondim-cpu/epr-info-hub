import { motion } from 'framer-motion'
import { ExternalLink, Rocket } from 'lucide-react'
import Accordion from '../components/ui/Accordion'
import AtualizadoEm from '../components/ui/AtualizadoEm'
import { duvidasCalouro, manualCalouroDeg, passosCalouro } from '../content/calouro'

export default function PrimeirosPassos() {
  return (
    <div className="mx-auto max-w-5xl space-y-7 animate-page-enter">
      <div>
        <h1 className="text-[30px] font-bold leading-tight text-text-primary lg:text-[32px]">
          Primeiros Passos
        </h1>
        <p className="mt-2 text-base text-text-muted">
          Orientações iniciais para quem acabou de entrar em Engenharia de Produção na UnB.
        </p>
        <AtualizadoEm area="calouro" className="mt-3" />
      </div>

      <section className="rounded-xl border border-border bg-surface p-6 shadow-sm lg:p-8">
        <div className="mb-7 flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-unb-azul-pale">
            <Rocket size={19} className="text-unb-azul" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-text-primary">Comece por aqui</h2>
            <p className="mt-1 text-sm leading-relaxed text-text-muted">
              Uma sequência curta para destravar os acessos e canais mais importantes do curso.
            </p>
          </div>
        </div>

        <ol className="relative space-y-6">
          {passosCalouro.map((passo, i) => (
            <motion.li
              key={passo.numero}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06, duration: 0.2 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-text-primary text-sm font-bold text-white">
                  {passo.numero}
                </div>
                {i < passosCalouro.length - 1 && (
                  <div className="mt-2 w-px flex-1 bg-divider" />
                )}
              </div>

              <div className="min-w-0 flex-1 pb-2">
                <h3 className="text-base font-semibold leading-tight text-text-primary">
                  {passo.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{passo.descricao}</p>
                {passo.link && (
                  <a
                    href={passo.link.url}
                    target={passo.link.url.startsWith('mailto:') ? undefined : '_blank'}
                    rel={passo.link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-unb-azul-pale px-3 py-1.5 text-sm font-semibold text-unb-azul transition-colors hover:bg-blue-100"
                  >
                    {passo.link.texto}
                    {!passo.link.url.startsWith('mailto:') && <ExternalLink size={13} />}
                  </a>
                )}
              </div>
            </motion.li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="mb-3 text-xs font-bold uppercase text-text-subtle">
          Dúvidas frequentes do calouro
        </h2>
        <div className="space-y-3">
          {duvidasCalouro.map((duvida, i) => (
            <motion.div
              key={duvida.pergunta}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.2 }}
            >
              <Accordion item={duvida} defaultOpen={i === 0} />
            </motion.div>
          ))}
        </div>
      </section>

      <a
        href={manualCalouroDeg.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-start justify-between gap-4 rounded-xl border border-border bg-surface p-5 shadow-sm transition-all hover:border-text-subtle hover:shadow-md"
      >
        <div>
          <p className="text-sm font-semibold text-text-primary">Fonte oficial completa</p>
          <p className="mt-1 text-sm leading-relaxed text-text-muted">
            Consulte o Manual do Calouro da DEG para regras gerais da graduação, serviços da UnB e orientações institucionais.
          </p>
        </div>
        <ExternalLink
          size={18}
          className="mt-0.5 shrink-0 text-text-subtle transition-colors group-hover:text-unb-azul"
        />
      </a>
    </div>
  )
}
