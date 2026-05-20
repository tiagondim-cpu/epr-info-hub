# EPR Info Hub — Missão, Visão e Escopo do Produto

## Nome e Tagline

**EPR Info Hub**
*Tudo que você precisa saber sobre seu curso, num só lugar.*

---

## O Problema

O Departamento de Engenharia de Produção (EPR) da Universidade de Brasília tem aproximadamente **600 alunos ativos**. A cada semestre, dezenas deles enfrentam consequências graves — queda no IRA, fase probatória ou até **desligamento** — não por incapacidade acadêmica, mas por **desconhecimento de normas institucionais básicas**.

As informações existem, mas estão dispersas:

| Canal | Problema |
|---|---|
| Site epr.unb.br | Navegação fragmentada, difícil de encontrar no celular |
| SIGAA | Interface complexa — SUS de 59,78/100 (nota D) segundo pesquisa UnB 2025 |
| E-mails institucionais | Informação volátil, não indexável, inacessível retrospectivamente |
| Grupos de WhatsApp | Informação informal, sujeita a erros e desatualização |
| Regulamentações em PDF | Linguagem técnica, não traduzida para a realidade do estudante |

Resultado: a coordenação e secretaria do EPR são sobrecarregadas com **dúvidas repetitivas** que poderiam ser auto-solucionadas com informação centralizada e clara.

### Evidência acadêmica

> Pesquisa sobre usabilidade do SEI (sistema oficial de peticionamento da UnB) identificou **99 problemas de usabilidade** via avaliação heurística. A pontuação SUS de 59,78 fica abaixo da média de referência (68). O sistema existe, mas a informação não chega ao usuário de forma eficaz.
>
> — RESENDE JÚNIOR, Sinval Ferreira. *Usabilidade do Sistema Eletrônico de Informações (SEI): uma proposta de melhoria.* Dissertação, UnB, 2025.

> A adoção bem-sucedida do SEI na UnB demonstrou que soluções tecnológicas bem introduzidas têm alta aceitação (91% de satisfação após 3 meses). Contudo, mudanças de gestão causaram descontinuidade: ausência de equipe responsável e falta de orientações adequadas fizeram o sistema existir sem cumprir seu propósito informativo.
>
> — MAXIMIANO, Júlia Soier. *Aceitação de tecnologia como fomento à inovação.* Dissertação, UnB, 2020.

**Implicação direta:** o EPR Info Hub preenche o gap que o SEI, o SIGAA e o site do EPR não conseguem cobrir — ser o **guia de vida acadêmica** do estudante de Engenharia de Produção.

---

## Missão

**Empoderar estudantes do EPR/UnB com informação acadêmica clara, confiável e acessível, eliminando o risco de desligamento ou prejuízo acadêmico por desinformação.**

---

## Visão de Longo Prazo

Tornar-se a referência de informação acadêmica não apenas para o EPR, mas um modelo replicável para outros departamentos da UnB e universidades federais — provando que uma SPA estática, mantida pela coordenação, pode reduzir significativamente a carga de atendimento da secretaria e o índice de desligamento por desinformação.

**Horizonte 2027:** o EPR Info Hub é mencionado no PPP (Projeto Político-Pedagógico) do curso como ferramenta oficial de orientação estudantil.

---

## Público-Alvo (Personas)

### Persona 1 — O Calouro Desorientado
- **Perfil**: 1º ou 2º semestre, recém-chegado ao EPR noturno
- **Contexto**: trabalha durante o dia, estuda à noite, acessa tudo pelo celular
- **Dor**: não sabe o que é módulo livre, não entende o SIGAA, tem medo de reprovar
- **Necessidade**: visão geral do curso, vocabulário básico, o que fazer no primeiro semestre

### Persona 2 — O Aluno em Risco
- **Perfil**: 5º–8º semestre, com histórico de reprovações ou IRA baixo
- **Contexto**: está em condição (fase probatória) ou perto disso, sem saber exatamente o que isso significa
- **Dor**: não entende as consequências do desligamento, não sabe quais opções tem
- **Necessidade**: o que é fase probatória, como solicitar trancamento justificado, como pedir prorrogação

### Persona 3 — O Formando Prestes ao Estágio
- **Perfil**: 9º–12º semestre, encerrando o curso
- **Contexto**: precisa conciliar estágio obrigatório, PG1/PG2 e atividades complementares
- **Dor**: não sabe quando e como solicitar estágio obrigatório, tem medo de perder o prazo das ACs
- **Necessidade**: passo a passo claro de inscrição, prazo, formulários e o que acontece se errar

