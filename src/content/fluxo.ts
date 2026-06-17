import type { SemestreFluxo } from './types'

export const fontesFluxoCurso = [
  {
    texto: 'Estruturas curriculares no SIGAA (todas as matrizes do curso)',
    url: 'https://sigaa.unb.br/sigaa/public/curso/curriculo.jsf?id=414326',
  },
  {
    texto: 'Organização do Curso — Departamento de Engenharia de Produção',
    url: 'http://epr.unb.br/index.php/graduacao/cursos-2',
  },
] as const

// Aviso sobre o novo currículo 617/3 (apresentado pela coordenação do curso em jun/2026).
export const novoCurriculo617 = {
  titulo: 'Novo currículo 617/3 — a partir de 2026.2',
  descricao:
    'A grade abaixo é a matriz atual (currículo 2021), válida para quem já está no curso. ' +
    'Em 2026.2 entra um novo currículo (nº 617/3): 10 semestres (5 anos), com eixo de ciência ' +
    'de dados/IA e disciplinas extensionistas (os PSPs e Introdução à Engenharia de Produção ' +
    'passam a ser extensionistas). Calouros de 2026.2 entram automaticamente no novo currículo; ' +
    'quem já está no curso pode migrar de forma opcional via peticionamento no SEI — avalie com ' +
    'cuidado, pois a migração é só de ida e disciplinas que viraram extensionistas precisam ser ' +
    'refeitas. Em caso de dúvida, procure a coordenação ou a secretaria do EPR.',
} as const

export const fluxoTotaisReferencia = {
  semestres: 12,
  creditos: 240,
  creditosObrigatorios: 165,
} as const

