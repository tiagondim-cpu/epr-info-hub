import type { SearchableItem } from './types'
import { faqItems } from './faq'
import { temaCards } from './temas'
import { procedimentos } from './procedimentos'
import { links } from './links'

export const searchIndex: SearchableItem[] = [
  ...faqItems.map((item, i) => ({
    id: `faq-${i}`,
    tipo: 'faq' as const,
    titulo: item.pergunta,
    conteudo: item.resposta + ' ' + item.tags.join(' '),
    rota: '/faq',
  })),
  ...temaCards.map((tema) => ({
    id: `tema-${tema.id}`,
    tipo: 'tema' as const,
    titulo: tema.titulo,
    conteudo: tema.descricao + ' ' + tema.badges.map((b) => b.texto).join(' '),
    rota: tema.rota,
  })),
  ...procedimentos.map((proc) => ({
    id: `proc-${proc.id}`,
    tipo: 'procedimento' as const,
    titulo: proc.titulo,
    conteudo:
      proc.descricao +
      ' ' +
      proc.passos.map((p) => p.titulo + ' ' + p.descricao).join(' '),
    rota: '/procedimentos',
  })),
  ...links.map((link) => ({
    id: `link-${link.nome}`,
    tipo: 'link' as const,
    titulo: link.nome,
    conteudo: link.descricao,
    rota: '/links',
  })),
]