---

## Princípios de Design

Baseados nas heurísticas de Nielsen aplicadas ao contexto UnB (Sinval, 2025):

### 1. Linguagem do Estudante, Não da Burocracia
Usar termos que o aluno usa ("trancar a matéria", "perder o prazo"), não a linguagem dos regulamentos ("trancamento de matrícula por motivo superveniente"). Traduzir sempre.

### 2. Uma Ação por Tela
Cada página tem uma função principal. O usuário nunca se perde entre múltiplas tarefas concorrentes. Inspirado no diagnóstico de sobrecarga de informação do SEI.

### 3. Visibilidade de Status e Prazos
Badges de alerta visuais para prazos críticos (ex: "Prazo até 25% do semestre"). O usuário sempre sabe em que momento do semestre uma ação precisa acontecer.

### 4. Mobile-First Sem Concessões
Mais de 70% dos estudantes universitários acessam informações pelo celular. Todo componente é projetado primeiro para tela pequena, depois adaptado para desktop.

### 5. Custo Zero, Sustentabilidade Real
A tecnologia deve ser gratuita em todos os pontos — hospedagem, banco de dados, domínio opcional. Não pode criar dependência de serviços pagos após o PSP4.

### 6. Governança Embutida
A solução técnica sem responsável humano falha — como demonstrado empiricamente pela descontinuidade do SEI (Maximiano, 2020). O app inclui documentação de atualização e um modelo de revisão semestral desde o início.

### 7. Design Minimalista e Disruptivo
Contra o padrão engessado de sites universitários brasileiros. Visual limpo, hierarquia tipográfica clara, uso das cores institucionais da UnB (Azul #003366 e Verde #006633) de forma moderna e funcional.

---

## Escopo do MVP

**Está dentro do escopo:**
- Informações sobre os 7 temas críticos: estágio, ACs, trancamento, prorrogação, desligamento, IRA, canais oficiais
- FAQ com as perguntas mais frequentes
- Guia passo a passo dos procedimentos no SEI/SIGAA
- Central de links validados para formulários e sistemas oficiais
- Busca rápida por palavras-chave
- Organização por jornada do estudante (fase do curso)

**Está fora do escopo do MVP:**
- Autenticação ou área logada
- Integração com SIGAA ou SEI
- Notificações automáticas de prazo
- Chat ou assistente virtual
- Conteúdo colaborativo dos alunos

---

## Indicadores de Sucesso

| Indicador | Meta | Como medir |
|---|---|---|
| Pontuação SUS do app | >= 75 (nota B/C+) | Questionário SUS aplicado a alunos EPR |
| Redução de dúvidas repetitivas na secretaria | -30% | Autoavaliação da coordenação após 1 semestre |
| Cobertura de temas críticos no MVP | 100% dos 7 temas | Checklist de conteúdo |
| Acessibilidade mobile | 100% das rotas funcionais no celular | Teste manual em 3 dispositivos distintos |
| Deploy em produção | URL pública antes da apresentação ao Prof. Marcelo | GitHub Actions / Vercel |

---

## Equipe

| Nome | Matrícula | Papel |
|---|---|---|
| Tiago Andre Gondim | 231013476 | Desenvolvimento do app |
| Rafael Leivas Bisi | 231013467 | Colaboração |
| João Pedro Carvalho | 231013402 | Colaboração |
| Juliano Teles Abrahão | 231013411 | Colaboração |

**Orientador:** Prof. Dr. Marcelo Carneiro Gonçalves — Disciplina PSP4, UnB/EPR

---

## Referências Acadêmicas

1. RESENDE JÚNIOR, Sinval Ferreira. *Usabilidade do Sistema Eletrônico de Informações (SEI): uma proposta de melhoria.* Dissertação (Mestrado Profissional em Computação Aplicada) — Universidade de Brasília, 2025.

2. MAXIMIANO, Júlia Soier. *Aceitação de tecnologia como fomento à inovação: um estudo sobre a adoção do Sistema Eletrônico de Informações na Universidade de Brasília.* Dissertação (Mestrado em Gestão Pública) — Universidade de Brasília, 2020.

3. NIELSEN, Jakob. *10 Usability Heuristics for User Interface Design.* Nielsen Norman Group, 1994. Disponível em: https://www.nngroup.com/articles/ten-usability-heuristics/

4. Universidade de Brasília. *Manual de Identidade Visual.* Secretaria de Comunicação da UnB, 1ª edição.
