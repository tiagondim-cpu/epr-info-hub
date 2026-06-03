// Datas da última revisão de conteúdo, por área do app.
//
// COMO ATUALIZAR (revisão semestral — ver docs/ROADMAP.md, Fase 5):
// ao revisar o conteúdo de uma área, troque apenas a string da data abaixo.
// Formato: 'AAAA-MM' (ano-mes). Ex.: '2026-08' para agosto de 2026.

export const conteudoAtualizadoEm = {
  jornada: '2026-05',
  procedimentos: '2026-05',
  faq: '2026-05',
  links: '2026-05',
  calouro: '2026-06',
  calendario: '2026-06',
  fluxo: '2026-06',
} as const

export type ConteudoArea = keyof typeof conteudoAtualizadoEm

const MESES = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
]

// Converte 'AAAA-MM' em 'mes/AAAA' por extenso. Ex.: '2026-05' -> 'maio/2026'.
export function formatarMesAno(valor: string): string {
  const [ano, mes] = valor.split('-')
  const nomeMes = MESES[Number(mes) - 1] ?? mes
  return `${nomeMes}/${ano}`
}
