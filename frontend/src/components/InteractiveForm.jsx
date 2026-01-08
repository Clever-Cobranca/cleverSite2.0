'use client';
import { label } from 'motion/react-client';
import React, { useState, useEffect } from 'react';

const formFlow = {
  start: {
    id: 'nome',
    inputType: 'text', 
    question: "Olá!, qual é o seu nome?",
    placeholder: "Frederico Carses",
    next: 'nascimento' 
  },
  nascimento: {
    id: 'nascimento',
    inputType: 'date',
    question: `Prazer, Qual sua data de nascimento`, 
    placeholder: '05/08/1984',
    next: 'email'
  },
  email: {
    id: 'email',
    inputType: 'emailBR',
    question: "Qual é o seu email?",
    placeholder: 'frederico@gmail.com',
    next: 'telefone'
  },
  telefone: {
    id: 'telefone',
    inputType: 'phoneBR',
    question: "Qual é o seu numero de telefone para contato",
    placeholder: '(11) 9457-9273',
    next: 'formacao'
  },
  formacao: {
    id: 'formacao',
    inputType: 'options',
    question: "Qual é sua formação",
    options: [
      { label: 'Ensino Medio(finalizado)', value: 'medio finalizado', next: 'comoConheceu' },
      { label: 'Ensino Medio(cursando)', value: 'medio cursando', next: 'fimEscola' },
      { label: 'Ensino Tecnico(finalizado)', value: 'tecnico finalizado', next: 'cursoTecnico' },
      { label: 'Ensino tecnico(cursando)', value: 'tecnico cursando', next: 'fimTecnico' },
      { label: 'Ensino superior(finalizado)', value: 'superior finalizado', next: 'cursoSuperior' },
      { label: 'Ensino superior(cursando)', value: 'superior cursando', next: 'fimSuperior' }
    ],
  },
  fimEscola: {
    id: 'fimEscola',
    inputType: 'date',
    question: 'Quando esta previsto a conclusão da escola?',
    placeholder: '31/12/2027',
    next: 'cidadeResidente'
  },
  fimTecnico: {
    id: 'fimTecnico',
    inputType: 'date',
    question: 'Quando esta previsto a conclusão do curso tecnico?',
    placeholder: '31/12/2027',
    next: 'cursoTecnico'
  },
  fimSuperior: {
    id: 'fimSuperior',
    inputType: 'date',
    question: 'Quando esta previsto a conclusão da sua Faculdade?',
    placeholder: '31/12/2027',
    next: 'cursoSuperior'
  },
  cursoTecnico: {
    id: 'cursoTecnico',
    inputType: 'text',
    question: 'Qual é o nome do curso tecnico que você fez ou esta fazendo?',
    placeholder: 'Administração',
    next: 'cidadeResidente'
  },
  cursoSuperior: {
    id: 'cursoSuperior',
    inputType: 'text',
    question: 'Qual curso Superior você fez ou esta fazendo?',
    placeholder: 'Ads',
    next: 'cidadeResidente'
  },
  cidadeResidente: {
    id: 'cidadeResidente',
    inputType: 'cidadeAutocompleteSp',
    question: 'Em qual cidade você mora',
    placeholder: 'Mogi',
    next: 'cargoPretendido'
  },
  cargoPretendido: {
    id: 'cargoPretendido',
    inputType: 'options',
    question: 'Você tem interesse em qual cargo?',
    options: [
      { label: 'Supervisor/Coordenador', value: 'supervisor', next: 'experiencia' },
      { label: 'Operador de cobrança', value: 'cobranca', next: 'experiencia' },
      { label: 'Operador de Notificação', value: 'notificacao', next: 'experiencia' }
    ]
  },
  experiencia: {
    id: 'experiencia',
    inputType: 'options',
    question: 'Você tem alguma experiencia anterior',
    options: [
      { label: 'Sim', value: 'temExperiencia', next: 'nomeEmpresa' },
      { label: 'Não', value: 'naoExperiencia', next: 'comoConheceu' }
    ]
  },
  nomeEmpresa: {
    id: 'nomeEmpresa',
    inputType: 'Text',
    question: 'Em qual foi o nome da ultima empresa em que voce trabalhou',
    placeholder: 'Nome da empresa...',
    next: 'dataInicio'
  },
  dataInicio: {
    id: 'dataInicio',
    inputType: 'date',
    question: 'Quando você iniciou nessa empresa?',
    placeholder: '07/2022',
    next: 'dataFim'
  },
  dataFim: {
    id: 'dataFim',
    inputType: 'date',
    question: 'Quando você saiu dessa empresa',
    placeholder: '05/2024',
    next: 'atividades'
  },
  atividades: {
    id: 'atividades',
    inputType: 'Text',
    question: 'Quais eram suas responsabilidades nessa empresa',
    placeholder: 'Digite aqui',
    next: 'curriculo'
  },
  comoConheceu: {
    id: 'comoConheceu',
    inputType: 'Text',
    question: 'Como conheceu a Clever?',
    placeholder: 'Instagram',
    next: 'curriculo'
  },
  curriculo: {
    id: 'curriculo',
    inputType: 'file',
    question: 'envie seu curriculo em pdf',
    next: 'final'
  },
  final: {
    id: 'final',
    type: 'end'
  }
};
// -----------------------------

