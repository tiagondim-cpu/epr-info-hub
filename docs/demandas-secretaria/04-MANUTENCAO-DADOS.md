# Estratégia de Dados e Manutenção — Demandas da Secretaria

> **Pergunta que este documento responde:** dá para puxar e atualizar esses conteúdos
> automaticamente, sem ninguém precisar manter e sem precisar saber código? Qual a
> melhor maneira?
> **Resposta curta:** parcialmente — e o caminho certo é diferente para cada fonte.
> "Automático" e "sem código" não são a mesma coisa, e para as fontes da UnB elas
> entram em conflito. Este documento registra o porquê e a decisão.

---

## 1. A confusão que precisa ser desfeita

"Atualizar automático" (zero toque humano) e "sem precisar saber código" (leigo
consegue manter) são objetivos **diferentes**. Para fontes que expõem dados legíveis
por máquina (uma API, um feed iCal), dá para ter os dois. Para as fontes da UnB, **não
existe esse feed** — então automatizar significa *raspar* conteúdo instável, o que
empurra a manutenção para o desenvolvedor (mais código, não menos). O objetivo "sem
código" é melhor servido por **edição assistida sem código**, não por automação.

## 2. Diagnóstico por fonte (verificado em jun/2026)

| Fonte | Formato disponível | Feed/API? | Volatilidade | Curadoria agrega? |
|---|---|---|---|---|
| Calendário (SAA) | PDF (URL muda por semestre) + HTML | **Não encontrado** | **Alta** (todo semestre) | Sim (aluno quer 5–10 datas, não 80 linhas) |
| Fluxo (SIGAA/MatrículaWeb) | Páginas JSF (HTML) | **Não** (UnB orienta contatar a STI) | Baixa (só em reforma de PPC) | Sim (grade limpa > UI do SIGAA) |
| Manual (DEG) | Página + PDF, mantidos pela DEG | N/A (é página) | Baixa | **Não** (doc genérico da UnB) |

## 3. Decisão por fonte

**Manual do calouro → linkar a landing oficial da DEG, não embutir.** Como a curadoria
agrega pouco e a DEG mantém o conteúdo, apontamos para
`https://deg.unb.br/manual-do-calouro/` (a *página*, não o PDF datado). É o único caso
em que "automático + sem código + sem manutenção" é literalmente verdade — porque não
guardamos o dado, guardamos um ponteiro para quem o mantém.

**Fluxo do curso → transcrever uma vez + linkar o SIGAA.** A volatilidade é quase nula
(muda só em reforma de PPC, escala de anos). Automatizar aqui é over-engineering pago
em bugs. Transcreve-se a grade obrigatória uma vez, exibe-se o selo de atualização, e
revisita-se quando o PPC mudar.

**Calendário → edição sem código (CMS), não automação.** Aqui a volatilidade é alta,
mas as datas têm **peso acadêmico/legal** (trancamento, matrícula). A resposta certa
não é um robô: é dar à secretaria/monitor um **formulário web** para editar as datas-
chave, com humano no meio. Combinado com o selo "atualizado em" (desatualização fica
visível) e o link-check semanal já existente (lychee em `.github/workflows/links.yml`).

## 4. Abordagens rejeitadas (e por quê)

**Git scraping (GitHub Action que baixa o PDF/HTML, faz parse e dá commit).** É o
padrão correto *quando a fonte é estável e estruturada*. O calendário da SAA é o
oposto: muda de layout e de URL a cada semestre. O parser quebra exatamente no
semestre em que era necessário, e consertá-lo exige **mais** conhecimento de código do
que editar uma data. Isso *realoca* a manutenção do leigo para o dev — contra o
objetivo.

**LLM lendo o PDF para preencher o JSON sozinho.** Tecnicamente viável, mas perigoso
para *datas com consequência*: um modelo errar a data de trancamento por uma semana,
com confiança, é pior do que não ter a data — o aluno age em cima dela. Automatizar
valor com peso legal sem revisão humana é assumir um passivo.

**Fetch client-side (o navegador do aluno busca da SAA/SIGAA).** Morre no CORS (sites
`.gov`/institucionais não liberam a origem do app) e acoplaria a disponibilidade da
nossa página à do SIGAA. Inviável.

## 5. O caminho "sem código": CMS git-based (fast-follow)

Decisão tomada: o app terá uma camada de **edição sem código para todo o conteúdo**,
como tarefa **separada e posterior** à implementação das 3 páginas.

Como funciona: um CMS git-based (ex.: **Decap CMS** ou **Pages CMS**) adiciona uma
página `/admin` com formulários. Quem mantém faz login com a conta do GitHub, edita os
campos, salva — isso vira um commit no repositório e o Vercel rebuilda. **Ninguém vê
Git, código ou arquivos `.ts`.** O conteúdo continua versionado e auditável.

| Opção | Prós | Contra |
|---|---|---|
| **Pages CMS** (recomendado p/ avaliar 1º) | Hospedado, autentica via GitHub, tende a ser o menor setup | Revalidar capacidade/limites na hora |
| **Decap CMS** | Maduro (~18k stars), MIT, muito flexível | Fora da Netlify, exige um pequeno backend OAuth (uma function) — fere o "zero backend" |

Custo honesto: ambos exigem mapear um *schema* de cada coleção de conteúdo
(`calendario`, `calouro`, `fluxo`, `faq`, `jornada`, `links`). É trabalho de
configuração, não de automação mágica.

## 6. Ligação com o roadmap

Isto reforça a **Fase 5 (governança)** do [../ROADMAP.md](../ROADMAP.md): o calendário
passa a ser o item mais crítico do "Modelo de Revisão Semestral". A camada de CMS é o
que torna a Fase 5 sustentável de fato — porque transfere a manutenção para um leigo
treinado, sem depender da equipe original nem de scraping frágil.

## 7. Resumo de uma linha

Linkar o que a instituição já mantém (manual), transcrever o que quase nunca muda
(fluxo) e dar um formulário sem código para o que muda sempre (calendário) —
evitando scraping de PDF e automação de datas com peso legal.
