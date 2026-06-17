# Handoff — EPR Info Hub

Guia curto para quem assume a manutenção do EPR Info Hub depois da disciplina PSP4.
Objetivo: garantir que o conteúdo continue **correto e atualizado sem depender de
quem programou** o projeto.

## 1. O essencial

| Item | Valor |
| ---- | ----- |
| **Produção** | <https://epr-info-hub.vercel.app/> |
| **Repositório** | <https://github.com/tiagondim-cpu/epr-info-hub> |
| **Hospedagem** | Vercel (deploy automático a cada push em `main`) |
| **Custo** | Zero (SPA estática, sem backend/banco) |

## 2. Onde fica cada coisa

Todo o **conteúdo** é texto em `src/content/*.ts` (não precisa programar para editar):

| Arquivo | Página | Conteúdo |
| ------- | ------ | -------- |
| `calouro.ts` | Primeiros Passos | passos do calouro, FAQ e contatos do EPR |
| `calendario.ts` | Calendário Acadêmico | datas do semestre (fonte: SAA) |
| `fluxo.ts` | Fluxo do Curso | grade por semestre (fonte: PPP/SIGAA) |
| `jornada.ts` | Jornada do Estudante | conteúdo por fase do curso |
| `procedimentos.ts` | Procedimentos | guias passo a passo |
| `faq.ts` | FAQ | perguntas frequentes |
| `temas.ts` | Home | cards de acesso rápido |
| `links.ts` | Links | links e contatos oficiais |
| `meta.ts` | (todas) | data de "última atualização" por área |

A aparência (páginas) fica em `src/pages/`; componentes em `src/components/`. Em geral
**não é preciso mexer nesses arquivos** para manter o conteúdo.

## 3. Como rodar e publicar

```bash
npm ci          # instala dependências (Node 24+)
npm run dev     # http://localhost:5173
npm run build   # gera o build de produção
npm run lint    # verifica o código
```

**Publicar:** edite o arquivo de conteúdo → faça commit (pelo GitHub, botão ✏️, ou
local) → o Vercel publica em ~1 minuto. Mudanças em `main` vão direto para produção;
mudanças em outra branch geram uma **URL de preview** para revisar antes.

## 4. Governança — quem mantém o quê

- **Coordenação / secretaria do EPR**: responsável pelo conteúdo acadêmico
  (calendário, fluxo, procedimentos) e por validar as informações.
- **Mantenedor técnico (estudante ou bolsista designado)**: aplica as edições no
  repositório, revisa PRs e cuida do deploy.
- **Regra de ouro**: o app **cura e linka** as fontes oficiais (SAA, SIGAA, DEG, SEI);
  não substitui nem duplica conteúdo institucional. Em caso de dúvida, prevalece a
  fonte oficial.

## 5. Checklist de revisão semestral

A cada início de semestre (ou quando a SAA publicar novo calendário):

- [ ] **Calendário** — atualizar `src/content/calendario.ts` com as datas do novo
      semestre, conferindo em <https://saa.unb.br/calendario-academico/>. Ajustar
      também `semestreVigente`.
- [ ] **Fluxo** — conferir a estrutura curricular vigente (6017/3) no SIGAA e ajustar
      `src/content/fluxo.ts` se houver mudança.
- [ ] **Contatos** — confirmar e-mail/telefone da secretaria em `src/content/calouro.ts`
      (página de contato: <http://epr.unb.br/index.php/contato>).
- [ ] **Selo de data** — atualizar as áreas revisadas em `src/content/meta.ts`.
- [ ] **Links** — o workflow `links.yml` roda semanalmente e abre uma issue se algum
      link quebrar; resolver as issues abertas.
- [ ] **Verificar publicação** — abrir <https://epr-info-hub.vercel.app/> e conferir.

## 6. CI/CD (automático)

- [`.github/workflows/ci.yml`](../.github/workflows/ci.yml) — roda `lint` + `build` a
  cada push/PR para `main`.
- [`.github/workflows/links.yml`](../.github/workflows/links.yml) — valida links
  externos semanalmente e abre issue em caso de link quebrado.

## 7. Pendências e notas de dado oficial

- **Calendário 2026/1**: transcrito do PDF oficial da SAA (publicado em 27/02/2026). ✅
- **E-mail da secretaria**: `epr@unb.br` confirmado correto (jun/2026). Telefone:
  (61) 3107-5678. ✅
- **Fluxo (matriz atual)**: transcrito da grade do PPP do curso — corresponde ao
  currículo 2021, válido para quem já está no curso. Mantido como está. ✅
- **Novo currículo 617/3 (2026.2)**: a coordenação apresentou (jun/2026) um novo
  currículo que entra em 2026.2 — 10 semestres (5 anos), eixo de ciência de dados e
  disciplinas extensionistas. A página Fluxo exibe um aviso sobre isso, mas **a grade
  completa do novo currículo ainda não foi transcrita** (não há documento público com
  a lista por período/créditos). Quando a coordenação publicar a matriz 617/3, criar a
  grade nova em `src/content/fluxo.ts` (ou uma seção separada). ⚠️
