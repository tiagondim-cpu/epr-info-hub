import type { Procedimento } from './types'

export const procedimentos: Procedimento[] = [
  {
    id: 'trancamento-sei',
    titulo: 'Como solicitar trancamento justificado no SEI',
    descricao:
      'Guia passo a passo para solicitar qualquer modalidade de trancamento justificado (TJ, TGMJ) via Peticionamento Eletrônico no Sistema Eletrônico de Informações (SEI) da UnB.',
    passos: [
      {
        numero: 1,
        titulo: 'Acesse o SEI',
        descricao:
          'Acesse https://sei.unb.br e faça login com seu usuário institucional (CPF) e senha.',
      },
      {
        numero: 2,
        titulo: 'Inicie um novo peticionamento',
        descricao:
          'No menu lateral esquerdo, clique em "Peticionamento Eletrônico" e selecione "Processo Novo".',
      },
      {
        numero: 3,
        titulo: 'Selecione o tipo de processo',
        descricao:
          'Na busca de tipo de processo, selecione: Graduação na UnB → Trancamento Justificado (ou TGMJ para trancamento geral).',
      },
      {
        numero: 4,
        titulo: 'Preencha o formulário',
        descricao:
          'Preencha o formulário com seus dados, o semestre de referência e descreva o motivo do trancamento de forma clara e objetiva.',
      },
      {
        numero: 5,
        titulo: 'Classifique como restrito ou sigiloso',
        descricao:
          'Antes de finalizar, marque o processo como RESTRITO ou SIGILOSO (exigência regulamentar para todos os processos de trancamento).',
      },
      {
        numero: 6,
        titulo: 'Anexe os comprovantes',
        descricao:
          'Anexe os documentos que comprovam o motivo: laudo médico com CID, certidão de óbito, comprovante de bolsa de estudos no exterior, ou declaração de choque de horário.',
      },
      {
        numero: 7,
        titulo: 'Assine digitalmente e envie',
        descricao:
          'Assine digitalmente o documento principal e clique em "Peticionar" para enviar o processo para análise.',
      },
    ],
    observacoes: [
      'O processo pode ser acompanhado no próprio SEI após o envio',
      'Para trancamento de disciplina (TJ): prazo até 50% do semestre',
      'Para trancamento geral justificado (TGMJ): pode ser retroativo em até 2 anos',
      'Em caso de problema de saúde, o laudo pode ser analisado pela Junta Médica da FUB',
    ],
    links: [
      { texto: 'Acessar SEI/UnB', url: 'https://sei.unb.br' },
      {
        texto: 'Manual de Trancamento SAA (PDF)',
        url: 'https://saa.unb.br/images/documentos/graduacao/peticionamento/manual_trancamento_05_03_23.pdf',
      },
      {
        texto: 'Passo a Passo DDS (PDF)',
        url: 'https://dds.dac.unb.br/wp-content/uploads/2025/02/Passo-a-Passo-Trancamento-Justificado-UnB.pdf',
      },
    ],
  },
  {
    id: 'inscricao-estagio',
    titulo: 'Como se inscrever no Estágio Obrigatório',
    descricao:
      'Passo a passo para realizar a inscrição no Estágio Supervisionado Obrigatório do curso de Engenharia de Produção da UnB.',
    passos: [
      {
        numero: 1,
        titulo: 'Verifique o prazo de inscrição',
        descricao:
          'Fique atento ao início de cada semestre. O prazo de inscrição é até 25% de realização do semestre. Acompanhe o site do EPR para o link e prazo exatos.',
      },
      {
        numero: 2,
        titulo: 'Acesse o formulário no site do EPR',
        descricao:
          'Acesse http://epr.unb.br/index.php/solicitacoes/estagios/estagio-obrigatorio e localize o formulário de inscrição do semestre atual. Não use outros meios de inscrição.',
      },
      {
        numero: 3,
        titulo: 'Escolha a modalidade',
        descricao:
          'Selecione a modalidade adequada: Vínculo Estágio (você terá um contrato formal de estágio com a empresa) ou Vínculo Funcionário Estudante (você já é funcionário da organização onde realizará o estágio).',
      },
      {
        numero: 4,
        titulo: 'Preencha e envie o formulário',
        descricao:
          'Preencha todos os campos obrigatórios com os dados da empresa/organização e do supervisor. Submeta o formulário dentro do prazo.',
      },
      {
        numero: 5,
        titulo: 'Matricule-se na disciplina no SIGAA',
        descricao:
          'ATENÇÃO: além do formulário do EPR, você DEVE se matricular formalmente na disciplina de Estágio Supervisionado no SIGAA. A matrícula na disciplina e o formulário são obrigatórios e independentes.',
      },
      {
        numero: 6,
        titulo: 'Acompanhe o semestre',
        descricao:
          'O desempenho é avaliado por relatórios técnicos e individualizados ao longo das 180 horas de trabalho de campo. Cumpra os prazos de entrega dos relatórios.',
      },
    ],
    observacoes: [
      'Inscrições fora do prazo ou por outros meios NÃO são consideradas',
      'O formulário muda a cada semestre — sempre acesse pelo site do EPR',
      'Dúvidas: contate a secretaria do EPR pelo e-mail epr@unb.br',
    ],
    links: [
      {
        texto: 'Formulário de Estágio (site EPR)',
        url: 'http://epr.unb.br/index.php/solicitacoes/estagios/estagio-obrigatorio',
      },
      { texto: 'SIGAA', url: 'https://sigaa.unb.br' },
    ],
  },
  {
    id: 'atividades-complementares',
    titulo: 'Como solicitar avaliação das Atividades Complementares',
    descricao:
      'Guia para o processo de avaliação das Atividades Complementares, que deve ser feito uma única vez no penúltimo ou último semestre do curso.',
    passos: [
      {
        numero: 1,
        titulo: 'Reúna todos os comprovantes',
        descricao:
          'Organize os comprovantes de todas as atividades complementares realizadas ao longo do curso: certificados, declarações, termos de compromisso, artigos publicados, etc.',
      },
      {
        numero: 2,
        titulo: 'Baixe o formulário de solicitação',
        descricao:
          'Acesse http://epr.unb.br/index.php/solicitacoes/atividades-complementares e baixe o Formulário de Solicitação de Avaliação de Atividades Complementares.',
      },
      {
        numero: 3,
        titulo: 'Preencha o formulário',
        descricao:
          'Liste cada atividade com a pontuação solicitada, conforme as tabelas do regulamento do EPR. Seja detalhado na descrição de cada atividade.',
      },
      {
        numero: 4,
        titulo: 'Obtenha seu histórico escolar atualizado',
        descricao:
          'No SIGAA, emita seu histórico escolar atualizado (Portal Discente → Histórico). É um documento OBRIGATÓRIO para o processo.',
      },
      {
        numero: 5,
        titulo: 'Envie por e-mail para o EPR',
        descricao:
          'Envie o formulário preenchido + histórico escolar + todos os comprovantes para epr@unb.br. Use um assunto claro como "Solicitação de Avaliação de ACs — [seu nome] — [matrícula]".',
      },
      {
        numero: 6,
        titulo: 'Aguarde o resultado',
        descricao:
          'A coordenação analisará e retornará com o resultado. Em caso de divergência, você pode solicitar revisão do resultado.',
      },
    ],
    observacoes: [
      'Este processo só pode ser feito UMA VEZ durante todo o curso',
      'Faça no penúltimo ou último semestre — não antes',
      'Guarde TODOS os comprovantes desde o início do curso',
      'Atividades devem estar relacionadas à Engenharia de Produção',
      'Máximo computável: 14 créditos (840 pontos)',
    ],
    links: [
      {
        texto: 'Formulário de ACs (site EPR)',
        url: 'http://epr.unb.br/index.php/solicitacoes/atividades-complementares',
      },
      { texto: 'SIGAA (histórico escolar)', url: 'https://sigaa.unb.br' },
    ],
  },
  {
    id: 'prorrogacao-prazo',
    titulo: 'Como solicitar prorrogação de prazo de conclusão',
    descricao:
      'Guia para alunos que estão próximos de atingir o prazo máximo de integralização do curso e precisam solicitar prorrogação antes de serem jubilados.',
    passos: [
      {
        numero: 1,
        titulo: 'Verifique sua situação de prazo',
        descricao:
          'No SIGAA, verifique em que semestre você está e calcule quando atingirá o prazo máximo de integralização. O curso tem duração normal de 12 semestres.',
      },
      {
        numero: 2,
        titulo: 'Solicite com antecedência mínima de 90 dias',
        descricao:
          'ATENÇÃO: a solicitação deve ser feita com NO MÍNIMO 90 dias de antecedência em relação ao prazo máximo. Não deixe para a última hora.',
      },
      {
        numero: 3,
        titulo: 'Acesse o SEI e inicie o peticionamento',
        descricao:
          'Acesse https://sei.unb.br → Peticionamento Eletrônico → Processo Novo → Graduação na UnB → Prorrogação de Prazo de Conclusão.',
      },
      {
        numero: 4,
        titulo: 'Elabore sua justificativa',
        descricao:
          'Escreva uma justificativa clara explicando os motivos que impediram a conclusão no prazo. Seja objetivo e apresente os fatos.',
      },
      {
        numero: 5,
        titulo: 'Elabore o cronograma de conclusão',
        descricao:
          'Crie um cronograma viável com as disciplinas restantes e datas estimadas de conclusão. O colegiado avaliará se o prazo solicitado é realista.',
      },
      {
        numero: 6,
        titulo: 'Envie o processo e acompanhe',
        descricao:
          'Assine e envie o processo no SEI. Acompanhe a tramitação. Até 2 semestres extras são deliberados pelo colegiado; 3 ou mais semestres vão para a CEG.',
      },
    ],
    observacoes: [
      'Solicite ANTES de atingir o prazo máximo — após o jubilamento o processo é de reintegração',
      'Até 2 semestres: aprovado pelo colegiado do EPR',
      '3 ou mais semestres: processo vai à Câmara de Ensino de Graduação (CEG)',
      'Exige justificativa clara e cronograma de conclusão viável',
    ],
    links: [
      { texto: 'Peticionamento SEI', url: 'https://sei.unb.br' },
      { texto: 'SIGAA', url: 'https://sigaa.unb.br' },
    ],
  },
]
