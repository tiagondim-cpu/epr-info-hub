import type { JornadaFase } from './types'

export const jornadaFases: JornadaFase[] = [
  {
    id: 'inicio',
    titulo: 'Inicio do Curso',
    subtitulo: 'Calouros e primeiros semestres',
    semestres: '1° ao 3° semestre',
    temas: ['Matrícula', 'Módulo Livre', 'Estrutura do Curso'],
    conteudo: [
      {
        titulo: 'Estrutura do Curso de EPR',
        descricao:
          'O curso de Engenharia de Produção da UnB é noturno, com duração normal de 12 semestres e carga horária total de 3.600 horas (240 créditos). Turmas de 50 novos alunos por semestre.',
        detalhes: [
          '165 créditos: disciplinas obrigatórias',
          'Até 24 créditos: módulo livre (qualquer disciplina da UnB)',
          'Restante: disciplinas optativas',
          'Componentes obrigatórios além das disciplinas: Estágio Supervisionado, Projeto de Graduação 1 e 2, Atividades Complementares e PSPs',
        ],
      },
      {
        titulo: 'O que é o Módulo Livre?',
        descricao:
          'Créditos cursados em qualquer disciplina da UnB, de qualquer departamento. Você pode explorar áreas fora do EPR — Computação, Administração, Psicologia, etc.',
        badges: [{ texto: 'Até 24 créditos', tipo: 'info' }],
        detalhes: [
          'Conta como créditos optativos no currículo',
          'Acesso sujeito a vaga na disciplina desejada',
          'Matrícula via SIGAA normalmente',
        ],
      },
      {
        titulo: 'Metodologia PBL',
        descricao:
          'O curso adota PBL (Project Based Learning — Aprendizagem Baseada em Projetos). As disciplinas PSP (Projetos de Sistemas de Produção) são eixos integradores semestrais onde os conhecimentos teóricos são aplicados em problemas reais.',
      },
    ],
  },
  {
    id: 'durante',
    titulo: 'Durante o Curso',
    subtitulo: 'Gestão acadêmica do dia a dia',
    semestres: '3° ao 9° semestre',
    temas: ['IRA', 'Trancamento', 'Desempenho'],
    conteudo: [
      {
        titulo: 'IRA — Índice de Rendimento Acadêmico',
        descricao:
          'O IRA mede seu desempenho acadêmico com base nas menções das disciplinas cursadas. É calculado automaticamente pelo SIGAA.',
        badges: [{ texto: 'Consultar no SIGAA', tipo: 'info' }],
        detalhes: [
          'Como consultar: SIGAA → Portal Discente → Histórico',
          'Reprovações (menções abaixo de MM) impactam negativamente',
          'Menções SR (Sem Rendimento por abandono) impactam negativamente',
          'Trancamentos automáticos e justificados NÃO afetam o IRA',
          'IRA baixo persistente pode levar a fase probatória ou desligamento',
        ],
      },
      {
        titulo: 'Trancamento Automático de Disciplina',
        descricao:
          'Tranque uma disciplina sem justificativa, sem impacto no IRA, diretamente pelo SIGAA.',
        badges: [
          { texto: 'Prazo: até 25% do semestre', tipo: 'alerta' },
          { texto: 'Sem impacto no IRA', tipo: 'ok' },
        ],
        detalhes: [
          'Como solicitar: SIGAA → Portal Discente → Trancamento de Matrícula',
          'Após 25% do semestre, é necessário trancamento justificado via SEI',
        ],
      },
      {
        titulo: 'Trancamento de Disciplina Justificado (TJ)',
        descricao:
          'Para trancar uma disciplina após 25% do semestre, com motivo comprovado. Sem impacto no IRA quando deferido.',
        badges: [
          { texto: 'Prazo: até 50% do semestre', tipo: 'aviso' },
          { texto: 'Via SEI', tipo: 'info' },
        ],
        detalhes: [
          'Solicitação via Peticionamento Eletrônico no SEI',
          'Motivos aceitos: saúde (com laudo), choque de horário comprovado',
          'Processo deve ser classificado como restrito ou sigiloso',
        ],
        links: [{ texto: 'Peticionamento SEI', url: 'https://sei.unb.br' }],
      },
      {
        titulo: 'Trancamento Geral de Matrícula (TGM)',
        descricao:
          'Trancamento de TODAS as disciplinas do semestre, sem justificativa, com limite de 2 semestres na vida acadêmica.',
        badges: [
          { texto: 'Prazo: até 75% do semestre', tipo: 'aviso' },
          { texto: 'Máximo: 2 semestres', tipo: 'alerta' },
          { texto: 'Sem impacto no IRA', tipo: 'ok' },
        ],
        detalhes: [
          'Como solicitar: SIGAA → Portal Discente',
          'Consecutivos ou alternados, total máximo de 2 semestres',
        ],
      },
      {
        titulo: 'Trancamento Geral Justificado (TGMJ)',
        descricao:
          'Para situações excepcionais que impedem o acompanhamento do semestre inteiro. Pode ser solicitado retroativamente em até 2 anos.',
        badges: [
          { texto: 'Retroativo: até 2 anos', tipo: 'aviso' },
          { texto: 'Via SEI', tipo: 'info' },
        ],
        detalhes: [
          'Solicitação via Peticionamento Eletrônico no SEI',
          'Classificar o processo como restrito ou sigiloso',
          'Motivos aceitos: saúde, óbito de familiar, estudos no exterior, choque de horário',
          'Exige comprovação documental do motivo',
        ],
        links: [{ texto: 'Peticionamento SEI', url: 'https://sei.unb.br' }],
      },
    ],
  },
  {
    id: 'meio',
    titulo: 'Meio do Curso',
    subtitulo: 'Enriquecendo o currículo',
    semestres: '5° ao 9° semestre',
    temas: ['Atividades Complementares', 'Iniciação Científica', 'Extensão'],
    conteudo: [
      {
        titulo: 'O que são Atividades Complementares',
        descricao:
          'Atividades extracurriculares obrigatórias para integralizar o curso, que enriquecem a formação do engenheiro de produção além das disciplinas regulares.',
        badges: [{ texto: 'Obrigatório para se formar', tipo: 'alerta' }],
        detalhes: [
          'Cada 60 pontos = 1 crédito optativo',
          'Máximo computável: 14 créditos (840 pontos)',
          'Processo formal: feito UMA VEZ, no penúltimo ou último semestre',
          'Guarde todos os comprovantes desde o início do curso',
        ],
        links: [
          {
            texto: 'Formulário de ACs',
            url: 'http://epr.unb.br/index.php/solicitacoes/atividades-complementares',
          },
        ],
      },
      {
        titulo: 'Atividades Aceitas',
        descricao: 'Todas devem estar relacionadas à Engenharia de Produção.',
        detalhes: [
          'Iniciação científica (com ou sem remuneração)',
          'Projetos de extensão cadastrados no DEX/UnB',
          'Participação em eventos, cursos, conferências científicas',
          'Estágios não obrigatórios (com termo de compromisso)',
          'Produção científica: artigos técnicos e científicos',
          'Tutoria de disciplinas',
          'Empresa júnior (como diretor, coordenador ou executor de projetos)',
          'Participação no centro acadêmico',
          'Grupos de estudos sob supervisão de docente da UnB',
        ],
      },
      {
        titulo: 'Como Solicitar a Avaliação',
        descricao: 'O processo é simples mas tem documentação obrigatória.',
        badges: [
          { texto: 'Fazer apenas uma vez', tipo: 'alerta' },
          { texto: 'No penúltimo ou último semestre', tipo: 'aviso' },
        ],
        detalhes: [
          '1. Preencha o Formulário de Solicitação de Avaliação de ACs',
          '2. Anexe o Histórico Escolar atualizado (obrigatório)',
          '3. Anexe comprovantes de cada atividade',
          '4. Envie por e-mail para a coordenação/secretaria do EPR (epr@unb.br)',
          'Recurso possível: solicitação de revisão do resultado',
        ],
      },
    ],
  },
  {
    id: 'final',
    titulo: 'Final do Curso',
    subtitulo: 'Encerramento da graduação',
    semestres: '10° ao 12° semestre',
    temas: ['Estágio Obrigatório', 'Projeto de Graduação', 'Formatura'],
    conteudo: [
      {
        titulo: 'Estágio Supervisionado Obrigatório',
        descricao:
          'Disciplina curricular obrigatória que deve ser cursada com matrícula formal no SIGAA. O simples cadastro como estágio obrigatório no sistema NÃO é suficiente.',
        badges: [
          { texto: 'Matrícula no SIGAA obrigatória', tipo: 'alerta' },
          { texto: 'Prazo de inscrição: 25% do semestre', tipo: 'alerta' },
          { texto: '180 horas de trabalho de campo', tipo: 'info' },
        ],
        detalhes: [
          'Carga horária mínima: 180 horas de trabalho de campo',
          'Quando: preferencialmente no penúltimo semestre',
          'Inscrição via Formulário específico do EPR (não pelo SIGAA)',
          'Prazo de inscrição: até 25% de realização do semestre',
          'Modalidades: vínculo estágio ou vínculo funcionário estudante',
          'Avaliação por relatórios técnicos e individualizados',
        ],
        links: [
          {
            texto: 'Formulário de Inscrição',
            url: 'http://epr.unb.br/index.php/solicitacoes/estagios',
          },
        ],
      },
      {
        titulo: 'Projeto de Graduação (PG1 e PG2)',
        descricao:
          'Trabalho de conclusão de curso em duas etapas (PG1 e PG2), com orientação de professor do EPR. Componente obrigatório.',
        detalhes: [
          'PG1: elaboração do projeto e revisão bibliográfica',
          'PG2: desenvolvimento, execução e defesa',
          'Necessário selecionar orientador com antecedência',
        ],
      },
    ],
  },
  {
    id: 'risco',
    titulo: 'Situações de Risco',
    subtitulo: 'Como agir em situações críticas',
    semestres: 'Qualquer semestre',
    temas: ['Desligamento', 'Prorrogação', 'Fase Probatória', 'Reintegração'],
    conteudo: [
      {
        titulo: 'Causas de Desligamento',
        descricao: 'Você pode ser desligado da UnB por diferentes motivos. Conheça todos para evitá-los.',
        badges: [{ texto: 'Atenção máxima', tipo: 'alerta' }],
        detalhes: [
          'Reprovar 3 vezes a mesma disciplina OBRIGATÓRIA',
          'Não ser aprovado em ao menos 4 disciplinas em 2 semestres consecutivos',
          'Não efetivar matrícula em disciplinas por 2 semestres consecutivos',
          'Estar matriculado mas não cursar nenhuma disciplina por 2 semestres',
          'Esgotamento do prazo máximo de permanência (jubilamento)',
          'A pedido do próprio estudante (voluntário)',
          'Infração disciplinar prevista no Regimento Geral da UnB',
        ],
      },
      {
        titulo: 'Fase Probatória (Condição)',
        descricao:
          'Antes de ser desligado, o aluno em risco pode ser submetido a plano de estudos com orientador acadêmico aprovado pelo colegiado.',
        detalhes: [
          'Plano de estudos personalizado com orientador',
          'Aprovado pelo colegiado e encaminhado à SAA',
          'Não cumprimento das condições = desligamento',
          'Procure a coordenação do EPR imediatamente ao perceber o risco',
        ],
      },
      {
        titulo: 'Prorrogação de Prazo de Conclusão',
        descricao:
          'Se você está próximo de atingir o prazo máximo de integralização, solicite prorrogação antes de ser jubilado.',
        badges: [
          { texto: 'Solicitar com 90 dias de antecedência', tipo: 'alerta' },
          { texto: 'Até 2 semestres extras pelo colegiado', tipo: 'aviso' },
        ],
        detalhes: [
          'Prazo normal do curso: 12 semestres',
          'Solicitação via Peticionamento Eletrônico no SEI',
          'Exige: justificativa + cronograma de conclusão viável',
          'Até 2 semestres extras: deliberação pelo colegiado do curso',
          '3 ou mais semestres extras: processo vai à CEG (Câmara de Ensino de Graduação)',
          'Após jubilamento, o processo passa a ser de reintegração (mais complexo)',
        ],
        links: [{ texto: 'Peticionamento SEI', url: 'https://sei.unb.br' }],
      },
      {
        titulo: 'Reintegração Após Desligamento',
        descricao:
          'Se você foi desligado, ainda é possível solicitar reintegração via SEI, conforme a Resolução CEG Nº 001/2023.',
        detalhes: [
          'Solicitação via Peticionamento Eletrônico no SEI',
          'Processo analisado pelo colegiado do curso',
          'Resultado comunicado em até 10 dias corridos',
          'Verificar disponibilidade de vaga no curso',
          'Vedação: 2 anos para desligamento disciplinar',
        ],
        links: [{ texto: 'Peticionamento SEI', url: 'https://sei.unb.br' }],
      },
    ],
  },
]
