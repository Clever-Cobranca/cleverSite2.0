import { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import parse, { domToReact } from "html-react-parser";

const Accordion = () => {
  // State to manage the currently open item's ID
  const [openItemId, setOpenItemId] = useState(null);

  const accordionData = [
    {
      id: 1,
      question: "Qual é o 0800 da Clever?",
      answer: `Entre em contato conosco, pelo nosso número: 0800 000 4820. Seu contato pode ser via WhatsApp ou ligação.`,
    },
    {
      id: 2,
      question:
        "Já quitei meu débito, mas meu nome ainda continua restrito. O que devo fazer?",
      answer: `Após a formalização do acordo e a quitação do boleto, encaminharemos os dados à empresa credora responsável pela negociação. Normalmente, esse procedimento ocorre de forma ágil, mas, em determinadas situações, a remoção da restrição pode levar até 7 dias.`,
    },
    {
      id: 3,
      question: "Não recebi o meu boleto para pagamento. Como devo prosseguir?",
      answer: `Temos plena ciência da importância de manter seu acordo regularizado e, pensando nisso, facilitamos o acesso à segunda via do boleto. <a target="blank" className="text-[#551A8B] underline" href="https://api.whatsapp.com/send/?phone=5508000004820&text=Não+recebi+meu+boleto+para+pagamento&type=phone_number&app_absent=0">Fale Conosco</a>`,
    },
    {
      id: 4,
      question:
        "Tenho boletos gerados pela Clever no meu Débito Direto Autorizado (DDA)",
      answer: `<p className="mb-5">O Débito Direto Autorizado (DDA) é uma alternativa para o pagamento de contas e boletos que permite ao titular da conta acompanhar e gerenciar todos os títulos emitidos em seu CPF ou CNPJ.</p> <p className="mb-5">Por meio dessa modalidade, é possível ter maior controle financeiro, com a opção de autorizar o pagamento diretamente via débito em conta.</p> <p>Em caso de dúvidas sobre essa funcionalidade, orientamos que o contato seja feito diretamente com o banco onde a conta está vinculada.</p>`,
    },
    {
      id: 5,
      question: "Fiz o pagamento e continuo recebendo cobranças.",
      answer: `<p className="mb-5">Atuamos como representantes das empresas credoras no processo de recuperação de crédito.</p> <p className="mb-5">Após a confirmação da compensação do pagamento, as cobranças são devidamente encerradas.</p> Caso, ainda assim, a cobrança persista, o canal de Ouvidoria permanece à disposição para prestar o suporte necessário, bastando <a target="blank" className="text-[#551A8B] underline" href="https://api.whatsapp.com/send/?phone=5508000004820&text=Continuo+recebendo+cobranças&type=phone_number&app_absent=0">clicar aqui</a>`,
    },
    {
      id: 6,
      question: "Realizei o pagamento e continuo com o nome negativado.",
      answer: `<p className="mb-5">A inclusão ou a exclusão da restrição (negativação do nome) é de responsabilidade da empresa credora, que realiza esse procedimento.</p> <p className="mb-5">Caso o pagamento tenha sido efetuado recentemente, o prazo para a retirada da negativação pode ser de até 5 dias úteis.</p> Após esse período, se a restrição ainda constar, será necessário entrar em contato diretamente com a empresa credora para informar a situação e receber as orientações adequadas.`,
    },
    {
      id: 7,
      question: "Como faço para não cair em golpes?",
      answer: `<p className="mb-5">Para se proteger contra golpes, é fundamental adotar alguns cuidados:</p> <p className="mb-5">Certifique-se de que está em contato direto com a empresa ou instituição financeira responsável pelo serviço ou pela cobrança.</p> <p className="mb-5">Antes de realizar qualquer pagamento via PIX, confira com atenção o nome do beneficiário e confirme que ele corresponde à empresa correta.</p> <p className="mb-5"><strong>Importante:</strong> não emitimos chave PIX vinculada a pessoa física.</p> <p className="mb-5">Ao efetuar pagamentos por boleto bancário, verifique sempre a autenticidade do beneficiário, assegurando que o valor será destinado à empresa credora ou diretamente à Clever. Nunca realize pagamentos para pessoas físicas ou empresas desconhecidas.</p> <p className="mb-5">Desconfie de solicitações de dados pessoais ou financeiros sensíveis, como senhas, números de cartão de crédito ou informações bancárias. Empresas idôneas, em regra, não solicitam esse tipo de informação por e-mail, telefone ou mensagens.</p> Em caso de dúvida ou suspeita, procure contato diretamente com a empresa ou instituição financeira por meio dos canais oficiais, evitando clicar em links desconhecidos ou responder a comunicações não solicitadas. Persistindo qualquer incerteza, utilize exclusivamente nossos canais oficiais de atendimento. <a target="blank" className="text-[#551A8B] underline" href="https://api.whatsapp.com/send/?phone=5508000004820&text=Como+não+cair+em+golpes&type=phone_number&app_absent=0">Clique aqui</a>`,
    },
  ];

  const toggleItem = (itemId) => {
    setOpenItemId(openItemId === itemId ? null : itemId);
  };

  const AccordionItem = ({ question, answer, isOpen, toggleItem }) => {
    return (
      <div className="group border-b border-gray-300 last:border-0">
        <button
          className="flex min-h-[82px] h-full peer justify-between items-center w-full p-4 text-left focus:outline-none bg-gray-50 group-hover:bg-gray-200 hover:cursor-pointer transition duration-300"
          onClick={toggleItem}
          aria-expanded={isOpen}
          aria-controls={`accordion-content-${question.id}`}
        >
          <p className="text-[clamp(0.9rem,4vw,1rem)] font-bold text-gray-800">
            {question}
          </p>
          {isOpen ? (
            <FiChevronUp className="min-w-5 h-5 text-gray-600 " />
          ) : (
            <FiChevronDown className="min-w-5 h-5 text-gray-600" />
          )}
        </button>

        <div
          id={`accordion-content-${question.id}`}
          className={`overflow-hidden bg-gray-50 group-hover:bg-gray-200 transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-4 bg-white text-gray-600 group-hover:bg-gray-200 transition-all duration-300 ease-in-out">
            <div className="h-full border-t text-[clamp(0.9rem,4vw,1rem)] tracking-wider border-gray-300 pt-3 group-hover:bg-gray-200 transition-all duration-300 ease-in-out">
              {parse(answer)}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full min-h-[90%] max-w-2xl mx-auto shadow-lg rounded-lg overflow-hidden">
      {accordionData.map((item) => (
        <AccordionItem
          key={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openItemId === item.id}
          toggleItem={() => toggleItem(item.id)}
        />
      ))}
    </div>
  );
};

export default Accordion;
