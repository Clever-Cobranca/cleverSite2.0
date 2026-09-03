import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";
import { formatPercentage, formatCurrency } from "./diagnostico.utils";
import { QUESTIONS } from "./diagnostico.config";
import { Result } from "../../components/Diagnostico/Result";

export default function DiagnosticPdfPage() {
  const { id } = useParams();

  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");

  const [diagnostic, setDiagnostic] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadDiagnostic() {
      try {
        // const response = await fetch(
        //   `https://agenda.clevercobranca.com.br/api/diagnosticos/${id}/pdf`,
        //   {
        //     headers: {
        //       Authorization: `Bearer ${token}`,
        //     },
        //   },
        // );

        const response = await fetch(
          `http://localhost5050/diagnostic/${id}/pdf`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (!response.ok) {
          throw new Error("Diagnóstico não encontrado");
        }

        const data = await response.json();

        setDiagnostic(data);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    }

    loadDiagnostic();
  }, [id, token]);

  if (error) {
    return <div>Não foi possível carregar o diagnóstico.</div>;
  }

  if (!diagnostic) {
    return <div>Carregando...</div>;
  }

  return (
    <main data-pdf-ready="true">
      <Result
        result={diagnostic.result}
        quiz={diagnostic.quiz}
        QUESTIONS={QUESTIONS}
        formatPercentage={formatPercentage}
        formatCurrency={formatCurrency}
      />
    </main>
  );
}
