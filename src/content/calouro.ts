import type { FaqItem, PassoCalouro } from './types'

export const manualCalouroDeg = {
  texto: 'Manual oficial da DEG',
  url: 'https://deg.unb.br/manual-do-calouro/',
} as const

export const passosCalouro: PassoCalouro[] = [
  {
    numero: 1,
    titulo: 'Leia o manual oficial da DEG',
    descricao:
      'Comece pelo guia institucional da UnB para entender matrícula, documentos acadêmicos, direitos e deveres gerais do estudante.',
    link: {
      texto: 'Abrir Manual da DEG',
      url: manualCalouroDeg.url,
    },
  },
  {
    numero: 2,
    titulo: 'Ative seus acessos institucionais',
    descricao:
      'Garanta acesso ao e-mail institucional e ao SIGAA, porque avisos, matrícula, menções e documentos acadêmicos passam por esses canais.',
    link: {
      texto: 'Acessar SIGAA',
      url: 'https://sigaa.unb.br/',
    },
  },
  {
    numero: 3,
    titulo: 'Confira matrícula, horários e salas',
    descricao:
      'Depois da confirmação de matrícula, acompanhe no SIGAA as turmas em que você está inscrito e revise horários antes do início das aulas.',
  },
  {
    numero: 4,
    titulo: 'Salve os canais da secretaria do EPR',
    descricao:
      'Use a secretaria para dúvidas específicas do curso, especialmente quando a orientação geral da UnB não resolver o caso de Produção.',
    link: {
      texto: 'Enviar e-mail para a secretaria',
      url: 'mailto:epr@unb.br',
    },
  },
  {
    numero: 5,
    titulo: 'Acompanhe calendário e boas-vindas',
    descricao:
      'No começo do semestre, priorize datas de matrícula, ajuste, início das aulas e atividades de recepção aos ingressantes.',
    link: {
      texto: 'Guia de boas-vindas da UnB',
      url: 'https://boasvindas.unb.br/guia',
    },
  },
]

export const duvidasCalouro: FaqItem[] = [
  {
    pergunta: 'O EPR Info Hub substitui o Manual do Calouro da DEG?',
    resposta:
      'Não. Esta página organiza os primeiros passos mais úteis para quem entrou em Engenharia de Produção, mas o manual oficial da DEG continua sendo a fonte completa para regras gerais da UnB.',
    tags: ['calouro', 'DEG', 'manual'],
  },
  {
    pergunta: 'Qual canal devo usar para dúvidas específicas do curso?',
    resposta:
      'Para dúvidas específicas de Engenharia de Produção, procure a secretaria do EPR pelo e-mail epr@unb.br. Para regras gerais da graduação, consulte primeiro DEG, SAA e SIGAA.',
    tags: ['secretaria', 'EPR', 'contato'],
  },
  {
    pergunta: 'Preciso resolver tudo antes do primeiro dia de aula?',
    resposta:
      'Priorize os acessos institucionais, a conferência da matrícula e a leitura das orientações oficiais. Pendências específicas devem ser tratadas com a secretaria ou com o órgão responsável indicado pela UnB.',
    tags: ['matrícula', 'SIGAA', 'primeiros passos'],
  },
]
