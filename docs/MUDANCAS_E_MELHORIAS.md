# Mudanças e Melhorias — EPR Info Hub

> **Para que serve este documento:** registrar, de forma detalhada e com justificativa,
> tudo o que foi alterado e melhorado no produto nesta rodada de trabalho. Serve para
> **(1)** o time validar e revisar e **(2)** ser incorporado ao relatório do PSP4.
> **Data:** junho/2026 · **Equipe:** Tiago Andre Gondim, Rafael Leivas Bisi, João Pedro
> Carvalho, Juliano Teles Abrahão · **Orientador:** Prof. Dr. Marcelo Carneiro Gonçalves.
> **Repositório:** https://github.com/tiagondim-cpu/epr-info-hub

---

## 1. Resumo executivo

Nesta rodada o produto deu três saltos: **deixou de viver só no Vercel e passou a ter
backup e colaboração reais no GitHub**; **ganhou infraestrutura de qualidade e
manutenção** (integração contínua, validação automática de links, app instalável/offline
e selo de "última atualização"); e **recebeu as três seções pedidas pela secretaria do
EPR** (Primeiros Passos, Calendário Acadêmico e Fluxo do Curso). Em paralelo, foram
produzidos os instrumentos de validação (questionário SUS e modelo de relatório de
usabilidade) e a documentação de planejamento das novas demandas.

Cada decisão seguiu um mesmo princípio: **curar o essencial dentro do app e apontar para
a fonte oficial**, mantendo o projeto simples (SPA estática, sem servidor, custo zero) e
sustentável por quem não programa.

---

## 2. Estado das entregas (visão rápida)

| # | Entrega | Por quê | Status |
|---|---|---|---|
| 1 | Código publicado no GitHub | Backup, colaboração, pré-requisito da governança | ✅ Concluído |
| 2 | CI (lint + build automáticos) | Impedir que erro vá para produção | ✅ Concluído |
| 3 | Validação semanal de links | Detectar link oficial quebrado sem checar à mão | ✅ Concluído |
| 4 | PWA (instalável + offline) | Acesso rápido e sem internet, cara de app | ✅ Concluído |
| 5 | Selo "última atualização" | Transparência sobre frescor do conteúdo | ✅ Concluído |
| 6 | README + templates SUS/usabilidade | Onboarding do time e instrumentos da Fase 4 | ✅ Concluído |
| 7 | Seção Primeiros Passos (calouro) | Demanda da secretaria | 🟡 Pronto, em PR (rascunho) |
| 8 | Seção Calendário Acadêmico | Demanda da secretaria | 🟡 Pronto, **dados oficiais pendentes** |
| 9 | Seção Fluxo do Curso | Demanda da secretaria | 🟡 Pronto, **dados oficiais pendentes** |
| 10 | Estratégia de dados/manutenção | Responder "como manter sem código" | ✅ Documentado |

---

## 3. Detalhamento por bloco

### Bloco 1 — Código no GitHub

**O que mudou.** O código, que existia apenas no Vercel, passou a ter um repositório
Git privado em `github.com/tiagondim-cpu/epr-info-hub`, com todo o histórico versionado.

**Por quê.** O Vercel hospeda, mas não é backup nem ferramenta de colaboração. Sem
repositório, um acidente apagaria o trabalho, ninguém do time conseguiria contribuir em
paralelo e a transferência futura para o EPR (governança) seria impossível. Ter o código
no GitHub é o alicerce de tudo que vem depois (CI/CD, revisão por PR, handoff).

**Onde.** Repositório GitHub; deploy de produção segue no Vercel.

---

### Bloco 2 — Integração Contínua (CI)

**O que mudou.** Toda vez que alguém envia código (`push`) ou abre um Pull Request para a
branch `main`, o GitHub roda automaticamente **lint** (ESLint) e **build** (TypeScript +
Vite). Se algo quebrar, o aviso aparece antes de ir ao ar.

**Por quê.** É uma rede de segurança: evita que um erro de digitação ou de tipo chegue à
produção e quebre a página para os alunos. Profissionaliza o fluxo e dá confiança para o
time editar sem medo.

**Onde.** `.github/workflows/ci.yml` (Node 24, `npm ci` → `npm run lint` → `npm run build`).

---

### Bloco 3 — Validação automática de links externos

**O que mudou.** Toda segunda-feira (06:00 de Brasília), um robô (lychee) percorre os
links oficiais citados no conteúdo, na documentação e no README. Se algum link estiver
quebrado, ele **abre automaticamente uma issue** no GitHub com a lista dos problemas.

**Por quê.** O app depende de links para sistemas da UnB (SIGAA, SEI, SAA, formulários).
Esses endereços mudam sem aviso. Sem automação, alguém teria que clicar em todos
periodicamente — o que ninguém faz. Aqui o sistema avisa sozinho quando há algo a
corrigir, reduzindo manutenção manual.

