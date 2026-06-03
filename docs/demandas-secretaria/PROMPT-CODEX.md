# Prompt para o Codex — Implementar Calouro · Calendário · Fluxo

> Copie tudo abaixo da linha e cole no Codex. O prompt é auto-contido, mas o Codex
> tem acesso ao repositório e deve ler os documentos citados antes de começar.

---

Você vai implementar **3 novas seções** no app **EPR Info Hub** (portal acadêmico do
curso de Engenharia de Produção da UnB). Trabalhe com rigor e siga os padrões
existentes do projeto. **Leia primeiro** estes documentos do próprio repositório, que
são a fonte da verdade desta tarefa:

- `docs/demandas-secretaria/01-PLANO-EXECUCAO.md`
- `docs/demandas-secretaria/02-REQUISITOS.md`
- `docs/demandas-secretaria/03-VALIDACAO.md`

## Contexto do projeto (não reinvente nada disto)

- **SPA estática**, sem backend e sem banco. Stack: **React 19 + Vite + TypeScript +
  Tailwind CSS v4 + React Router v7 + Fuse.js + framer-motion + shadcn/Radix +
  lucide-react + PWA (`vite-plugin-pwa`)**. Hospedagem Vercel.
- **Tailwind v4 é CSS-nativo:** os tokens de cor vivem em `@theme {}` dentro de
  `src/index.css` (ex.: `text-text-primary`, `text-text-muted`, `bg-surface`,
  `border-border`, `bg-unb-azul-pale`, `text-unb-azul`). **Não** há `tailwind.config`
  de cor; **não** crie cores novas — use as existentes.
- **Padrão de conteúdo:** dados ficam tipados em `src/content/*.ts` e são consumidos
  por páginas em `src/pages/`. Uma página NÃO contém dados hard-coded de domínio;
  ela importa do arquivo de conteúdo.
- **Componentes a reusar (NÃO recrie):** `src/components/ui/Badge.tsx`,
  `Accordion.tsx`, `StepGuide.tsx`, `src/components/ui/AtualizadoEm.tsx` (selo de
  última atualização), e `cn()` em `src/lib/utils.ts`.
- **Página de referência para copiar o estilo:** `src/pages/Procedimentos.tsx`
  (cabeçalho com `h1` + `p` + `<AtualizadoEm area="..." className="mt-3" />`, wrapper
  `mx-auto max-w-5xl space-y-7 animate-page-enter`, links externos com `target="_blank"
  rel="noopener noreferrer"` e ícone `ExternalLink`). Veja também `FAQ.tsx`,
  `Jornada.tsx`, `Links.tsx`.

## O que implementar

Três seções, cada uma seguindo o padrão "conteúdo tipado + página":

| Seção | Rota | Conteúdo | Página |
|---|---|---|---|
| Primeiros Passos (calouro) | `/primeiros-passos` | `src/content/calouro.ts` | `src/pages/PrimeirosPassos.tsx` |
| Calendário Acadêmico | `/calendario` | `src/content/calendario.ts` | `src/pages/Calendario.tsx` |
| Fluxo do Curso | `/fluxo` | `src/content/fluxo.ts` | `src/pages/Fluxo.tsx` |

### Modelos de dados (adicione em `src/content/types.ts`)

```ts
// Primeiros Passos (calouro)
export interface PassoCalouro {
  numero: number
  titulo: string
  descricao: string
  link?: { texto: string; url: string }
}
// (reutilize FaqItem, que já existe, para as dúvidas frequentes do calouro)

// Calendário
export interface DataAcademica {
  titulo: string
  inicio: string        // ISO 'AAAA-MM-DD'
  fim?: string          // ISO, quando for período
  tipo: BadgeTipo       // já existe neste arquivo
  descricao?: string
}

// Fluxo do curso
export interface Disciplina {
  codigo: string
  nome: string
  creditos: number
  tipo: 'obrigatoria' | 'optativa' | 'modulo-livre'
}
export interface SemestreFluxo {
  numero: number        // 1..12
  disciplinas: Disciplina[]
}
```

### Trabalho arquivo a arquivo

1. **`src/content/types.ts`** — adicione as interfaces acima. **Importante:** estenda a
   união `SearchableItem['tipo']` (hoje `'faq' | 'tema' | 'procedimento' | 'link'`)
   para incluir `'calouro' | 'calendario' | 'fluxo'`.
2. **`src/content/meta.ts`** — adicione `calouro`, `calendario` e `fluxo` ao objeto
   `conteudoAtualizadoEm` (formato `'AAAA-MM'`). O tipo `ConteudoArea` e
   `formatarMesAno` se ajustam sozinhos. Use `'2026-06'` como data inicial.
3. **`src/content/calouro.ts`** — `export const passosCalouro: PassoCalouro[]` e
   `export const duvidasCalouro: FaqItem[]`. Inclua um destaque com link para o
   **Manual oficial da DEG**: `https://deg.unb.br/manual-do-calouro/`.
