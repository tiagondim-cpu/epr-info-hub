import type { DataAcademica } from './types'

export const semestreVigente = '2026/1'

export const calendarioAcademicoFonte = {
  texto: 'Calendário acadêmico oficial da SAA',
  url: 'https://saa.unb.br/calendario-academico/',
} as const

// TODO: transcrever de https://saa.unb.br/calendario-academico/
export const datasAcademicas: DataAcademica[] = [
  // EXEMPLO — substituir pelos dados oficiais
  {
    titulo: 'EXEMPLO — Início do período letivo',
    inicio: '2026-06-10',
    tipo: 'info',
    descricao:
      'Entrada de exemplo para validar layout e busca. Substituir pela data oficial publicada pela SAA.',
  },
  // EXEMPLO — substituir pelos dados oficiais
  {
    titulo: 'EXEMPLO — Período de ajuste de matrícula',
    inicio: '2026-06-15',
    fim: '2026-06-19',
    tipo: 'alerta',
    descricao:
      'Entrada de exemplo para validar períodos. Substituir pelo prazo oficial do calendário acadêmico.',
  },
]
