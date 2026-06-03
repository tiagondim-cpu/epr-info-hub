import type { SearchableItem } from './types'
import { faqItems } from './faq'
import { temaCards } from './temas'
import { procedimentos } from './procedimentos'
import { links } from './links'
import { passosCalouro, duvidasCalouro } from './calouro'
import { datasAcademicas, semestreVigente } from './calendario'
import { fluxoCurso } from './fluxo'

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
  ...passosCalouro.map((passo) => ({
    id: `calouro-passo-${passo.numero}`,
    tipo: 'calouro' as const,
    titulo: passo.titulo,
    conteudo: `${passo.descricao} ${passo.link?.texto ?? ''}`,
    rota: '/primeiros-passos',
  })),
  ...duvidasCalouro.map((duvida, i) => ({
    id: `calouro-faq-${i}`,
    tipo: 'calouro' as const,
    titulo: duvida.pergunta,
    conteudo: `${duvida.resposta} ${duvida.tags.join(' ')}`,
    rota: '/primeiros-passos',
  })),
  ...datasAcademicas.map((data, i) => ({
    id: `calendario-${i}`,
    tipo: 'calendario' as const,
    titulo: data.titulo,
    conteudo: `${semestreVigente} ${data.inicio} ${data.fim ?? ''} ${data.descricao ?? ''}`,
    rota: '/calendario',
  })),
  ...fluxoCurso.flatMap((semestre) =>
    semestre.disciplinas.map((disciplina) => ({
      id: `fluxo-${semestre.numero}-${disciplina.codigo}`,
      tipo: 'fluxo' as const,
      titulo: disciplina.nome,
      conteudo: `${disciplina.codigo} ${disciplina.creditos} créditos ${disciplina.tipo} ${semestre.numero}º semestre`,
      rota: '/fluxo',
    }))
  ),
]
