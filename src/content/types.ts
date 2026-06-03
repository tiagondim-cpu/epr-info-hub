export type BadgeTipo = 'alerta' | 'aviso' | 'info' | 'ok'

export interface Badge {
  texto: string
  tipo: BadgeTipo
}

export interface FaqItem {
  pergunta: string
  resposta: string
  tags: string[]
}

export interface Passo {
  numero: number
  titulo: string
  descricao: string
}

export interface PassoCalouro {
  numero: number
  titulo: string
  descricao: string
  link?: { texto: string; url: string }
}

export interface Procedimento {
  id: string
  titulo: string
  descricao: string
  passos: Passo[]
  observacoes?: string[]
  links?: { texto: string; url: string }[]
}

export interface LinkItem {
  nome: string
  url: string
  descricao: string
  categoria: 'secretaria' | 'sistema' | 'formulario' | 'regulamento'
}

export interface DataAcademica {
  titulo: string
  inicio: string
  fim?: string
  tipo: BadgeTipo
  descricao?: string
}

export interface Disciplina {
  codigo: string
  nome: string
  creditos: number
  tipo: 'obrigatoria' | 'optativa' | 'modulo-livre'
}

export interface SemestreFluxo {
  numero: number
  disciplinas: Disciplina[]
}

export interface TemaCard {
  id: string
  titulo: string
  descricao: string
  badges: Badge[]
  rota: string
  icone: string
}

export interface JornadaFase {
  id: string
  titulo: string
  subtitulo: string
  semestres: string
  temas: string[]
  conteudo: JornadaItem[]
}

export interface JornadaItem {
  titulo: string
  descricao: string
  badges?: Badge[]
  detalhes?: string[]
  links?: { texto: string; url: string }[]
}

export interface SearchableItem {
  id: string
  tipo: 'faq' | 'tema' | 'procedimento' | 'link' | 'calouro' | 'calendario' | 'fluxo'
  titulo: string
  conteudo: string
  rota: string
}
