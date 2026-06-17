import type { DataAcademica } from './types'

export const semestreVigente = '2026/1'

export const calendarioAcademicoFonte = {
  texto: 'Calendário acadêmico oficial da SAA',
  url: 'https://saa.unb.br/calendario-academico/',
} as const

// Fonte: Calendário Universitário de Graduação por Atividades 2026.1 (SAA/UnB),
// publicado em 27/02/2026. Confira sempre a versão vigente em
// https://saa.unb.br/calendario-academico/ antes de decisões acadêmicas.
export const datasAcademicas: DataAcademica[] = [
  {
    titulo: 'Início do semestre letivo',
    inicio: '2026-02-23',
    tipo: 'info',
    descricao: 'Primeiro dia letivo do semestre 2026/1.',
  },
  {
    titulo: 'Período de matrícula',
    inicio: '2026-02-23',
    fim: '2026-02-26',
    tipo: 'info',
    descricao:
      'Solicitação de matrícula no SIGAA (Portal Discente > Ensino > Matrícula on-line), das 06h de 23/02 às 23h59 de 26/02.',
  },
  {
    titulo: 'Trancamento total (geral) de matrícula',
    inicio: '2026-02-23',
    fim: '2026-06-19',
    tipo: 'alerta',
    descricao:
      'Suspensão de todas as atividades acadêmicas por um semestre, pelo SIGAA (Portal do Aluno > Ensino > Trancamento Automático).',
  },
  {
    titulo: 'Resultado da matrícula',
    inicio: '2026-03-02',
    tipo: 'info',
    descricao: 'Divulgação do resultado da matrícula até as 12h de 02/03.',
  },
  {
    titulo: 'Período de rematrícula',
    inicio: '2026-03-03',
    fim: '2026-03-05',
    tipo: 'info',
    descricao:
      'Solicitação de rematrícula no SIGAA, das 06h de 03/03 às 23h59 de 05/03.',
  },
  {
    titulo: 'Matrícula extraordinária e retirada de disciplinas',
    inicio: '2026-03-10',
    fim: '2026-03-13',
    tipo: 'aviso',
    descricao:
      'Matrícula extraordinária e retirada de disciplina(s) no SIGAA, das 10h de 10/03 às 23h59 de 13/03.',
  },
  {
    titulo: 'Trancamento parcial de matrícula',
    inicio: '2026-03-14',
    fim: '2026-05-18',
    tipo: 'alerta',
    descricao:
      'Suspensão de um ou mais componentes curriculares, pelo SIGAA (Portal do Aluno > Ensino > Trancamento de Matrícula).',
  },
  {
    titulo: 'Início das aulas',
    inicio: '2026-03-16',
    tipo: 'info',
    descricao: 'Primeiro dia de aulas do semestre 2026/1.',
  },
  {
    titulo: 'Prazo para atividades complementares',
    inicio: '2026-04-24',
    tipo: 'aviso',
    descricao:
      'Data limite para o estudante solicitar atividades complementares nas Unidades Acadêmicas.',
  },
  {
    titulo: 'Último dia de aulas',
    inicio: '2026-07-18',
    tipo: 'info',
    descricao: 'Encerramento do período de aulas do semestre 2026/1.',
  },
  {
    titulo: 'Consolidação das menções finais',
    inicio: '2026-07-21',
    tipo: 'info',
    descricao: 'Prazo para os docentes registrarem e consolidarem as turmas no SIGAA.',
  },
  {
    titulo: 'Encerramento do semestre letivo',
    inicio: '2026-07-23',
    tipo: 'info',
    descricao: 'Último dia letivo do semestre 2026/1.',
  },
  {
    titulo: 'Processamento dos desligamentos (2026.1)',
    inicio: '2026-07-24',
    tipo: 'alerta',
    descricao:
      'A SAA processa os desligamentos referentes ao semestre 2026.1. Acompanhe sua situação e procure a secretaria em caso de dúvida.',
  },
  {
    titulo: 'Revisão de menção final',
    inicio: '2026-08-24',
    tipo: 'aviso',
    descricao:
      'Prazo final para solicitar revisão de menção nas Unidades Acadêmicas.',
  },
]
