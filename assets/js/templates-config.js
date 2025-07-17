const templates = {
  "projeto-criado": {
    title: "Projeto Criado",
    file: "templates/template-projeto-criado.html",
    description:
      "Este template é usado quando um novo projeto é criado e cadastrado no sistema.",
    status: "PROJETO CRIADO",
  },
  ideacao: {
    title: "Ideação",
    file: "templates/template-ideacao.html",
    description:
      "Este template é usado quando um projeto está na fase inicial de concepção e definição de escopo.",
    status: "IDEAÇÃO",
  },
  analise: {
    title: "Análise Técnica",
    file: "templates/template-analise-tecnica.html",
    description:
      "Notificação para quando o projeto está em análise de viabilidade técnica e de negócios.",
    status: "ANÁLISE TÉCNICA",
  },
  backlog: {
    title: "Backlog Priorizado",
    file: "templates/template-backlog-priorizado.html",
    description:
      "Template para projetos aprovados e priorizados, aguardando início do desenvolvimento.",
    status: "BACKLOG PRIORIZADO",
  },
  desenvolvimento: {
    title: "Em Desenvolvimento",
    file: "templates/template-desenvolvimento.html",
    description:
      "Notificação para quando o projeto está em desenvolvimento ativo pela equipe.",
    status: "EM DESENVOLVIMENTO",
  },
  homologacao: {
    title: "Em Homologação",
    file: "templates/template-homologacao.html",
    description:
      "Template para a fase de testes e validação do projeto implementado.",
    status: "EM HOMOLOGAÇÃO",
  },
  operacao: {
    title: "Operação Assistida",
    file: "templates/template-operacao-assistida.html",
    description:
      "Notificação para quando o projeto está em produção com suporte assistido.",
    status: "OPERAÇÃO ASSISTIDA",
  },
  entregue: {
    title: "Entregue",
    file: "templates/template-entregue.html",
    description:
      "Template de celebração para quando o projeto é concluído com sucesso.",
    status: "ENTREGUE",
  },
  cancelado: {
    title: "Cancelado",
    file: "templates/template-cancelado.html",
    description:
      "Template para informar sobre o cancelamento do projeto e próximos passos.",
    status: "CANCELADO",
  },
  bloqueado: {
    title: "Bloqueado",
    file: "templates/template-bloqueado.html",
    description:
      "Template para notificar sobre impedimentos que bloqueiam o projeto.",
    status: "BLOQUEADO",
  },
};

export default templates;
