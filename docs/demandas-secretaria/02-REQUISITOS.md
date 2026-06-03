# Documento de Requisitos — Demandas da Secretaria EPR

> **Iniciativa:** 3 demandas da secretaria do EPR (Calouro · Calendário · Fluxo).
> **Documentos relacionados:** [Plano de Execução](01-PLANO-EXECUCAO.md) · [Validação](03-VALIDACAO.md)
> **Convenção de ID:** `RF-<FEATURE>-<n>` (funcional), `RNF-<n>` (não-funcional),
> `RG-<n>` (governança/manutenção). Cada RF é rastreado em [03-VALIDACAO.md](03-VALIDACAO.md).

---

## 1. Objetivo

Especificar **o que** cada uma das 3 features precisa ter para reduzir o atendimento
repetitivo da secretaria e servir bem ao estudante de Engenharia de Produção da UnB.
Este documento define requisitos; o **como** está em [01-PLANO-EXECUCAO.md](01-PLANO-EXECUCAO.md).

## 2. Atores

| Ator | Necessidade principal |
|---|---|
| **Calouro** (1º/2º semestre) | Entender os primeiros passos sem depender da secretaria |
| **Veterano** | Conferir datas, planejar matrícula, ver pré-requisitos do curso |
| **Secretaria EPR** | Ter um lugar único para onde apontar os alunos; reduzir filas/e-mails repetidos |

## 3. Princípio de conteúdo (transversal)

> **Curar o essencial + linkar a fonte oficial canônica.** Nenhuma feature substitui
> a fonte oficial; cada uma a torna mais acessível e a contextualiza para o EPR.

---

## 4. Feature 1 — Primeiros Passos (Manual do Calouro)

**Decisão:** onboarding EPR-específico curado + link ao Manual oficial da DEG.
**Fonte oficial:** https://deg.unb.br/manual-do-calouro/ · https://boasvindas.unb.br/guia

### Requisitos funcionais
- **RF-CAL-1:** Exibir uma sequência de "primeiros passos" do calouro de Produção
  (ex.: ativar e-mail institucional, acessar SIGAA, entender matrícula, conhecer a
  secretaria EPR, atividades de boas-vindas).
- **RF-CAL-2:** Cada passo deve ter título, descrição objetiva e, quando aplicável,
  link para o sistema/formulário correspondente.
- **RF-CAL-3:** Exibir um bloco "Dúvidas frequentes do calouro" (reuso do padrão FAQ).
- **RF-CAL-4:** Exibir destaque/cartão com **link ao Manual oficial da DEG** rotulado
  claramente como fonte oficial completa.
- **RF-CAL-5:** Não duplicar o conteúdo genérico do manual da DEG — apenas o que é
  específico ou prioritário para o ingressante do EPR.

### Modelo de dados (proposto)
```ts
// src/content/calouro.ts
export interface PassoCalouro {
  numero: number
  titulo: string
  descricao: string
  link?: { texto: string; url: string }
}
// reutiliza FaqItem (já existe em types.ts) para as dúvidas do calouro
```

### Conteúdo a curar vs. linkar
- **Curar no app:** passos práticos do EPR, contatos da secretaria, dúvidas frequentes.
- **Linkar à DEG:** manual completo, regras gerais da UnB, conteúdo institucional amplo.

---

## 5. Feature 2 — Calendário Acadêmico

**Decisão:** datas-chave curadas como dados tipados + link à SAA.
**Fonte oficial:** https://saa.unb.br/calendario-academico/ (Resolução CEPE 140/2025).

### Requisitos funcionais
- **RF-CALEND-1:** Listar as **datas-chave** que importam ao aluno (início/fim do
  período letivo, matrícula, ajuste, trancamento, recesso, datas-limite relevantes).
- **RF-CALEND-2:** Cada data deve indicar visualmente sua natureza/urgência via badge
  (reuso de `BadgeTipo`: `alerta` / `aviso` / `info` / `ok`).
- **RF-CALEND-3:** Destacar a **próxima data** relevante a partir da data atual.
- **RF-CALEND-4:** Indicar o semestre de referência (ex.: "2026/1").
- **RF-CALEND-5:** Exibir **link ao calendário oficial da SAA** como fonte da verdade.
- **RF-CALEND-6:** Exibir o selo "última atualização" (a volatilidade é alta).

### Modelo de dados (proposto)
```ts
// src/content/calendario.ts
export interface DataAcademica {
  titulo: string
  inicio: string        // ISO 'AAAA-MM-DD'
  fim?: string          // ISO, quando for período
  tipo: BadgeTipo       // já existe em types.ts
  descricao?: string
}
export const semestreVigente = '2026/1'
```

### Conteúdo a curar vs. linkar
- **Curar no app:** ~10–15 datas-chave do semestre vigente.
- **Linkar à SAA:** calendário completo e oficial (e o PDF).
- **Não fazer:** espelhar todas as datas (risco de manutenção — ver § Fora de escopo).