const InteractiveForm = () => {
  const [currentStep, setCurrentStep] = useState('start');
  const [answers, setAnswers] = useState({});
  const [history, setHistory] = useState([]);

  const [inputValue, setInputValue] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const [fileToSend, setFileToSend] = useState(null)
  const [emailStatus, setEmailStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const [cidadesSP, setCidadesSP] = useState([]);
  const [loadingCidadesSP, setLoadingCidadesSP] = useState(false);

  const [cidadeOpen, setCidadeOpen] = useState(false);
  const [cidadeError, setCidadeError] = useState("");


  const onlyDigits = (v = "") => v.replace(/\D/g, "");

  const formatBRPhone = (value = "") => {
    const d = onlyDigits(value).slice(0, 11);
    const len = d.length;

    if (len === 0) return "";
    if (len <= 2) return `(${d}`;
    if (len <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
    if (len <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
    return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
  };

  const isValidBRPhone = (value) => {
    const d = onlyDigits(value);

    if (!(d.length === 10 || d.length === 11)) return false;

    const ddd = d.slice(0, 2);
    if (ddd[0] === "0") return false;

    // celular: 11 dígitos -> terceiro dígito deve ser 9
    if (d.length === 11 && d[2] !== "9") return false;

    // evita tudo igual (111111..., 0000...)
    if (/^(\d)\1+$/.test(d)) return false;

    return true;
  };

  const isValidEmail = (value = "") => {
    const v = value.trim();

    // sem espaços
    if (!v || /\s/.test(v)) return false;

    // validação prática e segura (não exagera)
    // exige algo@algo.dominio (domínio com pelo menos 2 letras)
    const re = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;

    return re.test(v);
  };




  useEffect(() => {
    if (currentStep === 'final' && !emailStatus) {
      sendFormData();
    }
  }, [currentStep]);

  useEffect(() => {
    if (currentStep !== "cidadeResidente") return;

    // Evita refetch se já carregou
    if (cidadesSP.length > 0) return;

    const controller = new AbortController();
    setLoadingCidadesSP(true);

    // SP = 35 no IBGE (mais confiável que sigla)
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/35/municipios?orderBy=nome", {
      signal: controller.signal,
    })
      .then((r) => r.json())
      .then((data) => setCidadesSP(Array.isArray(data) ? data : []))
      .catch(() => setCidadesSP([]))
      .finally(() => setLoadingCidadesSP(false));

    return () => controller.abort();
  }, [currentStep, cidadesSP.length]);



  const currentQuestion = formFlow[currentStep];

  // Função para avançar
  const handleNext = (value, nextId) => {
    // Usa o ID do passo (ex: 'nome', 'email') em vez do currentStep (ex: 'start')
    const answerKey = currentQuestion.id || currentStep;
    setAnswers({ ...answers, [answerKey]: value });
    setHistory([...history, currentStep]);

    // Limpeza para o próximo passo
    setInputValue("");
    setSelectedFile(null);
    setCurrentStep(nextId);
  };

  const handleBack = () => {
    if (history.length === 0) return;
    const newHistory = [...history];
    const previousStep = newHistory.pop();
    setHistory(newHistory);
    setCurrentStep(previousStep);
    setInputValue("");
    setEmailStatus(null);
    setErrorMessage('');
  };

  const sendFormData = async () => {
    setEmailStatus('sending');
    setErrorMessage(''); // Limpa mensagem de erro anterior
    const formData = new FormData();

    // 1. Adiciona os dados de texto
    Object.entries(answers).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // 2. Adiciona o Arquivo Real
    if (fileToSend) {
      formData.append('attachment', fileToSend);
    }

    // URL do backend - ajuste conforme necessário
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
    const apiEndpoint = "https://agenda.clevercobranca.com.br/careers/applications/";
    
    // Debug: log da URL (pode remover depois)
    console.log('Enviando para:', apiEndpoint);
    console.log('API_URL configurada:', API_URL);

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        body: formData,
      });

      // Debug: log da resposta
      console.log('Status da resposta:', response.status, response.statusText);
      
      if (response.ok) {
        const data = await response.json();
        console.log('Resposta do servidor:', data);
        setEmailStatus('success');
      } else {
        // Log do erro para debug
        console.error('Erro HTTP:', response.status, response.statusText);
        
        const errorData = await response.json().catch(() => ({ 
          error: `Erro HTTP ${response.status}`,
          details: response.status === 405 
            ? 'Método não permitido. Verifique se a URL do backend está correta na Vercel (variável VITE_API_URL).'
            : 'Não foi possível processar a resposta do servidor'
        }));
        
        // Monta mensagem de erro detalhada
        const message = errorData.details 
          ? `${errorData.error}: ${errorData.details}`
          : errorData.error || 'Erro ao enviar formulário';
        
        setErrorMessage(message);
        setEmailStatus('error');
      }

    } catch (error) {
      console.error("Erro no envio:", error);
      
      // Erro de conexão (servidor não está rodando)
      if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
        setErrorMessage('Não foi possível conectar ao servidor. Verifique se o backend está rodando na porta 3001.');
      } else {
        setErrorMessage(error.message || 'Erro desconhecido ao enviar formulário');
      }
      
      setEmailStatus('error');
    }
  };

  if (currentQuestion.type === 'end') {
    return (
      <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-xl text-center">

        {/* 1. ENVIANDO */}
        {(emailStatus === 'sending' || !emailStatus) && (
          <div className="flex flex-col items-center py-6">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F1B434] mb-4"></div>
            <h2 className="text-xl font-bold text-gray-700">Enviando candidatura...</h2>
            <p className="text-gray-500 text-sm mt-2">Aguarde um momento, estamos processando seu arquivo.</p>
          </div>
        )}

        {/* 2. SUCESSO */}
        {emailStatus === 'success' && (
          <div className="flex flex-col items-center py-6">
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-2xl font-bold text-gray-800">Candidatura enviada com sucesso!</h2>
            
            <button
              onClick={() => window.location.reload()}
              className="mt-8 text-[#F1B434] font-bold hover:underline"
            >
              Voltar ao início
            </button>
          </div>
        )}

        {/* 3. ERRO */}
        {emailStatus === 'error' && (
          <div className="flex flex-col items-center py-6">
            <div className="text-6xl mb-4">❌</div>
            <h2 className="text-2xl font-bold text-red-600">Ops, algo deu errado.</h2>
            {errorMessage && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg max-w-md w-full">
                <p className="text-sm text-red-800 font-semibold mb-2">Detalhes do erro:</p>
                <p className="text-sm text-red-700">{errorMessage}</p>
              </div>
            )}
            {!errorMessage && (
              <p className="text-gray-600 mt-2">Verifique sua conexão e tente novamente.</p>
            )}
            <button
              onClick={() => { 
                setEmailStatus(null); 
                setErrorMessage('');
                sendFormData(); 
              }}
              className="mt-6 px-6 py-2 bg-gray-200 rounded-full font-semibold hover:bg-gray-300 transition-colors"
            >
              Tentar Novamente
            </button>
          </div>
        )}
      </div>
    );
  }

  // Renderiza o input correto baseado no tipo
  const renderInput = () => {
    switch (currentQuestion.inputType) {

      case 'options':
        return (
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleNext(option.value, option.next)}
                className="w-full text-left p-4 rounded-xl border-2 border-gray-100 hover:border-[#F1B434] hover:bg-blue-50 text-gray-700 font-medium transition-all flex justify-between group"
              >
                {option.label}
                <span className="hidden group-hover:inline text-[#F1B434]">&rarr;</span>
              </button>
            ))}
          </div>
        );
      case "emailBR":
        return (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!isValidEmail(inputValue)) return;
              handleNext(inputValue.trim().toLowerCase(), currentQuestion.next);
            }}
          >
            <input
              type="email"
              inputMode="email"
              autoComplete="email"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={currentQuestion.placeholder}
              className="w-full p-4 text-lg border-2 border-gray-200 rounded-xl focus:border-[#F1B434] focus:outline-none"
              autoFocus
            />

            {!inputValue ? null : !isValidEmail(inputValue) ? (
              <p className="mt-2 text-sm text-red-600">
                Informe um e-mail válido. Ex.: nome@dominio.com
              </p>
            ) : null}

            <button
              type="submit"
              disabled={!isValidEmail(inputValue)}
              className="mt-4 w-full py-3 bg-[#F1B434] text-white rounded-xl font-bold hover:bg-[#F1B434] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Continuar
            </button>
          </form>
        );
        case 'file':
        return (
          <form onSubmit={(e) => { 
            e.preventDefault(); 
            if(selectedFile) setFileToSend(selectedFile)
            // Salva o nome do arquivo (ou o objeto File real se precisar enviar pro backend)
            handleNext(selectedFile ? selectedFile.name : "Sem arquivo", currentQuestion.next); 
          }}>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors relative cursor-pointer">
              <input
                type="file"
                onChange={(e) => setSelectedFile(e.target.files[0])}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                accept=".pdf,.doc,.docx,image/*" 
              />
              <div className="flex flex-col items-center">
                <span className="text-4xl mb-2">📎</span>
                {selectedFile ? (
                  <span className="text-green-600 font-semibold">{selectedFile.name}</span>
                ) : (
                  <span className="text-gray-500">Clique ou arraste para enviar</span>
                )}
              </div>
            </div>
            <button 
              type="submit" 
              disabled={!selectedFile}
              className="mt-4 w-full py-3 bg-[#F1B434] text-white rounded-xl font-bold hover:bg-[#F1B434] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {selectedFile ? "Enviar Arquivo" : "Selecione um arquivo"}
            </button>
          </form>
        );


      case "cidadeAutocompleteSp": {
        const normalizedQuery = (inputValue || "").trim().toLowerCase();

        const filtered = normalizedQuery.length === 0
          ? []
          : cidadesSP
            .filter((c) => c.nome.toLowerCase().includes(normalizedQuery))
            .slice(0, 20); // limita pra não renderizar demais

        const isValidCity = cidadesSP.some((c) => c.nome === inputValue);

        return (
          <form
            onSubmit={(e) => {
              e.preventDefault();

              // exige que seja uma cidade da lista (recomendado)
              if (!isValidCity) {
                setCidadeError("Selecione uma cidade da lista.");
                return;
              }

              setCidadeError("");
              handleNext(inputValue, currentQuestion.next);
            }}
          >
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                  setCidadeError("");
                  setCidadeOpen(true);
                }}
                onFocus={() => setCidadeOpen(true)}
                onBlur={() => {
                  // dá tempo do clique na opção antes de fechar

                }}
                placeholder={loadingCidadesSP ? "Carregando cidades de SP..." : "Digite para buscar (SP)"}
                disabled={loadingCidadesSP}
                className="w-full p-4 text-lg border-2 border-gray-200 rounded-xl focus:border-[#F1B434] focus:outline-none bg-white text-gray-700 disabled:opacity-60"
                autoFocus
              />

              {cidadeOpen && filtered.length > 0 && (
                <ul className="absolute z-50 mt-2 w-full max-h-60 overflow-auto rounded-xl border border-gray-200 bg-white shadow-lg">
                  {filtered.map((c) => (
                    <li key={c.id}>
                      <button
                        type="button"
                        onClick={() => {
                          setInputValue(c.nome);
                          setCidadeError("");
                          setCidadeOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50"
                      >
                        {c.nome}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {cidadeError && (
              <p className="mt-2 text-sm text-red-600">{cidadeError}</p>
            )}

            <button
              type="submit"
              disabled={!inputValue.trim() || loadingCidadesSP}
              className="mt-4 w-full py-3 bg-[#F1B434] text-white rounded-xl font-bold hover:bg-[#F1B434] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Continuar
            </button>
          </form>
        );
      }

      case 'date':
        return (
          <form onSubmit={(e) => { e.preventDefault(); handleNext(inputValue, currentQuestion.next); }}>
            <input
              type="date"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full p-4 text-lg border-2 border-gray-200 rounded-xl focus:border-[#F1B434] focus:outline-none bg-white text-gray-700"
              required
              autoFocus
            />
            <button
              type="submit"
              disabled={!inputValue}
              className="mt-4 w-full py-3 bg-[#F1B434] text-white rounded-xl font-bold hover:bg-[#F1B434] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Continuar
            </button>
          </form>
        );

      case "phoneBR":
        return (

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!isValidBRPhone(inputValue)) return;
              handleNext(inputValue, currentQuestion.next);
            }}
          >
            <input
              inputMode="numeric"
              autoComplete="tel"
              value={inputValue}
              onChange={(e) => setInputValue(formatBRPhone(e.target.value))}
              placeholder="(11) 99999-9999"
              className="w-full p-4 text-lg border-2 border-gray-200 rounded-xl focus:border-[#F1B434] focus:outline-none"
              autoFocus
            />

            {!inputValue ? null : !isValidBRPhone(inputValue) ? (
              <p className="mt-2 text-sm text-red-600">
                Informe um telefone válido com DDD. Ex.: (11) 99999-9999
              </p>
            ) : null}

            <button
              type="submit"
              disabled={!isValidBRPhone(inputValue)}
              className="mt-4 w-full py-3 bg-[#F1B434] text-white rounded-xl font-bold hover:bg-[#F1B434] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Continuar
            </button>
          </form>
        );

      // Padrão (Texto)
      default:
        return (
          <form onSubmit={(e) => { e.preventDefault(); handleNext(inputValue, currentQuestion.next); }}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={currentQuestion.placeholder}
              className="w-full p-4 text-lg border-2 border-gray-200 rounded-xl focus:border-[#F1B434] focus:outline-none"
              autoFocus
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="mt-4 w-full py-3 bg-[#F1B434] text-white rounded-xl font-bold hover:bg-[#F1B434] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Continuar
            </button>
          </form>
        );
    }
  };

  // --- RENDERIZAÇÃO PRINCIPAL ---
  return (
    <div className="w-full max-w-md mx-auto bg-white p-8 rounded-2xl border-gray-100">
      {history.length > 0 && (
        <button onClick={handleBack} className="text-sm text-gray-400 hover:text-gray-600 mb-4 flex items-center gap-1">
          &larr; Voltar
        </button>
      )}

      <h2 className="text-2xl font-bold text-gray-800 mb-6 leading-snug">
        {currentQuestion.question}
      </h2>

      {/* Renderiza o input baseado no tipo atual */}
      {renderInput()}

    </div>
  );
};

export default InteractiveForm;