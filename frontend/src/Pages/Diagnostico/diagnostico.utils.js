import { QUESTIONS } from "./diagnostico.config";

const CULTURE_LEVELS = [
  { maxScore: 4, label: "Sob controle", level: "low", color: "#1f9d55" },
  { maxScore: 10, label: "Atenção", level: "medium", color: "#c9821f" },
  { maxScore: Infinity, label: "Alto risco", level: "high", color: "#b23b3b" },
];

const EMAIL_PATTERN = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export function formatMoneyInput(value) {
  if (value === null || value === undefined) {
    return "";
  }

  let sanitized = String(value).replace(/[^\d,]/g, "");

  if (!sanitized) {
    return "";
  }

  // Permite somente uma vírgula
  const parts = sanitized.split(",");

  let integerPart = parts[0];
  let decimalPart = parts[1];

  // Remove zeros desnecessários no início
  integerPart = integerPart.replace(/^0+(?=\d)/, "");

  // Formata milhares
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Se o usuário digitou vírgula, preservamos
  if (sanitized.includes(",")) {
    // Máximo de 2 casas decimais
    decimalPart = (decimalPart ?? "").slice(0, 2);

    return `${formattedInteger},${decimalPart}`;
  }

  return formattedInteger;
}

export const formatIntegerInput = (value) => {
  const digits = String(value).replace(/\D/g, "");

  if (!digits) return "";

  return new Intl.NumberFormat("pt-BR", {
    maximumFractionDigits: 0,
  }).format(Number(digits));
};

export const toNumber = (value) => {
  if (value === null || value === undefined || value === "") {
    return 0;
  }

  if (typeof value === "number") {
    return value;
  }

  const normalized = String(value)
    .replace(/\./g, "") // remove separador de milhar
    .replace(",", "."); // transforma decimal brasileiro em decimal JS

  const number = Number(normalized);

  return Number.isFinite(number) ? number : 0;
};

export const formatPercentage = (value) =>
  `${(value * 100).toLocaleString("pt-BR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })}%`;

export const formatCurrency = (value) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });

export function calculateFinancialResult(data) {
  const overdue = toNumber(data.overdueThisMonth);
  const unpaid = toNumber(data.unpaidThisMonth);
  const totalCustomers = toNumber(data.totalCustomers);
  const inactiveDebtors = toNumber(data.inactiveDebtors);
  const debtorCount = inactiveDebtors + toNumber(data.activeDebtors);
  const monthlyRate = overdue > 0 ? unpaid / overdue : 0;
  const realRate = totalCustomers > 0 ? debtorCount / totalCustomers : 0;

  return {
    monthlyRate,
    realRate,
    debtorCount,
    inactiveDebtors,
    outstandingAmount: debtorCount * toNumber(data.averageDebt),
    rateMultiplier: monthlyRate > 0 ? realRate / monthlyRate : 0,
  };
}

export function evaluateQuiz(answers) {
  const answeredCount = answers.filter(Number.isInteger).length;
  const score = answers.reduce((total, answer) => total + (answer ?? 0), 0);
  const recommendations = answers
    .map((severity, index) => ({
      severity,
      text: QUESTIONS[index].recommendation,
    }))
    .filter(({ severity }) => severity >= 1)
    .sort((a, b) => b.severity - a.severity);

  if (!answeredCount) {
    return {
      answeredCount,
      score,
      recommendations,
      label: "Responda a Etapa 2",
      level: "",
      color: "#4d8996",
    };
  }

  const cultureLevel = CULTURE_LEVELS.find(({ maxScore }) => score <= maxScore);
  return { answeredCount, score, recommendations, ...cultureLevel };
}

export function validateLead({ nome, email, whatsapp, empresa }) {
  if (!nome.trim() || !email.trim() || !whatsapp.trim() || !empresa.trim()) {
    return "Preencha todos os campos para ver o resultado.";
  }
  if (!EMAIL_PATTERN.test(email.trim())) return "Confira o seu e-mail.";
  return "";
}

export function createLeadPayload(lead, financialResult, quizResult) {
  const quizScorePercentage = (quizResult.score / (QUESTIONS.length * 2)) * 100;

  return {
    name: lead.nome.trim(),
    email: lead.email.trim(),
    whatsapp: lead.whatsapp.trim(),
    empresa: lead.empresa.trim(),
    novidades: lead.conteudos,
    origem: "diagnostico-inadimplencia",
    ebookId: 1,
    quiz: {
      score: quizResult.score,
      scorePercentage: quizScorePercentage,
      level: quizResult.level,
      label: quizResult.label,
      color: quizResult.color,
      answeredCount: quizResult.answeredCount,
      recommendations: quizResult.recommendations
    },
    result: {
      monthlyRate: formatPercentage(financialResult.monthlyRate),
      realRate: formatPercentage(financialResult.realRate),
      rateMultiplier: financialResult.rateMultiplier,
      inactiveDebtors: financialResult.inactiveDebtors,
      outstandingAmount: formatCurrency(financialResult.outstandingAmount),
    },
  };
}
