# Documento de Validação — Demandas da Secretaria EPR

> **Iniciativa:** 3 demandas da secretaria do EPR (Calouro · Calendário · Fluxo).
> **Documentos relacionados:** [Plano de Execução](01-PLANO-EXECUCAO.md) · [Requisitos](02-REQUISITOS.md)
> **Como usar:** preencher a coluna **Status** (☐ pendente · ✅ ok · ❌ falhou) durante
> a validação. A iniciativa só é considerada concluída quando a § 7 (DoD global) fechar.

---

## 1. Objetivo

Validar, de forma rastreável, que a implementação atende aos requisitos de
[02-REQUISITOS.md](02-REQUISITOS.md) e resolve a dor da secretaria. Cada critério
de aceitação aponta para o RF que valida.

---

## 2. Critérios de aceitação (rastreáveis)

### Feature 1 — Primeiros Passos (Calouro)

| Critério | Valida | Como testar | Status |
|---|---|---|---|
| Sequência de passos do calouro EPR é exibida na ordem | RF-CAL-1 | Abrir `/primeiros-passos`; conferir passos | ☐ |
| Cada passo tem título, descrição e link quando aplicável | RF-CAL-2 | Inspecionar cada passo | ☐ |
| Bloco de dúvidas frequentes presente e funcional | RF-CAL-3 | Expandir o accordion | ☐ |
| Link ao Manual oficial da DEG presente e rotulado | RF-CAL-4 | Clicar e chegar em `deg.unb.br/manual-do-calouro/` | ☐ |
| Conteúdo é específico do EPR (não copia o manual inteiro) | RF-CAL-5 | Revisão editorial | ☐ |

### Feature 2 — Calendário Acadêmico

| Critério | Valida | Como testar | Status |
|---|---|---|---|
| Datas-chave do semestre vigente listadas | RF-CALEND-1 | Abrir `/calendario`; conferir contra a SAA | ☐ |
| Badge indica a natureza/urgência de cada data | RF-CALEND-2 | Inspeção visual | ☐ |
| "Próxima data" destacada corretamente | RF-CALEND-3 | Verificar relativo à data atual | ☐ |
| Semestre de referência indicado | RF-CALEND-4 | Conferir rótulo (ex.: 2026/1) | ☐ |
| Link ao calendário oficial da SAA presente | RF-CALEND-5 | Clicar e chegar à SAA | ☐ |
| Selo "última atualização" exibido | RF-CALEND-6 / RG-2 | Inspeção visual | ☐ |

### Feature 3 — Fluxo do Curso

| Critério | Valida | Como testar | Status |
|---|---|---|---|
| Disciplinas organizadas por semestre (1º–12º) | RF-FLX-1 | Abrir `/fluxo`; conferir contra SIGAA | ☐ |
| Código, nome e créditos por disciplina | RF-FLX-2 | Inspecionar entradas | ☐ |
| Obrigatórias x optativas diferenciadas visualmente | RF-FLX-3 | Inspeção visual | ☐ |
| Layout responsivo (sem imagem do fluxograma) | RF-FLX-4 | Testar em mobile e desktop | ☐ |
| Link ao fluxo oficial (SIGAA/MatrículaWeb) presente | RF-FLX-5 | Clicar e chegar à fonte | ☐ |
| Totais de referência exibidos quando úteis | RF-FLX-6 | Inspeção visual | ☐ |

---

## 3. Checklist de validação técnica

| Item | Valida | Status |
|---|---|---|
| `npm run lint` sem erros | — | ☐ |
| `npm run build` sem erros (tsc + Vite + PWA) | — | ☐ |
| 3 rotas novas navegáveis sem 404 (`/primeiros-passos`, `/calendario`, `/fluxo`) | RF-*-1 | ☐ |
| Itens de navegação aparecem no Sidebar (desktop) e MobileSidebar | — | ☐ |
| Busca retorna resultados das 3 novas seções | RNF-7 | ☐ |
| Cards de acesso presentes na Home | — | ☐ |
| Layout não quebra em mobile/desktop em nenhuma das 3 páginas | RNF-2 | ☐ |
| Acessibilidade: foco visível, `aria-label` em ícones, contraste AA | RNF-1 | ☐ |
| Páginas abrem offline (PWA) após primeiro carregamento | RNF-6 | ☐ |
| Lighthouse/PWA sem regressão relevante | RNF-5 | ☐ |

## 4. Checklist de validação de conteúdo

| Item | Valida | Status |
|---|---|---|
| Datas do calendário conferem com a SAA (semestre vigente) | RF-CALEND-1 | ☐ |
| Grade do fluxo confere com SIGAA/MatrículaWeb (cód. 6017) | RF-FLX-1 | ☐ |
| Passos do calouro revisados por quem conhece o EPR | RF-CAL-1 | ☐ |
| Todos os links externos válidos (workflow lychee `links.yml`) | RG-1 | ☐ |
| Selo "última atualização" presente nas 3 áreas (`meta.ts`) | RG-2 | ☐ |
| Nenhum dado acadêmico inventado (tudo rastreável à fonte) | RG-1 | ☐ |

## 5. Validação com usuário (método SUS)

Reusar o instrumento de [../SUS_QUESTIONARIO.md](../SUS_QUESTIONARIO.md) com
tarefas-roteiro específicas destas features:

- [ ] "Você acabou de entrar no curso — encontre o primeiro passo que precisa fazer."
- [ ] "Descubra qual a próxima data importante do semestre."
- [ ] "Em que semestre está a disciplina X?" (escolher uma disciplina real do fluxo)
- [ ] "Encontre o link para o calendário oficial da UnB."

**Meta:** manter SUS ≥ 75 (sem regressão em relação à medição da Fase 4).

## 6. Sign-off da secretaria

| Pergunta | Status |
|---|---|
| As 3 entregas correspondem ao que foi pedido na reunião? | ☐ |
| A secretaria se sente confortável em apontar os alunos para essas páginas? | ☐ |
| Há algo que ficou faltando ou que veio diferente do esperado? | ☐ |

## 7. Matriz de rastreabilidade (resumo)

| Requisito | Critério (§) | Status |
|---|---|---|
| RF-CAL-1..5 | § 2 (Feature 1) | ☐ |
| RF-CALEND-1..6 | § 2 (Feature 2) | ☐ |
| RF-FLX-1..6 | § 2 (Feature 3) | ☐ |
| RNF-1..7 | § 3 | ☐ |
| RG-1..4 | § 4 | ☐ |

## 8. Definition of Done global

A iniciativa está concluída quando:

- [ ] Todos os critérios de aceitação (§ 2) ✅.
- [ ] Checklists técnico (§ 3) e de conteúdo (§ 4) ✅.
- [ ] Validação com usuário (§ 5) realizada e SUS ≥ 75.
- [ ] Sign-off da secretaria (§ 6) obtido.
- [ ] `ROADMAP.md` e `TECH_STACK.md` atualizados refletindo as entregas.
- [ ] Item de revisão semestral do calendário registrado na Fase 5.
