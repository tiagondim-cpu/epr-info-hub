import type { TemaCard } from './types'

export const temaCards: TemaCard[] = [
  {
    id: 'estagio',
    titulo: 'Estágio Obrigatório',
    descricao: 'Como se inscrever, prazos, modalidades e o que fazer para validar.',
    badges: [
      { texto: 'Prazo: 25% do semestre', tipo: 'alerta' },
      { texto: '180 horas', tipo: 'info' },
    ],
    rota: '/jornada#final',
    icone: 'briefcase',
  },
  {
    id: 'atividades',
    titulo: 'Atividades Complementares',
    descricao: 'Quais atividades valem, como pontuar e quando enviar para avaliação.',
    badges: [
      { texto: 'Fazer uma vez no curso', tipo: 'alerta' },
      { texto: 'Máx. 14 créditos', tipo: 'info' },
    ],
    rota: '/jornada#meio',
    icone: 'star',
  },
  {
    id: 'trancamento',
    titulo: 'Trancamento de Matrícula',
    descricao: '4 modalidades, prazos e como solicitar pelo SIGAA ou SEI.',
    badges: [
      { texto: 'Sem impacto no IRA', tipo: 'ok' },
    ],
    rota: '/jornada#durante',
    icone: 'lock',
  },
  {
    id: 'prorrogacao',
    titulo: 'Prorrogação de Prazo',
    descricao: 'Como pedir mais semestres antes de ser jubilado.',
    badges: [
      { texto: 'Solicitar 90 dias antes', tipo: 'alerta' },
    ],
    rota: '/jornada#risco',
    icone: 'clock',
  },
  {
    id: 'desligamento',
    titulo: 'Desligamento e Risco',
    descricao: 'Causas, fase probatória e como solicitar reintegração.',
    badges: [
      { texto: 'Atenção máxima', tipo: 'alerta' },
    ],
    rota: '/jornada#risco',
    icone: 'alert',
  },
  {
    id: 'ira',
    titulo: 'IRA — Rendimento Acadêmico',
    descricao: 'O que afeta seu IRA, como consultar e o que fazer se estiver baixo.',
    badges: [
      { texto: 'Consultar no SIGAA', tipo: 'info' },
    ],
    rota: '/jornada#durante',
    icone: 'chart',
  },
]
