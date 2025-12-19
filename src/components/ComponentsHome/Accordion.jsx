import { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const Accordion = () => {
  // State to manage the currently open item's ID
  const [openItemId, setOpenItemId] = useState(null);

  const accordionData = [
    {
      id: 1,
      question: "What is React?",
      answer:
        "React is a free and open-source front-end JavaScript library for building user interfaces based on components.",
    },
    {
      id: 2,
      question: "What is Tailwind CSS?",
      answer:
        "Tailwind CSS is a utility-first CSS framework for building custom user interfaces quickly and efficiently.",
    },
    {
      id: 3,
      question: "How do I install Tailwind CSS?",
      answer:
        "You need to install it via npm or yarn and configure your project files. Refer to the official documentation for detailed steps.",
    },
    {
      id: 4,
      question: "What is an Accordion component?",
      answer:
        "An Accordion component is a UI element that allows users to expand and collapse sections of content, typically used for FAQs or menus.",
    },
    {
      id: 5,
      question: "How do I create an Accordion in React?",
      answer:
        "You can create an Accordion in React by managing state to track which item is open and conditionally rendering content based on that state.",
    },
    {
      id: 6,
      question: "Can I customize the styles of the Accordion?",
      answer:
        "Yes, you can customize the styles of the Accordion using CSS or utility-first frameworks like Tailwind CSS to match your design requirements.",
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
              {answer}
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