**Onde.** `.github/workflows/links.yml` (cron semanal + execução manual; aceita códigos
200/206/429; abre issue com rótulos `links` e `manutenção`).

---

### Bloco 4 — PWA: app instalável e offline

**O que mudou.** O EPR Info Hub virou um **Progressive Web App**: pode ser "instalado"
na tela inicial do celular/desktop e funciona **offline** depois da primeira visita.

**Por quê.** O público é estudante, majoritariamente no celular, às vezes com internet
ruim no campus. Poder abrir o app instalado e consultar prazos/procedimentos sem conexão
aumenta a utilidade real. Também dá ao projeto cara de produto, não de site improvisado.

**Onde.** `vite-plugin-pwa` (configurado em `vite.config.ts`): manifest com identidade
visual da UnB, ícones próprios e service worker que faz cache do conteúdo.

---

### Bloco 5 — Selo "Última atualização"

**O que mudou.** Cada página de conteúdo passou a exibir, no cabeçalho, um selo discreto
"**Última atualização: mês/ano**".

**Por quê.** Informação acadêmica desatualizada é pior do que ausência de informação,
porque o aluno age em cima dela. O selo torna o frescor **visível** e cria
responsabilidade: na revisão semestral (governança, Fase 5), basta atualizar uma data
por área num único arquivo. É uma decisão de manutenibilidade, não só estética.

**Onde.** Fonte única em `src/content/meta.ts`; componente `src/components/ui/AtualizadoEm.tsx`.

---

### Bloco 6 — README e instrumentos da Fase 4

**O que mudou.** O README virou um documento real (o que é o projeto, como rodar, **como
atualizar conteúdo sem ser programador**). Foram criados o **questionário SUS** e o
**modelo de relatório de usabilidade**.

**Por quê.** O README permite que qualquer membro novo entenda e contribua. O SUS é o
instrumento padrão (Brooke, 1996) para medir usabilidade percebida — a Fase 4 exige
validação com pelo menos 5 estudantes, com meta de pontuação ≥ 75 (referência: o SEI/UnB
obteve 59,78). Ter o instrumento pronto destrava a coleta.

**Onde.** `README.md`, `docs/SUS_QUESTIONARIO.md`, `docs/RELATORIO_USABILIDADE.md`.

---

### Bloco 7 — Três novas seções (demandas da secretaria)

Levantadas por João na reunião com a secretaria do EPR. A dor real por trás delas é que
**a secretaria atende repetidamente às mesmas perguntas**; o app existe para absorver isso.

**7.1 Primeiros Passos (Manual do Calouro).** Página `/primeiros-passos` com uma sequência
curta de orientações para o ingressante de Produção (ativar acessos, conferir matrícula,
salvar canais da secretaria) e dúvidas frequentes, **linkando o Manual oficial da DEG**
para o conteúdo institucional amplo. *Por quê assim:* a DEG já mantém o manual completo;
copiá-lo seria assumir uma dívida de manutenção alheia e arriscar desatualização. Curamos
só o que é específico do EPR e apontamos para o oficial.

**7.2 Calendário Acadêmico.** Página `/calendario` que lista as **datas-chave** do
semestre com destaque automático para a **próxima data**, badges de urgência e **link ao
calendário oficial da SAA**. *Por quê assim:* o calendário muda todo semestre; manter só
as datas que importam (e não espelhar o documento inteiro) é o equilíbrio entre boa
experiência e manutenção viável.

**7.3 Fluxo do Curso.** Página `/fluxo` com a grade **por semestre** (12 semestres),
diferenciando obrigatórias/optativas e exibindo totais de referência (240 créditos, 165
obrigatórios), com **link ao SIGAA/MatrículaWeb**. *Por quê assim:* a grade quase não
muda (só em reforma de PPC) e uma grade limpa e responsiva é muito melhor que a interface
do SIGAA; ainda assim, o oficial fica a um clique.

**Integração.** As três entraram na navegação (desktop e mobile), na busca, e ganharam
uma seção própria "**Demandas da secretaria**" na Home, além do selo de atualização.

**Onde.** Conteúdo em `src/content/{calouro,calendario,fluxo}.ts`; páginas em
`src/pages/{PrimeirosPassos,Calendario,Fluxo}.tsx`; navegação, busca e Home atualizadas.
Planejamento completo em `docs/demandas-secretaria/`.

> **Processo:** o planejamento (plano, requisitos, validação) e a revisão de código foram
> feitos de forma assistida; a implementação das três páginas foi gerada pelo Codex a
> partir de um prompt detalhado (`docs/demandas-secretaria/PROMPT-CODEX.md`) e revisada
> antes de versionar. Esse fluxo (planejar → especificar → gerar → revisar) é, em si, um
> resultado metodológico que pode entrar no relatório.

