# EPR Info Hub — Roadmap do Produto

> Roadmap alinhado ao calendário da disciplina PSP4 (Projetos de Sistemas de Produção 4), UnB/EPR.
> Orientador: Prof. Dr. Marcelo Carneiro Gonçalves.
> Equipe: Tiago Andre Gondim, Rafael Leivas Bisi, João Pedro Carvalho, Juliano Teles Abrahão.

---

## Visão Geral das Fases

```
Fase 0 ─── Fase 1 ─── Fase 2 ─── Fase 3 ─── Fase 4 ─── Fase 5
Constituição  Layout    Conteúdo    UX/Busca   Validação  Governança
(Semana 0)  (Sem 1-2)  (Sem 2-3)  (Sem 3-4)  (Sem 4-5)  (Pós-PSP4)
    ✓           ✓          ✓           ✓          ...        ...
```

---

## Fase 0 — Constituição do Projeto
**Status:** Concluída | **Prazo:** Semana 0 (maio/2026)

### Objetivos
Estabelecer os alicerces do produto: definição de stack, documentação de missão, estrutura inicial do repositório e primeiro deploy funcional.

### Entregáveis
- [x] `docs/MISSION.md` — missão, visão, personas, princípios, métricas
- [x] `docs/TECH_STACK.md` — stack justificada, tokens UnB, estrutura de pastas
- [x] `docs/ROADMAP.md` — este documento
- [x] Repositório Git criado e configurado
- [x] Projeto Vite + React + TypeScript scaffoldado
- [x] Tailwind v4 configurado com tokens UnB via `@theme {}`
- [x] Deploy inicial no Vercel (URL pública funcional)
- [x] Base de conteúdo populada em `src/content/*.ts`

### Critérios de conclusão
- [x] `npm run dev` sobe sem erros
- [x] `npm run build` gera bundle sem erros de tipo TypeScript
- [x] URL pública no Vercel acessível
- [x] Cores institucionais da UnB aplicadas

---

## Fase 1 — MVP Funcional (Layout Base)
**Status:** Concluída | **Prazo:** Semanas 1–2

### Objetivos
Implementar a estrutura visual completa do app — navegação, layout responsivo, páginas vazias — para que qualquer membro da equipe possa popular conteúdo sem bloquear o desenvolvimento.

### Entregáveis
- [x] Sidebar colapsável com logo EPR/UnB + navegação responsiva (desktop + drawer mobile)
- [x] 5 páginas com estrutura base: Home, Jornada, FAQ, Procedimentos, Links
- [x] Sistema de rotas React Router v7 configurado
- [x] Página Home com cards de acesso rápido aos temas críticos
- [x] Componentes base: `Accordion`, `Badge`, `SearchBar`, `StepGuide`
- [x] Layout responsivo validado em mobile e desktop

### Critérios de conclusão
- [x] Todas as 5 rotas navegáveis sem erro 404
- [x] Layout não quebra em nenhum breakpoint
- [x] Cards da Home linkam para as páginas corretas

---

## Fase 2 — Conteúdo Core
**Status:** Concluída | **Prazo:** Semanas 2–3

### Objetivos
Popular o app com os 7 temas críticos, o FAQ completo, os procedimentos passo a passo e os links úteis.

### Entregáveis
- [x] Estágio Obrigatório: requisitos, prazos, formulário, modalidades
- [x] Atividades Complementares: tipos aceitos, pontuação, momento de envio
- [x] Trancamento de Matrícula: 4 modalidades com tabela de prazos e impacto no IRA
- [x] Prorrogação de Prazo de Conclusão: critérios, antecedência, processo CEG
- [x] Desligamento Acadêmico: causas, fase probatória, reintegração (Res. CEG 001/2023)
- [x] IRA: o que é, o que afeta, como consultar no SIGAA
- [x] Canais Oficiais: secretaria EPR, SAA, DEG, DDS, SIGAA, SEI
- [x] FAQ com accordion — 12 perguntas frequentes com respostas diretas
- [x] Procedimentos — passo a passo de: trancamento via SEI, inscrição no estágio, envio de ACs, prorrogação de prazo
- [x] Links Úteis — 13 links oficiais validados organizados por categoria
- [x] Badges de alerta visuais para prazos críticos

### Critérios de conclusão
- [x] 100% dos 7 temas com conteúdo completo
- [x] Nenhum link externo quebrado
- [x] Conteúdo validado contra as fontes oficiais

---

## Fase 3 — UX, Busca e Redesign
**Status:** Concluída | **Prazo:** Semanas 3–4

### Objetivos
Melhorar significativamente a experiência do usuário com busca funcional, redesign SaaS moderno com sidebar, e integração de bibliotecas de componentes de qualidade.

### Entregáveis
- [x] Busca rápida com Fuse.js — busca fuzzy em todos os conteúdos
- [x] Hook `useSearch` — lógica de busca isolada
- [x] Resultados em tempo real com dropdown elegante
- [x] Página Jornada com tabs por fase do curso
- [x] **Redesign SaaS completo:**
  - [x] Sidebar colapsável (240px ↔ 60px) com logo UnB e tooltips
  - [x] Drawer lateral mobile (hamburguer → desliza da esquerda)
  - [x] Design minimalista: fundo branco, cards com bordas suaves, cores UnB como acentos
  - [x] shadcn/ui + Radix UI instalados (Tooltip, Dialog, ScrollArea, Separator)
  - [x] lucide-react para ícones consistentes
  - [x] `components.json` com Aceternity UI registry configurado
  - [x] Magic MCP (21st.dev) adicionado ao ambiente
