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
      answer: `Entre em contato conosco, pelo nosso número: 0800 000 4820. Ou, caso prefira, você também pode nos enviar uma mensagem direta pelas redes sociais (Facebook e Instagram).`,
    },
    {
      id: 2,
      question:
        "Já quitei meu débito, mas meu nome ainda continua restrito. O que devo fazer?",
      answer:
        "Após a formalização do acordo e a quitação do boleto, encaminharemos os dados à empresa credora responsável pela negociação. Normalmente, esse procedimento ocorre de forma ágil, mas, em determinadas situações, a remoção da restrição pode levar até 7 dias.",
    },
    {
      id: 3,
      question: "Não recebi o meu boleto para pagamento. Como devo prosseguir?",
      answer: `Temos plena ciência da importância de manter seu acordo regularizado e, pensando nisso, facilitamos o acesso à segunda via do boleto. Caso prefira ou necessite de atendimento digital, nossa equipe está disponível para auxiliá-lo por meio do canal <a target="blank" className="text-[#551A8B]" href="https://api.whatsapp.com/send/?phone=5508000004820&text=Não+recebi+meu+boleto+para+pagamento&type=phone_number&app_absent=0">Fale Conosco</a>`,
    },
    {
      id: 4,
      question:
        "Tenho boletos gerados pela Clever no meu Débito Direto Autorizado",
      answer:
        "O Débito Direto Autorizado é uma alternativa para o pagamento de contas e boletos que permite ao titular da conta acompanhar e gerenciar todos os títulos emitidos em seu CPF ou CNPJ. Por meio dessa modalidade, é possível ter maior controle financeiro, com a opção de autorizar o pagamento diretamente via débito em conta. Em caso de dúvidas sobre essa funcionalidade, orientamos que o contato seja feito diretamente com o banco onde a conta está vinculada.",
    },
    {
      id: 5,
      question: "Fiz o pagamento e continuo recebendo cobranças.",
      answer: `Atuamos como representantes das empresas credoras no processo de recuperação de crédito. Após a confirmação da compensação do pagamento, as cobranças são devidamente encerradas. Caso, ainda assim, a cobrança persista, o canal de Ouvidoria permanece à disposição para prestar o suporte necessário, bastando <a target="blank" className="text-[#551A8B]" href="https://api.whatsapp.com/send/?phone=5508000004820&text=Continuo+recebendo+cobranças&type=phone_number&app_absent=0">clicar aqui</a>`,
    },
    {
      id: 6,
      question: "Realizei o pagamento e continuo com o nome negativado.",
      answer:
        "A inclusão ou a exclusão da restrição (negativação do nome) é de responsabilidade da empresa credora, que realiza esse procedimento. Caso o pagamento tenha sido efetuado recentemente, o prazo para a retirada da negativação pode ser de até 5 dias úteis. Após esse período, se a restrição ainda constar, será necessário entrar em contato diretamente com a empresa credora para informar a situação e receber as orientações adequadas.",
    },
    {
      id: 7,
      question: "Como faço para não cair em golpes?",
      answer:
        "Para se proteger contra golpes, é fundamental adotar alguns cuidados: Certifique-se de que está em contato direto com a empresa ou instituição financeira responsável pelo serviço ou pela cobrança. Antes de realizar qualquer pagamento via PIX, confira com atenção o nome do beneficiário e confirme que ele corresponde à empresa correta. Importante: não emitimos chave PIX vinculada a pessoa física. Ao efetuar pagamentos por boleto bancário, verifique sempre a autenticidade do beneficiário, assegurando que o valor será destinado à empresa credora ou diretamente à Paschoalotto. Nunca realize pagamentos para pessoas físicas ou empresas desconhecidas. Desconfie de solicitações de dados pessoais ou financeiros sensíveis, como senhas, números de cartão de crédito ou informações bancárias. Empresas idôneas, em regra, não solicitam esse tipo de informação por e-mail, telefone ou mensagens. Em caso de dúvida ou suspeita, procure contato diretamente com a empresa ou instituição financeira por meio dos canais oficiais, evitando clicar em links desconhecidos ou responder a comunicações não solicitadas. Persistindo qualquer incerteza, utilize exclusivamente nossos canais oficiais de atendimento.",
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
          <p className="text-lg font-bold text-gray-800">{question}</p>
          {isOpen ? (
            <FiChevronUp className="w-5 h-5 text-gray-600 " />
          ) : (
            <FiChevronDown className="w-5 h-5 text-gray-600" />
          )}
        </button>

        <div
          id={`accordion-content-${question.id}`}
          className={`overflow-hidden bg-gray-50 group-hover:bg-gray-200 transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-4 bg-white text-gray-600 group-hover:bg-gray-200 transition-all duration-300 ease-in-out">
            <p className="border-t border-gray-300 pt-3 group-hover:bg-gray-200 transition-all duration-300 ease-in-out">
              {parse(answer)}
            </p>
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