---

## 6. Feature 3 — Fluxo do Curso (matéria por semestre)

**Decisão:** grade nativa por semestre (dados tipados) + link ao SIGAA.
**Fonte oficial:** https://sigaa.unb.br/sigaa/public/curso/curriculo.jsf?id=414326 ·
https://www.matriculaweb.unb.br/graduacao/fluxo.aspx?cod=6017
**Dados de referência:** curso noturno, 12 semestres, 240 créditos (165 obrigatórios).

### Requisitos funcionais
- **RF-FLX-1:** Exibir as disciplinas organizadas **por semestre** (1º ao 12º).
- **RF-FLX-2:** Cada disciplina deve mostrar código, nome e créditos.
- **RF-FLX-3:** Diferenciar visualmente disciplinas obrigatórias de optativas/módulo livre.
- **RF-FLX-4:** Layout responsivo (grade em desktop, empilhado/legível em mobile) —
  **não** usar imagem do fluxograma oficial.
- **RF-FLX-5:** Exibir **link ao fluxo oficial no SIGAA/MatrículaWeb** como fonte.
- **RF-FLX-6:** Exibir totais de referência (créditos/semestres) quando útil.

### Modelo de dados (proposto)
```ts
// src/content/fluxo.ts
export interface Disciplina {
  codigo: string
  nome: string
  creditos: number
  tipo: 'obrigatoria' | 'optativa' | 'modulo-livre'
}
export interface SemestreFluxo {
  numero: number          // 1..12
  disciplinas: Disciplina[]
}
```

### Conteúdo a curar vs. linkar
- **Curar no app:** a grade obrigatória transcrita da fonte oficial.
- **Linkar ao SIGAA:** ementas, pré-requisitos detalhados e currículo completo.
- **Não fazer:** grafo interativo de pré-requisitos (ver § Fora de escopo).

---

## 7. Requisitos não-funcionais (transversais)

- **RNF-1 (Acessibilidade):** WCAG 2.1 AA — HTML semântico, contraste mínimo,
  foco visível, `aria-label` em ícones sem texto, `lang="pt-BR"`.
- **RNF-2 (Responsivo):** mobile-first; nenhuma feature pode quebrar em telas pequenas.
- **RNF-3 (Idioma):** todo o conteúdo em português correto, com acentuação.
- **RNF-4 (Design system):** usar exclusivamente os tokens UnB (`@theme` em `index.css`)
  e os componentes existentes (`Badge`, `Accordion`, `StepGuide`).
- **RNF-5 (Performance):** sem dependências novas de runtime desnecessárias; conteúdo
  é estático e tipado, carregado com o bundle.
- **RNF-6 (PWA/offline):** as novas páginas devem funcionar offline (já coberto pelo
  `vite-plugin-pwa` via precache — exige apenas que sejam rotas estáticas).
- **RNF-7 (Busca):** todo conteúdo novo deve ser indexado no Fuse.js (`searchIndex.ts`).

## 8. Requisitos de governança e manutenção

- **RG-1:** Cada feature tem **fonte oficial canônica** documentada e linkada na UI.
- **RG-2:** Cada feature tem data de atualização em `src/content/meta.ts` e exibe o
  selo `AtualizadoEm`.
- **RG-3:** A frequência de revisão segue a volatilidade:
  | Feature | Revisar |
  |---|---|
  | Calendário | **Todo início de semestre** (item obrigatório da Fase 5) |
  | Fluxo | A cada reforma de PPC (verificar 1×/ano) |
  | Calouro | 1×/ano (início do ano letivo) |
- **RG-4:** Conteúdo editável por não-programador via arquivos `.ts` no GitHub
  (mesmo padrão dos demais conteúdos — ver `README.md`).

## 9. Fora de escopo (YAGNI)

| Item descartado | Porquê |
|---|---|
| Fluxograma interativo com pré-requisitos navegáveis | Alto esforço/manutenção; a grade por semestre + link ao SIGAA já resolve a dor |
| Espelhar o manual da DEG completo | Duplica conteúdo oficial; risco de desatualizar |
| Espelhar todas as datas do calendário | Manutenção inviável a cada semestre |
| Calendário interativo (ICS/export) | Não foi pedido; reavaliar depois se houver demanda |

## 10. Dependências de dados externos

> **Não inventar conteúdo acadêmico.** Onde o dado oficial ainda não foi coletado, a
> tarefa de conteúdo fica bloqueada até a transcrição por uma pessoa.

| Dado | Fonte | Responsável (placeholder) |
|---|---|---|
| Datas-chave de 2026/1 (e 2026/2) | SAA | a definir |
| Grade obrigatória do EPR por semestre | SIGAA `id=414326` / MatrículaWeb `cod=6017` | a definir |
| Passos/dúvidas do calouro EPR | DEG + experiência da secretaria/equipe | João |