4. **`src/content/calendario.ts`** — `export const semestreVigente = '2026/1'` e
   `export const datasAcademicas: DataAcademica[]`. Inclua o link à fonte oficial
   (SAA: `https://saa.unb.br/calendario-academico/`).
5. **`src/content/fluxo.ts`** — `export const fluxoCurso: SemestreFluxo[]` (12
   semestres). Inclua o link à fonte (SIGAA:
   `https://sigaa.unb.br/sigaa/public/curso/curriculo.jsf?id=414326` e MatrículaWeb:
   `https://www.matriculaweb.unb.br/graduacao/fluxo.aspx?cod=6017`).
6. **`src/pages/PrimeirosPassos.tsx`** — lista os passos (pode reusar `StepGuide` ou o
   padrão de `ol` numerada de `Procedimentos.tsx`) + accordion de dúvidas (`Accordion`)
   + card de link para o manual da DEG. Cabeçalho com `<AtualizadoEm area="calouro" />`.
7. **`src/pages/Calendario.tsx`** — lista as datas com `Badge` por `tipo`, destacando a
   **próxima data** a partir de `new Date()`. Mostre `semestreVigente`, link à SAA e
   `<AtualizadoEm area="calendario" />`.
8. **`src/pages/Fluxo.tsx`** — grade responsiva por semestre (cards/colunas no desktop,
   empilhado e legível no mobile — **não use imagem do fluxograma**). Diferencie
   obrigatória/optativa/módulo-livre visualmente (use `Badge` ou cor de borda dos
   tokens existentes). Link ao SIGAA e `<AtualizadoEm area="fluxo" />`.
9. **`src/App.tsx`** — adicione as 3 rotas como filhas de `Layout`
   (`{ path: 'primeiros-passos', element: <PrimeirosPassos /> }`, etc.).
10. **`src/components/layout/Sidebar.tsx`** e
    **`src/components/layout/MobileSidebar.tsx`** — adicione os 3 itens ao array
    `navItems`. Ícones lucide sugeridos: `Rocket` (calouro), `CalendarDays`
    (calendário), `Network` (fluxo). Mantenha o mesmo formato dos itens existentes.
11. **`src/content/searchIndex.ts`** — indexe o novo conteúdo (espalhe `passosCalouro`,
    `datasAcademicas` e as disciplinas do `fluxoCurso` em itens `SearchableItem` com os
    `tipo` novos e as rotas corretas), seguindo o padrão dos `.map()` já existentes.
12. **`src/pages/Home.tsx`** — adicione cards de acesso rápido para as 3 novas seções,
    no mesmo estilo dos cards atuais.

## Restrições duras (não negociáveis)

- **NÃO invente dado acadêmico.** Datas do calendário e a grade do fluxo devem ser
  transcritas da fonte oficial por uma pessoa — você ainda não tem esses dados. Crie a
  estrutura e inclua **1 ou 2 entradas de exemplo claramente marcadas** com
  `// EXEMPLO — substituir pelos dados oficiais` e um comentário no topo do arquivo:
  `// TODO: transcrever de <URL da fonte oficial>`. Não preencha datas/disciplinas
  reais "de cabeça".
- Reuse os componentes e tokens existentes; não adicione dependência de runtime nova
  sem justificar.
- Mantenha a SPA estática (sem backend, sem fetch em runtime de fontes externas).
- **Acessibilidade WCAG 2.1 AA:** HTML semântico, foco visível, `aria-label` em ícones
  sem texto. **Responsivo mobile-first.** Todo texto em **português** com acentuação.
- Sempre exiba o **link à fonte oficial** e o **selo `AtualizadoEm`** em cada página.

## Fora de escopo (não faça)

- Nada de CMS, scraping/raspagem, GitHub Action de dados, ou LLM para preencher dados.
- Nada de fluxograma interativo com pré-requisitos (a grade por semestre basta).
- Não preencha os valores reais de datas/disciplinas.

## Critérios de aceite (valide antes de entregar)

- `npm run lint` e `npm run build` passam sem erros.
- As 3 rotas abrem sem 404, no desktop e no mobile, e aparecem na navegação.
- A busca (Fuse.js) retorna resultados das novas seções.
- Cada página mostra o selo de atualização e o link à fonte oficial.
- Layout não quebra em telas pequenas.
- Cards das 3 seções presentes na Home.

## Processo

- Trabalhe em uma **branch** (ex.: `feat/secretaria-calouro-calendario-fluxo`). **Não
  commite em `main`.**
- Rode `npm run lint && npm run build` ao final e corrija o que aparecer.
- No resumo final, liste os arquivos criados/alterados e aponte explicitamente onde
  ficaram os `TODO`/`EXEMPLO` que dependem de dados oficiais a transcrever.