---

### Bloco 8 — Estratégia de dados e manutenção (a decisão "como manter sem código")

**O que se decidiu.** Não automatizar a coleta dos dados por raspagem. Em vez disso:
**linkar** o que a instituição já mantém (manual da DEG), **transcrever uma vez** o que
quase nunca muda (fluxo) e, para o que muda sempre (calendário), planejar uma camada de
**edição sem código** (CMS git-based) como próximo passo.

**Por quê.** Verificou-se que nem a SAA nem o SIGAA expõem dados legíveis por máquina
(há só PDF e páginas HTML). "Puxar automático" significaria raspar conteúdo que muda de
formato a cada semestre — o raspador quebraria justamente quando fosse necessário, e
consertá-lo exige *mais* conhecimento técnico do que editar uma data. Ou seja, a
automação transferiria a manutenção para um programador, o oposto do objetivo. Para datas
com peso acadêmico (trancamento, matrícula), também se descartou usar IA para preencher
sozinha: um valor errado e confiante é pior que a ausência dele.

**Onde.** Documento `docs/demandas-secretaria/04-MANUTENCAO-DADOS.md`.

---

## 4. Melhorias de experiência (UX) já presentes

Para contexto do relatório, o produto também conta com: busca rápida com correspondência
aproximada (Fuse.js), navegação lateral colapsável com versão mobile (drawer),
animações de transição (framer-motion), componentes acessíveis (Radix/shadcn) e a
identidade visual da UnB aplicada via tokens de cor. Esses elementos sustentam a meta de
usabilidade medida pelo SUS.

---

## 5. Pendências e bloqueadores (transparência)

- **Dados oficiais a transcrever:** as páginas de Calendário e Fluxo estão com dados de
  **exemplo** (`EXEMPLO — …`). Precisam receber as datas reais da SAA (2026/1) e a grade
  real do SIGAA/MatrículaWeb (cód. 6017) **antes de publicar em produção**.
- **Pull Request em rascunho:** as três seções estão no **PR #1 (draft)**
  (`github.com/tiagondim-cpu/epr-info-hub/pull/1`). Está em rascunho de propósito, porque
  o `main` publica em produção automaticamente e os exemplos não podem ir ao ar.
- **Camada "sem código" (CMS):** planejada, ainda não implementada.
- **Validação com usuários (SUS):** instrumento pronto; falta aplicar com ≥ 5 estudantes.

---

## 6. Como o time valida (checklist objetivo)

Abrir o PR #1 e o ambiente de preview e conferir:

- [ ] As três novas páginas abrem e fazem sentido para o aluno de Produção.
- [ ] Os textos do **Primeiros Passos** estão corretos (acessos, canais, e-mail da secretaria).
- [ ] Os **links oficiais** (DEG, SAA, SIGAA/MatrículaWeb) levam ao lugar certo.
- [ ] A estrutura de **Calendário** e **Fluxo** está adequada (falta só preencher os dados reais).
- [ ] Nada quebra no celular.
- [ ] O texto/escopo bate com o que a secretaria pediu na reunião.

Quem tiver os dados oficiais (datas da SAA e grade do fluxo) pode anexá-los no PR para a
transcrição.

---

## 7. Ganchos para o relatório do PSP4

- **Problema → solução:** atendimento repetitivo da secretaria → centralização curada com
  fonte oficial. As três demandas são evidência de validação com o cliente real.
- **Usabilidade:** medir com SUS (meta ≥ 75; comparar com o SEI, 59,78) após os ajustes.
- **Sustentabilidade (Fase 5):** o selo de atualização, a validação automática de links e
  a estratégia de manutenção sem código endereçam diretamente o risco de "solução que
  perece por falta de responsável" — ponto central do relatório.
- **Método:** o ciclo planejar → especificar → gerar (Codex) → revisar → validar com o
  time é replicável e pode ser descrito como contribuição metodológica.

---

## 8. Referências

- Repositório: https://github.com/tiagondim-cpu/epr-info-hub
- PR das novas seções (rascunho): https://github.com/tiagondim-cpu/epr-info-hub/pull/1
- Commits-chave: `f64590d` (PWA, selo, CI/CD, docs da Fase 4), `65ccb97` (docs das
  demandas), `0ff50bc` (3 seções).
- Documentos relacionados: `docs/ROADMAP.md`, `docs/TECH_STACK.md`,
  `docs/SUS_QUESTIONARIO.md`, `docs/RELATORIO_USABILIDADE.md`, `docs/demandas-secretaria/`.
- Fontes oficiais: epr.unb.br · saa.unb.br/calendario-academico · deg.unb.br/manual-do-calouro
  · sigaa.unb.br · matriculaweb.unb.br (cód. 6017).
