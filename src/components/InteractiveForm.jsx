'use client';
import { label } from 'motion/react-client';
import React, { useState, useEffect } from 'react';

// --- CONFIGURAÇÃO DO FLUXO ---
const formFlow = {
    start: {
        id: 'nome',
        inputType: 'text', // <--- NOVO: Tipo Texto
        question: "Olá!, qual é o seu nome?",
        placeholder: "Frederico Carses",
        next: 'nascimento' // <--- Para texto, o próximo passo é fixo
    },
    nascimento: {
        id: 'nascimento',
        inputType: 'date',
        question:`Prazer, Qual sua data de nascimento`, // <--- Pergunta dinâmica
        placeholder: '05/08/1984',
        next: 'email'
    },
    email: {
        id: 'email',
        inputType: 'text',
        question: "Qual é o seu email?",
        placeholder: 'frederico@gmail.com',
        next: 'telefone'
    },
    telefone: {
        id: 'telefone',
        inputType: 'text',
        question: "Qual é o seu numero de telefone para contato",
        placeholder: '(11) 9457-9273',
        next: 'formacao'
    },
    formacao: {
        id: 'formacao',
        inputType: 'options',
        question: "Qual é sua formação",
        options: [
            { label: 'Ensino Medio(finalizado)', value: 'medio finalizado', next: 'comoConheceu'},
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
        id: 'ciddadeResidente',
        inputType: 'Text',
        question: 'Em qual cidade você mora',
        placeholder: 'Mogi',
        next: 'cargoPretendido'
    },
    cargoPretendido: {
        id: 'cargoPretendido',
        inputType: 'options',
        question: 'Você tem interesse em qual cargo?',
        options: [
            {label: 'Supervisor/Coordenador', value: 'supervisor', next:'experiencia'},
            {label: 'Operador de cobrança', value: 'cobranca', next:'experiencia'},
            {label: 'Operador de Notificação', value: 'notificacao', next:'experiencia'}
        ]
    },
    experiencia: {
        id: 'experiencia',
        inputType: 'options',
        question: 'Você tem alguma experiencia anterior',
        options: [
            {label: 'Sim', value: 'temExperiencia', next: 'nomeEmpresa'},
            {label: 'Não', value: 'naoExperiencia', next: 'comoConheceu'}
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

  useEffect(() => {
    if (currentStep === 'final' && !emailStatus) {
        sendFormData();
    }
  }, [currentStep]);

  

  const currentQuestion = formFlow[currentStep];

  // Função para avançar
  const handleNext = (value, nextId) => {
    setAnswers({ ...answers, [currentStep]: value });
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
    setEmailStatus(null)
  };

  const sendFormData = async () => {
    setEmailStatus('sending');
    const formData = new FormData();

    // 1. Adiciona os dados de texto
    Object.entries(answers).forEach(([key, value]) => {
        formData.append(key, value);
    });

    // 2. Adiciona o Arquivo Real
    if (fileToSend) {
        // Dica: O nome 'attachment' ajuda o FormSubmit a identificar o arquivo
        formData.append('attachment', fileToSend);
    }

    // 3. Configurações (SEM TEMPLATE para garantir o anexo)
    formData.append("_subject", `Nova Candidatura: ${answers.nome || 'Site'}`);
    // REMOVI O "_template" POIS ELE ESTAVA BLOQUEANDO O ANEXO
    // REMOVI O "_captcha" PARA EVITAR ERROS DE VALIDAÇÃO
    
    // IMPORTANTE: Use seu email que JÁ ESTÁ ATIVADO no FormSubmit
    const email = "mateus890alves@gmail.com"; 

    try {
        const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
            method: "POST",
            body: formData,
            headers: { 
                'Accept': 'application/json' 
            }
        });

        if (response.ok) {
            setEmailStatus('success');
        } else {
            const errorData = await response.text();
            throw new Error(errorData);
        }

    } catch (error) {
        console.error("Erro no envio:", error);
        setEmailStatus('error');
    }
  };

  if (currentQuestion.type === 'end') {
    return (
        <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg border text-center">
            
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
                    <h2 className="text-2xl font-bold text-gray-800">Prontinho!</h2>
                    <p className="text-gray-600 mt-2">Seus dados foram enviados com sucesso.</p>
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
                    <p className="text-gray-600 mt-2">Verifique sua conexão e tente novamente.</p>
                    <button 
                        onClick={() => { setEmailStatus(null); sendFormData(); }}
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

      case 'number':
        return (
          <form onSubmit={(e) => { e.preventDefault(); handleNext(inputValue, currentQuestion.next); }}>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={currentQuestion.placeholder}
              min={currentQuestion.min}
              max={currentQuestion.max}
              className="w-full p-4 text-lg border-2 border-gray-200 rounded-xl focus:border-[#F1B434] focus:outline-none"
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