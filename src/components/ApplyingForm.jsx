import { useState } from "react";

/* ---------- Cores (ajuste aqui conforme o design final) ---------- */
// Fundo da página ........ #f4f8f9
// Borda dos campos ....... #cfe0e3
// Texto escuro ........... #0f2a3a
// Botão .................. #f1b434

const MAX_PDF_MB = 5;

const FORMACOES = [
  { label: "Ensino Médio", value: "medio" },
  { label: "Técnico", value: "tecnico" },
  { label: "Superior", value: "superior" },
  { label: "Nenhum", value: "none" },
];

const CARGOS = [
  { label: "Supervisor/Coordenador", value: "supervisor" },
  { label: "Operador de cobrança", value: "cobranca" },
  { label: "Operador de Notificação", value: "notificacao" },
];

const inputClass =
  "w-full h-11 rounded-lg border border-[#cfe0e3] bg-white px-3 text-sm text-[#0f2a3a] " +
  "placeholder:text-slate-400 outline-none transition " +
  "focus:border-[#f1b434] focus:ring-2 focus:ring-[#f1b434]/30";

function formatPhone(value) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10)
    return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

function Field({ label, htmlFor, error, children }) {
  return (
    <div className="mb-3">
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-[14px] font-semibold text-[#0f2a3a]"
      >
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

function SelectField({
  id,
  name,
  value,
  onChange,
  options,
  placeholder,
  required,
}) {
  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`${inputClass} appearance-none pr-9 ${
          value ? "" : "text-slate-400"
        }`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value} className="text-[#0f2a3a]">
            {o.label}
          </option>
        ))}
      </select>
      <svg
        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z" />
      </svg>
    </div>
  );
}

function DateRange({ idPrefix, start, end, onStart, onEnd }) {
  return (
    <div className="grid grid-cols-2 gap-3 mb-4">
      <Field label="Data de início" htmlFor={`${idPrefix}-inicio`}>
        <input
          id={`${idPrefix}-inicio`}
          type="month"
          required
          max={end || undefined}
          value={start}
          onChange={(e) => onStart(e.target.value)}
          className={inputClass}
        />
      </Field>
      <Field label="Data de conclusão" htmlFor={`${idPrefix}-fim`}>
        <input
          id={`${idPrefix}-fim`}
          type="month"
          required
          min={start || undefined}
          value={end}
          onChange={(e) => onEnd(e.target.value)}
          className={inputClass}
        />
      </Field>
    </div>
  );
}

function RadioPills({ name, value, onChange, options }) {
  return (
    <div className="flex gap-3">
      {options.map((o) => (
        <label
          key={o.value}
          className={`relative flex h-11 flex-1 cursor-pointer items-center justify-center rounded-lg border text-sm transition ${
            value === o.value
              ? "border-[#f1b434] bg-[#f1b434]/10 font-semibold text-[#0f2a3a]"
              : "border-[#cfe0e3] bg-white text-slate-500 hover:border-[#f1b434]/60"
          }`}
        >
          <input
            type="radio"
            name={name}
            value={o.value}
            checked={value === o.value}
            onChange={() => onChange(o.value)}
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
            required
          />
          {o.label}
        </label>
      ))}
    </div>
  );
}