- [x] Meta tags SEO no `index.html`

### Critérios de conclusão
- [x] Busca retorna resultados relevantes para os temas principais
- [x] Sidebar colapsa/expande com estado persistido no localStorage
- [x] Drawer mobile abre e fecha corretamente
- [x] Logo UnB visível no sidebar
- [x] `npm run build` sem erros TypeScript

---

## Fase 4 — Validação e Entrega
**Status:** Pendente | **Prazo:** Semanas 4–5

### Objetivos
Validar o produto com usuários reais (estudantes do EPR), corrigir problemas identificados e entregar o app em produção com URL pública para apresentação ao Prof. Marcelo.

### Entregáveis
- [ ] Aplicação do **System Usability Scale (SUS)** com ao menos 5 estudantes do EPR
  - Meta: pontuação SUS >= 75 (superior ao SEI: 59,78)
  - [x] Template do questionário incluído no repositório (`docs/SUS_QUESTIONARIO.md`)
- [ ] Relatório de usabilidade com problemas identificados e correções realizadas
  - [x] Modelo de relatório incluído no repositório (`docs/RELATORIO_USABILIDADE.md`)
- [ ] Ajustes de conteúdo e navegação baseados no feedback
- [ ] URL de produção no Vercel estável e verificada
- [x] README.md no repositório com: o que é, como rodar localmente, como atualizar conteúdo
- [ ] Apresentação do produto ao Prof. Marcelo com demonstração ao vivo
- [x] Repositório publicado no GitHub (backup, colaboração, pré-requisito da Fase 5)
- [x] GitHub Actions: CI (lint + build) e validação semanal de links externos
- [x] Selo "Última atualização" por área de conteúdo (`src/content/meta.ts`)
- [x] PWA básica: app instalável e com acesso offline (`vite-plugin-pwa`)

### Critérios de conclusão
- [ ] URL pública acessível e estável
- [ ] SUS >= 75 documentado
- [ ] Todos os links externos funcionando
- [ ] README completo para handoff

### Estimativa
4–6 horas de trabalho

---

## Fase 5 — Governança e Sustentabilidade
**Status:** Pendente | **Prazo:** Pós-PSP4 (a partir de julho/2026)

> Esta fase existe para evitar o fenômeno documentado por Maximiano (2020): a solução técnica bem introduzida que perece por falta de responsável humano. A UnB já passou por isso com o SEI.

### Objetivos
Garantir que o EPR Info Hub continue útil e atualizado após o encerramento do PSP4, sem depender da equipe original.

### Entregáveis
- [ ] **Guia de Atualização de Conteúdo** — como um não-programador edita os arquivos `.ts` no GitHub pelo browser
- [ ] **Modelo de Revisão Semestral** — checklist de itens a verificar no início de cada semestre
- [ ] **Proposta de Governança** — documento para a coordenação do EPR formalizando quem atualiza, com que frequência e como
- [ ] **Transferência de ownership** do repositório GitHub para canal oficial do EPR
- [ ] Avaliação de expansão para outros departamentos da UnB (opcional)

### Critérios de conclusão
- [ ] Pelo menos um membro da coordenação/secretaria treinado
- [ ] Revisão semestral agendada para 2026/2
- [ ] Repositório com responsável definido

### Estimativa
4–8 horas de trabalho

---

## Dependências Críticas

```
GitHub repo criado ✓
    └─> Vercel conectado ao repo ✓
            └─> Fase 0 concluída ✓
                    └─> Fase 1 (layout) ✓
                            └─> Fase 2 (conteúdo) ✓
                                    └─> Fase 3 (UX/busca/redesign) ✓
                                            └─> Fase 4 (validação com usuários) ← AGORA
                                                    └─> Fase 5 (governança)
```

---

## Métricas de Acompanhamento

| Fase | Métrica | Meta | Status |
|---|---|---|---|
| 0 | Build sem erros | 100% | ✓ |
| 1 | Rotas funcionais | 5/5 | ✓ |
| 2 | Temas cobertos | 7/7 | ✓ |
| 3 | Tempo de busca | < 50ms | ✓ |
| 3 | SUS Score (design) | >= 75 | pendente |
| 4 | SUS Score (validação) | >= 75 | pendente |
| 4 | Links externos válidos | 100% | pendente |
| 5 | Membro da coordenação treinado | >= 1 | pendente |

---

## Notas de Risco

| Risco | Impacto | Mitigação |
|---|---|---|
| Coordenação não adota o app como ferramenta oficial | Alto | Apresentar resultados do SUS e redução de demanda na secretaria |
| Conteúdo desatualiza após a equipe PSP4 sair | Alto | Fase 5 de governança é não-negociável |
| Prazo de entrega PSP4 insuficiente para Fase 4 | Médio | Priorizar conteúdo completo e URL estável sobre validação completa |
| Regulamentos da UnB mudam sem aviso | Baixo | Revisão semestral e contato com a secretaria como canal de alerta |
