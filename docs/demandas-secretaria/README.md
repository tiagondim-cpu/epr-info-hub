# Demandas da Secretaria EPR — jun/2026

Pacote de planejamento para as **3 demandas levantadas pela secretaria do EPR** na
reunião de junho/2026 (coletadas por João Pedro Carvalho):

1. **Manual do calouro** → "Primeiros Passos" (onboarding EPR curado + link à DEG)
2. **Calendário acadêmico** → datas-chave curadas + link à SAA
3. **Fluxo do curso** → grade nativa por semestre + link ao SIGAA

## Documentos

| # | Documento | Para quê |
|---|---|---|
| 1 | [01-PLANO-EXECUCAO.md](01-PLANO-EXECUCAO.md) | Fases, grupos de tarefas, sequência, riscos e DoD |
| 2 | [02-REQUISITOS.md](02-REQUISITOS.md) | O que cada feature precisa ter (RF/RNF/RG + modelos de dados) |
| 3 | [03-VALIDACAO.md](03-VALIDACAO.md) | Como validar a execução (critérios rastreáveis + checklists) |
| 4 | [04-MANUTENCAO-DADOS.md](04-MANUTENCAO-DADOS.md) | Estratégia de dados/manutenção: por que não raspar, e o CMS sem código |
| — | [PROMPT-CODEX.md](PROMPT-CODEX.md) | Prompt pronto para o Codex implementar as 3 páginas |

## Estado

- ✅ Planejamento (docs 01–04)
- ✅ Prompt do Codex pronto (`PROMPT-CODEX.md`) — implementação das 3 páginas
- ⏳ Implementação — a cargo do Codex; depende de coleta dos dados oficiais
  (datas SAA e grade do fluxo EPR)
- ⏳ CMS sem código (fast-follow, todo o conteúdo) — tarefa posterior

> **Princípio das 3 entregas:** curar o essencial no app + linkar a fonte oficial
> canônica, reusando a infraestrutura existente (selo `meta.ts`, badges, busca).
