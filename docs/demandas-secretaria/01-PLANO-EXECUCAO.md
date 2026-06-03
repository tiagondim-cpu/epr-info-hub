# Plano de Execução — Demandas da Secretaria EPR

> **Iniciativa:** atender as 3 demandas levantadas pela secretaria do EPR (reunião de
> jun/2026, coletada por João Pedro Carvalho).
> **Documentos relacionados:** [Requisitos](02-REQUISITOS.md) · [Validação](03-VALIDACAO.md)
> **Roadmap do produto:** [../ROADMAP.md](../ROADMAP.md)
> **Status:** planejamento aprovado · implementação pendente

---

## 1. Contexto

Na reunião com a secretaria do EPR, foram levantados **3 conteúdos que a secretaria
quer ver na plataforma**:

1. **Manual do calouro**
2. **Calendário acadêmico**
3. **Fluxo do curso (matéria por semestre)**

São anotações de reunião — títulos, não requisitos detalhados.

### A dor real por trás

A secretaria atende **repetidamente** essas mesmas três perguntas. O EPR Info Hub
existe para ser o lugar único que reduz esse atendimento repetitivo. Portanto, o
valor de cada entrega **não** é "ter um link" (uma busca no Google já resolve), e sim:

- **Curar** o que de fato importa ao aluno de Produção;
- **Manter atual** (com responsável e fonte definidos);
- Entregar **boa UX** (responsivo, acessível, buscável).

### Princípio norteador (vale para as 3 entregas)

> **Curar o essencial dentro do app + linkar a fonte oficial canônica.**

Cada feature aponta para a fonte oficial como "fonte da verdade" e exibe o selo de
"última atualização" (`src/content/meta.ts`), reusando a infraestrutura já existente.

### Achados de pesquisa (fontes oficiais)

| Demanda | Fonte oficial | Volatilidade | Implicação |
|---|---|---|---|
| Manual do calouro | DEG — `deg.unb.br/manual-do-calouro/` | Baixa (UnB-wide, estável) | Não reescrever; curar a parte EPR e linkar o oficial |
| Calendário acadêmico | SAA — `saa.unb.br/calendario-academico/` (Res. CEPE 140/2025) | **Alta** (muda todo semestre) | Curar só datas-chave; revisão semestral obrigatória |
| Fluxo do curso EPR | SIGAA `id=414326` / MatrículaWeb `cod=6017` | Média (muda em reforma de PPC) | Transcrever grade oficial; revalidar a cada PPC |

---

## 2. Decisões travadas

| Decisão | Escolha | Justificativa |
|---|---|---|
| Escopo desta tarefa | **Só os 3 documentos** | Alinhar o time antes de codar |
| Manual do calouro | **Onboarding EPR curado + link à DEG** | Evita duplicar/desatualizar o manual oficial |
| Calendário | **Datas-chave curadas + link à SAA** | Bom UX com manutenção controlada |
| Fluxo do curso | **Grade nativa por semestre + link ao SIGAA** | Responsivo e acessível; fonte oficial preservada |

---

## 3. Escopo

**Dentro do escopo:** três novas seções no app (Primeiros Passos / Calendário /
Fluxo do Curso), integradas à navegação, à busca e à Home, seguindo o design system
da UnB e a infraestrutura existente.

**Fora do escopo (YAGNI):** fluxograma interativo com pré-requisitos navegáveis;
espelhamento integral do manual da DEG; espelhamento de todas as datas do calendário.
Ver justificativa em [Requisitos § Fora de escopo](02-REQUISITOS.md).

---

## 4. Fases e grupos de tarefas

A implementação se organiza em 5 fases. A **Fase A** é pré-requisito; **B, C e D**
podem rodar em paralelo (são independentes entre si); a **Fase E** fecha.

### Fase A — Fundação (transversal) · pré-requisito

| # | Tarefa | Arquivos | Depende de |
|---|---|---|---|
| A1 | Novas interfaces de conteúdo | `src/content/types.ts` | — |
| A2 | Registrar 3 áreas no selo de atualização | `src/content/meta.ts` | A1 |
| A3 | Registrar 3 rotas | `src/App.tsx` | — |
| A4 | 3 itens de navegação (desktop + mobile) | `src/components/layout/Sidebar.tsx`, `MobileSidebar.tsx` | — |
| A5 | Preparar inclusão na busca | `src/content/searchIndex.ts` | A1 |

### Fase B — Primeiros Passos (Calouro)

