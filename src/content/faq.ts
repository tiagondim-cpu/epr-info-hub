import type { FaqItem } from './types'

export const faqItems: FaqItem[] = [
  {
    pergunta: 'Posso fazer estágio obrigatório sem me matricular na disciplina no SIGAA?',
    resposta:
      'Não. A matrícula na disciplina de Estágio Supervisionado é obrigatória no SIGAA. O simples cadastro como "estágio obrigatório" no sistema NÃO é suficiente para validação — você também precisa preencher o Formulário específico do EPR disponível no site epr.unb.br a cada semestre.',
    tags: ['estágio', 'sigaa', 'matrícula', 'obrigatório'],
  },
  {
    pergunta: 'Quando devo iniciar o processo de Atividades Complementares?',
    resposta:
      'O processo formal de avaliação deve ser iniciado no penúltimo ou último semestre do curso, e só pode ser feito uma única vez. Porém, você deve realizar e registrar as atividades ao longo de todo o curso para não acumular tudo no final. Não esqueça de guardar os comprovantes desde o início.',
    tags: ['atividades complementares', 'prazo', 'formatura'],
  },
  {
    pergunta: 'O trancamento justificado prejudica meu IRA?',
    resposta:
      'Não. Nenhuma modalidade de trancamento — automático ou justificado — impacta o IRA. O que prejudica o IRA são as reprovações (menções abaixo de MM) e as menções SR (Sem Rendimento por abandono sem trancamento formal).',
    tags: ['trancamento', 'IRA', 'rendimento', 'justificado'],
  },
  {
    pergunta: 'Posso solicitar trancamento justificado retroativamente?',
    resposta:
      'Sim. O Trancamento Geral de Matrícula Justificado (TGMJ) pode ser solicitado em até 2 anos após o prazo original do semestre, desde que o motivo impeditivo seja comprovado. A solicitação é feita via Peticionamento Eletrônico no SEI (sei.unb.br).',
    tags: ['trancamento', 'retroativo', 'SEI', 'justificado', 'TGMJ'],
  },
  {
    pergunta: 'Fui desligado. Posso voltar ao curso?',
    resposta:
      'Sim, desde que atenda aos critérios da Resolução CEG Nº 001/2023. A reintegração é solicitada via Peticionamento Eletrônico no SEI. O processo é analisado pelo colegiado do curso e o resultado é comunicado em até 10 dias corridos. Atenção: em caso de desligamento disciplinar, há vedação de 2 anos para reingresso.',
    tags: ['desligamento', 'reintegração', 'SEI', 'CEG', 'resolução'],
  },
  {
    pergunta: 'Quando devo solicitar prorrogação de prazo de conclusão?',
    resposta:
      'Com no mínimo 90 dias de antecedência em relação ao prazo máximo de integralização do curso. Não espere ser jubilado — após o jubilamento o processo é de reintegração, que é mais complexo. Solicite antes, via SEI, com justificativa e cronograma de conclusão viável.',
    tags: ['prorrogação', 'prazo', 'jubilamento', 'SEI'],
  },
  {
    pergunta: 'Qual o prazo para fazer o trancamento automático de uma disciplina?',
    resposta:
      'Até 25% do semestre letivo, diretamente no SIGAA (Portal Discente → Trancamento de Matrícula). Após esse prazo, é necessário solicitar o Trancamento de Disciplina Justificado (TJ) via Peticionamento Eletrônico no SEI, com motivo comprovado.',
    tags: ['trancamento', 'automático', 'prazo', '25%', 'SIGAA'],
  },
  {
    pergunta: 'Onde encontro o formulário de inscrição no estágio obrigatório?',
    resposta:
      'No site do EPR (epr.unb.br) a cada semestre, na seção de Solicitações > Estágios. O prazo é até 25% de realização do semestre. Inscrições por outros meios ou fora do prazo não são consideradas.',
    tags: ['estágio', 'formulário', 'inscrição', 'prazo'],
  },
  {
    pergunta: 'O que é o módulo livre e como funciona?',
    resposta:
      'O módulo livre são os créditos cursados em qualquer disciplina da UnB, independente do departamento. No EPR, o currículo prevê até 24 créditos de módulo livre. Você pode usá-los para cursar disciplinas de outros cursos que tenha interesse, desde que aprovado em processo seletivo da turma (quando aplicável).',
    tags: ['módulo livre', 'créditos', 'currículo', 'disciplinas'],
  },
  {
    pergunta: 'Quantos semestres posso trancar sem justificativa?',
    resposta:
      'Você pode fazer o Trancamento Geral de Matrícula (TGM) automático até 2 semestres, consecutivos ou não, até 75% do semestre vigente. Depois disso, só com justificativa via SEI (TGMJ), limitado também a 2 semestres letivos.',
    tags: ['trancamento', 'TGM', 'semestres', 'limite'],
  },
  {
    pergunta: 'O que acontece se eu reprovar 3 vezes na mesma disciplina obrigatória?',
    resposta:
      'Você está sujeito a desligamento por rendimento acadêmico. Antes disso, pode ser submetido a uma fase probatória com plano de estudos orientado. Procure a coordenação do EPR assim que perceber esse risco para tomar providências antes de atingir o terceiro limite.',
    tags: ['reprovação', 'desligamento', 'rendimento', 'fase probatória'],
  },
  {
    pergunta: 'Como funciona a pontuação das Atividades Complementares?',
    resposta:
      'Cada 60 pontos equivalem a 1 crédito, computado como crédito optativo. O máximo computável é 14 créditos (840 pontos). Tipos aceitos incluem: iniciação científica, extensão, empresa júnior, eventos, tutoria, artigos científicos, estágios não obrigatórios, centro acadêmico — desde que relacionados à Engenharia de Produção.',
    tags: ['atividades complementares', 'pontos', 'créditos', 'pontuação'],
  },
]
