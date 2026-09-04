export const TABS = ["Inadimplência", "Cultura", "Resultado"];

export const INITIAL_FINANCIAL_DATA = {
  overdueThisMonth: "10000",
  unpaidThisMonth: "2000",
  totalCustomers: "1000",
  inactiveDebtors: "300",
  activeDebtors: "150",
  averageDebt: "1200",
};

export const INITIAL_LEAD = {
  nome: "",
  email: "",
  whatsapp: "",
  empresa: "",
  conteudos: true,
  form_proibido: "",
};

export const QUIZ_OPTIONS = [
  { value: 0, label: "Nunca" },
  { value: 1, label: "Às vezes" },
  { value: 2, label: "Com frequência" },
];

export const QUESTIONS = [
  {
    text: "Quando um cliente atrasa, ele nem sempre sabe com quem falar ou o que vai acontecer.",
    recommendation: "Defina um canal e um responsável claros para quem atrasa.",
  },
  {
    text: "Não enviamos lembrete antes do vencimento nem contato nos primeiros dias de atraso.",
    recommendation:
      "Crie lembrete antes do vencimento e contato nos primeiros dias.",
  },
  {
    text: "Deixamos de cobrar os juros e a multa previstos no contrato.",
    recommendation: "Cobre os juros e a multa do contrato, sempre.",
  },
  {
    text: "Damos desconto para quem atrasa, mas não temos benefício para quem paga em dia.",
    recommendation: "Reconheça o bom pagador. Não recompense o atraso.",
  },
  {
    text: "O dono ou a diretoria abre descontos e exceções direto com o cliente, fora do financeiro.",
    recommendation: "Exceções passam pelo financeiro, com critério escrito.",
  },
  {
    text: "Fechamos acordos “de boca”, sem registro nem assinatura.",
    recommendation: "Todo acordo com registro e assinatura.",
  },
  {
    text: "Mantemos clientes meses sem pagar só para não perder o contrato.",
    recommendation: "Defina até quando insistir antes de encaminhar.",
  },
  {
    text: "Prorrogamos prazos ou mudamos as regras caso a caso.",
    recommendation: "Aplique o contrato igual para todos.",
  },
  {
    text: "Não temos uma régua de cobrança escrita. Agimos no improviso.",
    recommendation: "Escreva a sua régua de cobrança.",
  },
  {
    text: "As regras de pagamento não ficam claras para o cliente já no fechamento do contrato.",
    recommendation: "Deixe as regras claras desde o fechamento do contrato.",
  },
];

// Configure the same endpoint used by the e-book form when it is available.
export const FORM_ENDPOINT = "https://agenda.clevercobranca.com.br/diagnostico";
