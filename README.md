# EPR Info Hub

Central de informações acadêmicas do curso de **Engenharia de Produção (EPR) da UnB**.
Reúne, num só lugar e em linguagem direta, os procedimentos que mais geram dúvida:
estágio obrigatório, trancamento, IRA, atividades complementares, prorrogação de
prazo, desligamento e os canais oficiais de contato.

> Projeto desenvolvido na disciplina **PSP4 — Projetos de Sistemas de Produção 4**
> (UnB / EPR), sob orientação do **Prof. Dr. Marcelo Carneiro Gonçalves**.

🔗 **Produção:** <https://epr-info-hub.vercel.app/>

---

## O que é

Uma **Single Page Application (SPA) estática** — sem backend, sem banco de dados,
custo de hospedagem zero. Todo o conteúdo vive em arquivos TypeScript tipados em
`src/content/`, o que permite que **qualquer pessoa atualize as informações editando
um arquivo de texto** (ver [Como atualizar o conteúdo](#como-atualizar-o-conteúdo)).

É também uma **PWA**: pode ser instalada no celular e funciona offline após a
primeira visita.

## Stack

| Camada      | Tecnologia                         |
| ----------- | ---------------------------------- |
| Linguagem   | TypeScript 6                       |
| UI          | React 19                           |
| Build       | Vite 8 + vite-plugin-pwa           |
| Estilo      | Tailwind CSS 4 (tokens UnB)        |
| Componentes | shadcn/ui + Radix UI               |
| Ícones      | lucide-react                       |
| Rotas       | React Router 7                     |
| Busca       | Fuse.js (fuzzy, client-side)       |
| Animação    | framer-motion                      |
| Hospedagem  | Vercel                             |
| CI/CD       | GitHub Actions + Vercel            |

Detalhes e justificativas em [`docs/TECH_STACK.md`](docs/TECH_STACK.md).

## Como rodar localmente

Pré-requisito: **Node.js 24+** e npm.

```bash
# 1. Instalar dependências
npm install

# 2. Subir o servidor de desenvolvimento (http://localhost:5173)
npm run dev

# 3. Gerar o build de produção
npm run build

# 4. Pré-visualizar o build localmente
npm run preview

# Lint
npm run lint
```

## Como atualizar o conteúdo

**Não é preciso saber programar.** Todo o conteúdo está em `src/content/`, em
arquivos `.ts` legíveis. Edite o arquivo correspondente — pelo editor local ou
**direto pelo GitHub no navegador** (botão ✏️ "Edit" no arquivo) — e salve. O
Vercel publica a mudança automaticamente em ~1 minuto.

| Arquivo                       | O que contém                                  |
| ----------------------------- | --------------------------------------------- |
| `src/content/jornada.ts`      | Jornada do estudante, por fase do curso       |
| `src/content/procedimentos.ts`| Guias passo a passo                           |
| `src/content/faq.ts`          | Perguntas frequentes                          |
| `src/content/links.ts`        | Links e contatos oficiais                     |
| `src/content/temas.ts`        | Cards de acesso rápido da Home                |
| `src/content/calouro.ts`      | Primeiros Passos (calouros) e contatos do EPR |
| `src/content/calendario.ts`   | Datas do calendário acadêmico (SAA)           |
| `src/content/fluxo.ts`        | Grade do curso por semestre                   |
| `src/content/meta.ts`         | **Datas de "última atualização" por área**    |

> 📅 **Exemplo prático — trocar uma data do calendário:** abra
> `src/content/calendario.ts`, localize a entrada (ex.: `Período de matrícula`),
> ajuste `inicio`/`fim` no formato `'AAAA-MM-DD'`, salve e atualize a data de
> `calendario` em `src/content/meta.ts`. Pelo GitHub: botão ✏️ → editar → "Commit
> changes" (abre um commit ou PR automaticamente). O Vercel publica em ~1 minuto.
> A cada semestre, confira o calendário oficial em <https://saa.unb.br/calendario-academico/>.

> ⚠️ Ao revisar uma área, atualize também a data em `src/content/meta.ts` para que
> o selo "Última atualização" exibido na página reflita a revisão.

## Estrutura

```
src/
├── content/      # dados (conteúdo editável) + meta.ts (datas)
├── components/
│   ├── layout/   # Sidebar, MobileSidebar, Layout
│   └── ui/       # Accordion, Badge, SearchBar, StepGuide, AtualizadoEm
├── hooks/        # useSearch (Fuse.js)
├── lib/          # utilitários (cn)
├── pages/        # Home, Jornada, FAQ, Procedimentos, Links,
│                 #   PrimeirosPassos, Calendario, Fluxo
└── index.css     # Tailwind v4 + tokens UnB (@theme)
```

## Deploy e CI/CD

- **Vercel**: cada push em `main` publica em produção; outras branches geram URL de preview.
- **GitHub Actions**:
  - [`ci.yml`](.github/workflows/ci.yml) — roda lint + build a cada push/PR para `main`.
  - [`links.yml`](.github/workflows/links.yml) — valida os links externos toda semana
    e abre uma issue se algum quebrar.

## PWA

O app é instalável (manifest + service worker via `vite-plugin-pwa`, `registerType:
autoUpdate`). Após a primeira visita, o conteúdo fica disponível offline. Para testar:
`npm run build && npm run preview` e instale pelo navegador.

## Documentação

- [`docs/HANDOFF.md`](docs/HANDOFF.md) — guia de manutenção e governança (handoff)
- [`docs/MISSION.md`](docs/MISSION.md) — missão, visão, personas, métricas
- [`docs/TECH_STACK.md`](docs/TECH_STACK.md) — stack e arquitetura
- [`docs/ROADMAP.md`](docs/ROADMAP.md) — fases do projeto
- [`docs/SUS_QUESTIONARIO.md`](docs/SUS_QUESTIONARIO.md) — questionário de usabilidade (SUS)
- [`docs/RELATORIO_USABILIDADE.md`](docs/RELATORIO_USABILIDADE.md) — modelo de relatório

## Equipe

Tiago André Gondim · Rafael Leivas Bisi · João Pedro Carvalho · Juliano Teles Abrahão

---

_Conteúdo de caráter informativo. Em caso de divergência, prevalecem os documentos e
canais oficiais da UnB/EPR._
