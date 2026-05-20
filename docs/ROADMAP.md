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
    ✓         ...        ...         ...         ...        ...
```

---

## Fase 0 — Constituição do Projeto
**Status:** Em execução | **Prazo:** Semana 0 (maio/2026)

### Objetivos
Estabelecer os alicerces do produto: definição de stack, documentação de missão, estrutura inicial do repositório e primeiro deploy funcional (mesmo que vazio).

### Entregáveis
- [x] `docs/MISSION.md` — missão, visão, personas, princípios, métricas
- [x] `docs/TECH_STACK.md` — stack justificada, tokens UnB, estrutura de pastas
- [x] `docs/ROADMAP.md` — este documento
- [ ] Repositório GitHub criado e configurado
- [ ] Projeto Vite + React + TypeScript scaffoldado
- [ ] Tailwind configurado com tokens UnB (Azul #003366, Verde #006633)
- [ ] Deploy inicial no Vercel (página em branco funcional com domínio)
- [ ] Base de conteúdo populada em `src/content/*.ts`

### Critérios de conclusão
- `npm run dev` sobe sem erros
- `npm run build` gera bundle sem erros de tipo TypeScript
- URL pública no Vercel acessível
- Cores institucionais da UnB aplicadas no header

### Estimativa
2–4 horas de trabalho

---

## Fase 1 — MVP Funcional (Layout Base)
**Status:** Pendente | **Prazo:** Semanas 1–2

### Objetivos
Implementar a estrutura visual completa do app — navegação, layout responsivo, páginas vazias — para que qualquer membro da equipe possa popular conteúdo sem bloquear o desenvolvimento.

### Entregáveis
- [ ] Header com logo EPR + navegação responsiva (desktop + hamburger mobile)
- [ ] Footer com contatos da secretaria e links institucionais
- [ ] 5 páginas com estrutura base: Home, Jornada, FAQ, Procedimentos, Links
- [ ] Sistema de rotas React Router v6 configurado
- [ ] Página Home com cards de acesso rápido aos temas críticos
- [ ] Componentes base: `Card`, `Badge`, `Accordion`, `SearchBar` (estático)
- [ ] Layout responsivo validado em mobile (375px), tablet (768px) e desktop (1280px)

### Critérios de conclusão
- Todas as 5 rotas navegáveis sem erro 404
- Layout não quebra em nenhum breakpoint
- Cards da Home linkam para as páginas corretas
- Lighthouse Performance >= 90 (página em branco com layout)

### Estimativa
6–10 horas de trabalho

---

## Fase 2 — Conteúdo Core
**Status:** Pendente | **Prazo:** Semanas 2–3

### Objetivos
Popular o app com os 7 temas críticos, o FAQ completo, os procedimentos passo a passo e os links úteis. Ao final desta fase, o app já é funcionalmente útil para um estudante.

### Entregáveis

**Temas críticos (cada um como seção em `Jornada` ou página própria):**
- [ ] Estágio Obrigatório: requisitos, prazos, formulário, modalidades
- [ ] Atividades Complementares: tipos aceitos, pontuação, momento de envio
- [ ] Trancamento de Matrícula: 4 modalidades com tabela de prazos e impacto no IRA
- [ ] Prorrogação de Prazo de Conclusão: critérios, antecedência, processo CEG
- [ ] Desligamento Acadêmico: causas, fase probatória, reintegração (Res. CEG 001/2023)
- [ ] IRA: o que é, o que afeta, como consultar no SIGAA
- [ ] Canais Oficiais: secretaria EPR, SAA, DEG, DDS, SIGAA, SEI

**Seções auxiliares:**
- [ ] FAQ com accordion — 8+ perguntas frequentes com respostas diretas
- [ ] Procedimentos — passo a passo de: trancamento via SEI, inscrição no estágio, envio de ACs, prorrogação de prazo
- [ ] Links Úteis — tabela com nome, URL e descrição de cada recurso oficial

**Badges de alerta:**
- [ ] "Prazo crítico: até 25% do semestre" (estágio, trancamento automático)
- [ ] "Fazer uma única vez no curso" (atividades complementares)
- [ ] "Solicitar com 90 dias de antecedência" (prorrogação)

### Critérios de conclusão
- 100% dos 7 temas com conteúdo completo e revisado
- Nenhum link externo quebrado
- Conteúdo validado contra as fontes oficiais (epr.unb.br, saa.unb.br)

### Estimativa
8–12 horas de trabalho

---

## Fase 3 — UX e Busca
**Status:** Pendente | **Prazo:** Semanas 3–4

### Objetivos
Melhorar significativamente a experiência do usuário com busca funcional, organização por jornada do estudante e refinamento visual mobile.

### Entregáveis
- [ ] Busca rápida com Fuse.js — busca fuzzy em todos os conteúdos (FAQ, temas, procedimentos)
- [ ] Hook `useSearch` — lógica de busca isolada e testável
- [ ] Resultados em tempo real (debounce 200ms) com highlight do termo buscado
- [ ] Página Jornada organizada por fase do curso:
  - Início do curso (calouros, matrícula, módulo livre)
  - Durante o curso (disciplinas, IRA, trancamentos)
  - Meio do curso (atividades complementares, iniciação científica)
  - Final do curso (estágio, PG, formatura)
  - Situações de risco (desligamento, prorrogação, condição)
- [ ] Refinamento de responsividade mobile
- [ ] Animações suaves de transição (fade-in de página, expand de accordion)
- [ ] Meta tags SEO: `<title>`, `<meta description>`, `<og:*>` para compartilhamento

### Critérios de conclusão
- Busca retorna resultados relevantes para as 10 perguntas mais comuns
- Nenhum componente quebrado em iOS Safari (teste obrigatório)
- Tempo de carregamento inicial < 2s em 3G emulado (Chrome DevTools)

### Estimativa
6–8 horas de trabalho

---

## Fase 4 — Validação e Entrega
**Status:** Pendente | **Prazo:** Semanas 4–5

### Objetivos
Validar o produto com usuários reais (estudantes do EPR), corrigir problemas identificados e entregar o app em produção com URL pública para apresentação ao Prof. Marcelo.

### Entregáveis
- [ ] Aplicação do **System Usability Scale (SUS)** com ao menos 5 estudantes do EPR
  - Meta: pontuação SUS >= 75 (superior ao SEI: 59,78)
  - Template do questionário incluído no repositório
- [ ] Relatório de usabilidade com problemas identificados e correções realizadas
- [ ] Ajustes de conteúdo e navegação baseados no feedback
- [ ] URL de produção no Vercel (ex: `epr-info-hub.vercel.app`)
- [ ] README.md no repositório com: o que é, como rodar localmente, como atualizar conteúdo
- [ ] Apresentação do produto ao Prof. Marcelo com demonstração ao vivo

### Critérios de conclusão
- URL pública acessível e estável
- SUS >= 75 documentado
- Todos os links externos funcionando
- README completo para handoff

### Estimativa
4–6 horas de trabalho

---

## Fase 5 — Governança e Sustentabilidade
**Status:** Pendente | **Prazo:** Pós-PSP4 (a partir de julho/2026)

> Esta fase existe para evitar o fenômeno documentado por Maximiano (2020): a solução técnica bem introduzida que perece por falta de responsável humano. A UnB já passou por isso com o SEI.

### Objetivos
Garantir que o EPR Info Hub continue útil e atualizado após o encerramento do PSP4, sem depender da equipe original.

### Entregáveis
- [ ] **Guia de Atualização de Conteúdo** — documento explicando como um não-programador pode editar os arquivos `.ts` no GitHub diretamente pelo browser
- [ ] **Modelo de Revisão Semestral** — checklist de itens a verificar no início de cada semestre (prazos, links, novos regulamentos)
- [ ] **Proposta de Governança** — documento para a coordenação do EPR formalizando quem atualiza, com que frequência e como
- [ ] **Transferência de ownership** do repositório GitHub para um canal oficial do EPR ou da coordenação
- [ ] Avaliação de expansão para outros departamentos da UnB (opcional)

### Critérios de conclusão
- Pelo menos um membro da coordenação/secretaria treinado para atualizar conteúdo
- Revisão semestral agendada para 2026/2
- Repositório com responsável definido

### Estimativa
4–8 horas de trabalho

---

## Dependências Críticas

```
GitHub repo criado
    └─> Vercel conectado ao repo
            └─> Fase 0 concluída
                    └─> Fase 1 (layout)
                            └─> Fase 2 (conteúdo) [paralelo com Fase 1 após estrutura pronta]
                                    └─> Fase 3 (UX/busca)
                                            └─> Fase 4 (validação com usuários)
                                                    └─> Fase 5 (governança)
```

---

## Métricas de Acompanhamento

| Fase | Métrica | Meta |
|---|---|---|
| 0 | Build sem erros | 100% |
| 1 | Rotas funcionais | 5/5 |
| 2 | Temas cobertos | 7/7 |
| 3 | Tempo de busca | < 50ms |
| 3 | Lighthouse Performance | >= 90 |
| 4 | SUS Score | >= 75 |
| 4 | Links externos válidos | 100% |
| 5 | Membro da coordenação treinado | >= 1 |

---

## Notas de Risco

| Risco | Impacto | Mitigação |
|---|---|---|
| Coordenação não adota o app como ferramenta oficial | Alto | Apresentar resultados do SUS e redução de demanda na secretaria |
| Conteúdo desatualiza após a equipe PSP4 sair | Alto | Fase 5 de governança é não-negociável |
| Prazo de entrega PSP4 insuficiente para Fases 3+4 | Médio | Priorizar conteúdo (Fase 2) sobre UX (Fase 3) se houver restrição de tempo |
| Regulamentos da UnB mudam sem aviso | Baixo | Revisão semestral e contato com a secretaria como canal de alerta |