| # | Tarefa | Arquivos | Depende de |
|---|---|---|---|
| B1 | Conteúdo curado do calouro EPR (passos + FAQ + link DEG) | `src/content/calouro.ts` | A1 |
| B2 | Página de Primeiros Passos | `src/pages/PrimeirosPassos.tsx` | A3, B1 |
| B3 | Incluir no índice de busca | `src/content/searchIndex.ts` | A5, B1 |

### Fase C — Calendário Acadêmico

| # | Tarefa | Arquivos | Depende de |
|---|---|---|---|
| C1 | Datas-chave do semestre vigente (dados tipados) | `src/content/calendario.ts` | A1 |
| C2 | Página de Calendário (lista + destaque "próxima data") | `src/pages/Calendario.tsx` | A3, C1 |
| C3 | Incluir no índice de busca | `src/content/searchIndex.ts` | A5, C1 |

### Fase D — Fluxo do Curso

| # | Tarefa | Arquivos | Depende de |
|---|---|---|---|
| D1 | Grade oficial transcrita (12 semestres × disciplinas) | `src/content/fluxo.ts` | A1 |
| D2 | Página/grade de Fluxo do Curso | `src/pages/Fluxo.tsx` | A3, D1 |
| D3 | Incluir no índice de busca | `src/content/searchIndex.ts` | A5, D1 |

### Fase E — Integração e fechamento

| # | Tarefa | Arquivos | Depende de |
|---|---|---|---|
| E1 | Cards de acesso rápido na Home | `src/pages/Home.tsx` | B2, C2, D2 |
| E2 | Atualizar documentação | `README.md`, `docs/ROADMAP.md`, `docs/TECH_STACK.md` | B–D |
| E3 | Validar build e lint | — | tudo |
| E4 | Validar links externos (lychee) | `.github/workflows/links.yml` (já existe) | E2 |

---

## 5. Sequência recomendada

```
Fase A (Fundação)
   └─> Fase B (Calouro)   ┐
   └─> Fase C (Calendário)├─ em paralelo (independentes)
   └─> Fase D (Fluxo)     ┘
            └─> Fase E (Integração + fechamento)
```

**Divisão sugerida do time** (placeholder — confirmar):
- **Fase A:** Tiago (mexe na infraestrutura compartilhada — evita conflito de merge).
- **Fase B:** João (coletou a demanda; conhece o contexto da secretaria).
- **Fase C:** Juliano.
- **Fase D:** Rafael (precisa transcrever a grade oficial com atenção).
- **Fase E:** Tiago (fecha integração + docs).

---

## 6. Riscos e mitigações

| Risco | Impacto | Mitigação |
|---|---|---|
| Calendário desatualiza a cada semestre | Alto | Curar só datas-chave; selo "atualizado em" visível; entrar no checklist da revisão semestral (Fase 5) |
| Dados do fluxo transcritos com erro | Alto | Conferência dupla contra SIGAA/MatrículaWeb; link à fonte oficial sempre visível |
| Scope creep do "manual do calouro" | Médio | Escopo fixo: onboarding EPR curado, o resto é link à DEG |
| Conflito de merge na infraestrutura | Médio | Fase A concluída e mergeada antes de B/C/D começarem |
| Dado oficial indisponível no momento de codar | Médio | Conteúdo é dependência explícita (ver Requisitos); página pode subir com aviso "em atualização" |

---

## 7. Definition of Done (por entrega)

Cada uma das 3 entregas só é considerada concluída quando:

- [ ] Rota navegável sem erro 404 (desktop e mobile).
- [ ] Conteúdo conferido contra a fonte oficial.
- [ ] Link à fonte oficial presente e funcionando.
- [ ] Selo "última atualização" exibido.
- [ ] Conteúdo encontrável pela busca.
- [ ] Card de acesso na Home.
- [ ] `npm run lint` e `npm run build` sem erros.
- [ ] Critérios de aceitação correspondentes em [03-VALIDACAO.md](03-VALIDACAO.md) atendidos.

---

## 8. Encaixe no roadmap

Estas 3 entregas são um **incremento de conteúdo** que se apoia na Fase 4 (validação)
e alimenta diretamente a **Fase 5 (governança)**: o calendário, por ser de alta
volatilidade, passa a ser o item mais crítico do "Modelo de Revisão Semestral".
Recomenda-se adicionar ao `ROADMAP.md` o item correspondente na Fase 4/5.

---

## 9. Estimativa

| Fase | Estimativa |
|---|---|
| A — Fundação | 2–3 h |
| B — Calouro | 2–4 h (depende da curadoria de conteúdo) |
| C — Calendário | 2–3 h |
| D — Fluxo | 3–5 h (transcrição cuidadosa da grade) |
| E — Integração | 1–2 h |
| **Total** | **~10–17 h** |