export default function ApplyingForm() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    formacaoNivel: "",
    formacaoCurso: "",
    formacaoInicio: "",
    formacaoFim: "",
    cidade: "",
    cargo: "",
    temExperiencia: "",
    empresa: "",
    experienciaInicio: "",
    experienciaFim: "",
    origem: "",
  });
  const [curriculo, setCurriculo] = useState(null);
  const [pdfError, setPdfError] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");
  const API_ENDPOINT = "https://agenda.clevercobranca.com.br/careers/applications";

  const set = (name, value) => {
    setForm((f) => ({ ...f, [name]: value }));
  };

  function handleFile(e) {
    const file = e.target.files?.[0];
    setPdfError("");
    if (!file) {
      return setCurriculo(null);
    }

    if (file.type !== "application/pdf") {
      setCurriculo(null);
      e.target.value = "";
      return setPdfError("O currículo precisa estar em PDF.");
    }
    if (file.size > MAX_PDF_MB * 1024 * 1024) {
      setCurriculo(null);
      e.target.value = "";
      return setPdfError(`O arquivo deve ter no máximo ${MAX_PDF_MB} MB.`);
    }
    setCurriculo(file);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!curriculo) return setPdfError("Anexe seu currículo em PDF.");
    setError("");

    const payload = { ...form, attachment: curriculo };
    if (form.formacaoNivel === "none") {
      payload.formacaoCurso = "";
      payload.formacaoInicio = "";
      payload.formacaoFim = "";
    }
    if (form.temExperiencia !== "yes") {
      payload.empresa = "";
      payload.experienciaInicio = "";
      payload.experienciaFim = "";
    }

    const formData = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      if (key === "attachment") {
        formData.append(key, value);
      } else {
        formData.append(key, value);
      }
    });

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        return setEnviado(true);
      }
      const errorBody = await response.text();
      let errorMessage = JSON.parse(errorBody);
      console.error("Erro ao enviar candidatura:", response.status, errorBody);
      setError(
        errorMessage.error ||
          "Ocorreu um erro ao enviar a candidatura. Tente novamente.",
      );
    } catch (e) {
      console.log("Erro ao enviar candidatura:", e);
      setError("Ocorreu um erro ao enviar a candidatura. Tente novamente.");
    }
  }

  if (enviado) {
    return (
      <div className="max-h-full p-6">
        <div className="mx-auto max-w-md rounded-2xl border border-[#cfe0e3] bg-white p-6 text-center shadow-sm">
          <h2 className="text-base font-bold text-[#0f2a3a]">
            Candidatura enviada!
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Recebemos seus dados. Entraremos em contato em breve.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-h-full">
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-lg rounded-2xl border border-[#cfe0e3] p-6 shadow-sm"
      >
        <h2 className="mb-4 sm:text-[36px] text-lg font-family-headers tracking-wide font-semibold text-[#0f2a3a]">
          Candidate-se a uma vaga na{" "}
          <b className="text-orange-primary">Clever</b>
        </h2>

        <Field label="Nome Completo" htmlFor="nome">
          <input
            id="nome"
            name="nome"
            value={form.nome}
            type="text"
            required
            placeholder="Seu nome completo"
            onChange={(e) => set(e.target.name, e.target.value)}
            className={inputClass}
          />
        </Field>

        <Field label="Email" htmlFor="email">
          <input
            id="email"
            type="email"
            required
            placeholder="voce@email.com.br"
            value={form.email}
            name="email"
            onChange={(e) => set(e.target.name, e.target.value)}
            className={inputClass}
          />
        </Field>

        <Field label="Telefone" htmlFor="telefone">
          <input
            id="telefone"
            type="tel"
            required
            placeholder="(11) 90000-0000"
            value={form.telefone}
            name="telefone"
            onChange={(e) => set(e.target.name, formatPhone(e.target.value))}
            className={inputClass}
          />
        </Field>

        {/* ---------- Formação ---------- */}
        <Field label="Sua formação" htmlFor="formacao">
          <SelectField
            id="formacao"
            required
            value={form.formacaoNivel}
            name="formacaoNivel"
            onChange={(e) => set(e.target.name, e.target.value)}
            options={FORMACOES}
            placeholder="Selecione o nível"
          />
        </Field>

        {form.formacaoNivel && form.formacaoNivel !== "none" && (
          <>
            <Field label="Curso / Instituição" htmlFor="curso">
              <input
                id="curso"
                type="text"
                required
                placeholder="Ex.: Administração - USP"
                value={form.formacaoCurso}
                name="formacaoCurso"
                onChange={(e) => set(e.target.name, e.target.value)}
                className={inputClass}
              />
            </Field>
            <DateRange
              idPrefix="formacao"
              start={form.formacaoInicio}
              end={form.formacaoFim}
              onStart={(value) => set("formacaoInicio", value)}
              onEnd={(value) => set("formacaoFim", value)}
            />
          </>
        )}

        <Field label="Cidade residente" htmlFor="cidade">
          <input
            id="cidade"
            type="text"
            required
            placeholder="Sua cidade"
            value={form.cidade}
            name="cidade"
            onChange={(e) => set(e.target.name, e.target.value)}
            className={inputClass}
          />
        </Field>

        <Field label="Qual cargo é de seu interesse?" htmlFor="cargo">
          <SelectField
            id="cargo"
            required
            value={form.cargo}
            name="cargo"
            onChange={(e) => set(e.target.name, e.target.value)}
            options={CARGOS}
            placeholder="Selecione um cargo"
          />
        </Field>

        {/* ---------- Experiência ---------- */}
        <Field label="Você possui experiência profissional?">
          <RadioPills
            name="temExperiencia"
            value={form.temExperiencia}
            onChange={(value) => set("temExperiencia", value)}
            options={[
              { label: "Sim", value: "yes" },
              { label: "Não", value: "no" },
            ]}
          />
        </Field>

        {form.temExperiencia === "yes" && (
          <>
            <Field label="Nome da empresa" htmlFor="empresa">
              <input
                id="empresa"
                type="text"
                required
                placeholder="Nome da empresa"
                value={form.empresa}
                name="empresa"
                onChange={(e) => set(e.target.name, e.target.value)}
                className={inputClass}
              />
            </Field>
            <DateRange
              idPrefix="experiencia"
              start={form.experienciaInicio}
              end={form.experienciaFim}
              onStart={(value) => set("experienciaInicio", value)}
              onEnd={(value) => set("experienciaFim", value)}
            />
          </>
        )}

        <Field label="Como conheceu a Clever?" htmlFor="origem">
          <input
            id="origem"
            type="text"
            required
            placeholder="Indicação, LinkedIn, Instagram..."
            value={form.origem}
            name="origem"
            onChange={(e) => set(e.target.name, e.target.value)}
            className={inputClass}
          />
        </Field>

        {/* ---------- Currículo ---------- */}
        <Field
          label="Anexe seu currículo em PDF"
          htmlFor="curriculo"
          error={pdfError}
        >
          <label
            htmlFor="curriculo"
            className={`relative flex h-11 cursor-pointer items-center gap-3 rounded-lg border bg-white px-3 text-sm transition hover:border-[#f1b434] ${
              pdfError ? "border-red-400" : "border-[#cfe0e3]"
            }`}
          >
            <span className="shrink-0 rounded-md bg-[#f1b434]/15 px-2 py-1 text-xs font-semibold text-[#0f2a3a]">
              Escolher arquivo
            </span>
            <span
              className={`truncate ${
                curriculo ? "text-[#0f2a3a]" : "text-slate-400"
              }`}
            >
              {curriculo ? curriculo.name : `PDF de até ${MAX_PDF_MB} MB`}
            </span>
            <input
              id="curriculo"
              type="file"
              accept="application/pdf,.pdf"
              onChange={handleFile}
              className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
            />
          </label>
        </Field>
        {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
        <button
          type="submit"
          className="mt-2 h-12 w-full rounded-lg bg-[#f1b434] text-[15px] font-medium text-white transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f1b434] focus-visible:ring-offset-2"
        >
          Enviar candidatura
        </button>
      </form>
    </div>
  );
}