// Fonte: Projeto Político-Pedagógico (PPP) do curso de Engenharia de Produção da UnB
// — seção "5.4 Grade curricular" (currículo para conclusão em 12 períodos). Corresponde
// à matriz atual (currículo 2021), válida para quem já está no curso.
// Créditos calculados a partir da carga horária total (1 crédito = 15 horas).
// Os blocos "Optativas / Módulo livre" representam a carga reservada para optativas e
// módulo livre em cada período. OBS.: um novo currículo (617/3) entra em 2026.2 — ver
// "novoCurriculo617" acima e confira a matriz aplicável a você no SIGAA.
export const fluxoCurso: SemestreFluxo[] = [
  {
    numero: 1,
    disciplinas: [
      { codigo: '118001', nome: 'Física 1', creditos: 4, tipo: 'obrigatoria' },
      { codigo: '118010', nome: 'Física 1 Experimental', creditos: 2, tipo: 'obrigatoria' },
      { codigo: '113034', nome: 'Cálculo 1', creditos: 6, tipo: 'obrigatoria' },
      { codigo: '160130', nome: 'Introdução à Engenharia de Produção', creditos: 2, tipo: 'obrigatoria' },
      { codigo: '199371', nome: 'Introdução ao Desenvolvimento Sustentável', creditos: 4, tipo: 'obrigatoria' },
    ],
  },
  {
    numero: 2,
    disciplinas: [
      { codigo: '118028', nome: 'Física 2', creditos: 4, tipo: 'obrigatoria' },
      { codigo: '118036', nome: 'Física 2 Experimental', creditos: 4, tipo: 'obrigatoria' },
      { codigo: '113042', nome: 'Cálculo 2', creditos: 6, tipo: 'obrigatoria' },
      { codigo: '176664', nome: 'Formação de Valor em Sistemas de Produção', creditos: 2, tipo: 'obrigatoria' },
      { codigo: '176672', nome: 'Ergonomia e Comportamento Humano no Trabalho', creditos: 4, tipo: 'obrigatoria' },
    ],
  },
  {
    numero: 3,
    disciplinas: [
      { codigo: '118044', nome: 'Física 3', creditos: 4, tipo: 'obrigatoria' },
      { codigo: '113913', nome: 'Introdução à Ciência da Computação', creditos: 4, tipo: 'obrigatoria' },
      { codigo: '113051', nome: 'Cálculo 3', creditos: 6, tipo: 'obrigatoria' },
      { codigo: '200671', nome: 'Metodologia de Projeto de Sistemas de Produção', creditos: 2, tipo: 'obrigatoria' },
      { codigo: '—', nome: 'Optativas / Módulo livre', creditos: 4, tipo: 'modulo-livre' },
    ],
  },
  {
    numero: 4,
    disciplinas: [
      { codigo: '114626', nome: 'Química Geral Teórica', creditos: 4, tipo: 'obrigatoria' },
      { codigo: '114634', nome: 'Química Geral Experimental', creditos: 2, tipo: 'obrigatoria' },
      { codigo: '113093', nome: 'Introdução à Álgebra Linear', creditos: 4, tipo: 'obrigatoria' },
      { codigo: '115045', nome: 'Probabilidade e Estatística', creditos: 6, tipo: 'obrigatoria' },
      { codigo: '203386', nome: 'Projeto de Sistemas de Produção 1', creditos: 2, tipo: 'obrigatoria' },
    ],
  },
  {
    numero: 5,
    disciplinas: [
      { codigo: '206831', nome: 'Desenho Mecânico para Engenharia', creditos: 4, tipo: 'obrigatoria' },
      { codigo: '176681', nome: 'Engenharia Econômica', creditos: 4, tipo: 'obrigatoria' },
      { codigo: '205397', nome: 'Sistemas de Informação em Engenharia de Produção', creditos: 4, tipo: 'obrigatoria' },
      { codigo: '205401', nome: 'Projeto de Sistemas de Produção 2', creditos: 2, tipo: 'obrigatoria' },
      { codigo: '132012', nome: 'Introdução à Economia', creditos: 4, tipo: 'obrigatoria' },
      { codigo: '—', nome: 'Optativas / Módulo livre', creditos: 4, tipo: 'modulo-livre' },
    ],
  },
  {
    numero: 6,
    disciplinas: [
      { codigo: '168823', nome: 'Introdução à Ciência dos Materiais', creditos: 3, tipo: 'obrigatoria' },
      { codigo: '166014', nome: 'Mecânica dos Sólidos 1', creditos: 4, tipo: 'obrigatoria' },
      { codigo: '176702', nome: 'Pesquisa Operacional em Engenharia 1', creditos: 6, tipo: 'obrigatoria' },
      { codigo: '185035', nome: 'Introdução à Ciência Política', creditos: 4, tipo: 'obrigatoria' },
      { codigo: '—', nome: 'Optativas / Módulo livre', creditos: 3, tipo: 'modulo-livre' },
    ],
  },
  {
    numero: 7,
    disciplinas: [
      { codigo: '169714', nome: 'Processos de Fabricação', creditos: 4, tipo: 'obrigatoria' },
      { codigo: '100145', nome: 'Simulação de Sistemas', creditos: 4, tipo: 'obrigatoria' },
      { codigo: '100137', nome: 'Planejamento e Controle da Produção', creditos: 4, tipo: 'obrigatoria' },
      { codigo: '100129', nome: 'Projeto de Sistemas de Produção 4', creditos: 2, tipo: 'obrigatoria' },
      { codigo: '168921', nome: 'Segurança e Saúde no Trabalho', creditos: 4, tipo: 'obrigatoria' },
      { codigo: '—', nome: 'Optativas / Módulo livre', creditos: 6, tipo: 'modulo-livre' },
    ],
  },
  {
    numero: 8,
    disciplinas: [
      { codigo: '168840', nome: 'Transporte de Calor e Massa', creditos: 4, tipo: 'obrigatoria' },
      { codigo: '102636', nome: 'Gestão da Qualidade na Produção', creditos: 4, tipo: 'obrigatoria' },
      { codigo: '101389', nome: 'Projeto de Sistemas de Produção 5', creditos: 2, tipo: 'obrigatoria' },
      { codigo: '—', nome: 'Optativas / Módulo livre', creditos: 14, tipo: 'modulo-livre' },
    ],
  },
  {
    numero: 9,
    disciplinas: [
      { codigo: '101591', nome: 'Logística', creditos: 4, tipo: 'obrigatoria' },
      { codigo: '101605', nome: 'Engenharia do Produto', creditos: 4, tipo: 'obrigatoria' },
      { codigo: '101397', nome: 'Projeto de Sistemas de Produção 6', creditos: 2, tipo: 'obrigatoria' },
      { codigo: '—', nome: 'Optativas / Módulo livre', creditos: 14, tipo: 'modulo-livre' },
    ],
  },
  {
    numero: 10,
    disciplinas: [
      { codigo: '176699', nome: 'Gestão Estratégica', creditos: 4, tipo: 'obrigatoria' },
      { codigo: '101401', nome: 'Projeto de Sistemas de Produção 7', creditos: 2, tipo: 'obrigatoria' },
      { codigo: '—', nome: 'Optativas / Módulo livre', creditos: 18, tipo: 'modulo-livre' },
    ],
  },
  {
    numero: 11,
    disciplinas: [
      { codigo: '101508', nome: 'Estágio Supervisionado', creditos: 12, tipo: 'obrigatoria' },
      { codigo: '105911', nome: 'Projeto de Graduação em Engenharia de Produção 1', creditos: 2, tipo: 'obrigatoria' },
    ],
  },
  {
    numero: 12,
    disciplinas: [
      { codigo: '105929', nome: 'Projeto de Graduação em Engenharia de Produção 2', creditos: 2, tipo: 'obrigatoria' },
      { codigo: '—', nome: 'Optativas / Módulo livre', creditos: 10, tipo: 'modulo-livre' },
    ],
  },
]
