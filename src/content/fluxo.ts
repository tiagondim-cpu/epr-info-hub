import type { SemestreFluxo } from './types'

export const fontesFluxoCurso = [
  {
    texto: 'Currículo oficial no SIGAA',
    url: 'https://sigaa.unb.br/sigaa/public/curso/curriculo.jsf?id=414326',
  },
  {
    texto: 'Fluxo no MatrículaWeb',
    url: 'https://www.matriculaweb.unb.br/graduacao/fluxo.aspx?cod=6017',
  },
] as const

export const fluxoTotaisReferencia = {
  semestres: 12,
  creditos: 240,
  creditosObrigatorios: 165,
} as const

// TODO: transcrever de https://sigaa.unb.br/sigaa/public/curso/curriculo.jsf?id=414326
// TODO: conferir também em https://www.matriculaweb.unb.br/graduacao/fluxo.aspx?cod=6017
export const fluxoCurso: SemestreFluxo[] = [
  {
    numero: 1,
    disciplinas: [
      // EXEMPLO — substituir pelos dados oficiais
      {
        codigo: 'EPR0000',
        nome: 'EXEMPLO — Disciplina obrigatória',
        creditos: 4,
        tipo: 'obrigatoria',
      },
      // EXEMPLO — substituir pelos dados oficiais
      {
        codigo: 'OPT0000',
        nome: 'EXEMPLO — Optativa ou módulo livre',
        creditos: 4,
        tipo: 'optativa',
      },
    ],
  },
  { numero: 2, disciplinas: [] },
  { numero: 3, disciplinas: [] },
  { numero: 4, disciplinas: [] },
  { numero: 5, disciplinas: [] },
  { numero: 6, disciplinas: [] },
  { numero: 7, disciplinas: [] },
  { numero: 8, disciplinas: [] },
  { numero: 9, disciplinas: [] },
  { numero: 10, disciplinas: [] },
  { numero: 11, disciplinas: [] },
  { numero: 12, disciplinas: [] },
]
