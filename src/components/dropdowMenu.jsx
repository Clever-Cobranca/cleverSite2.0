
import { createContext, useContext, useState } from "react";
import { motion } from "motion/react";
import { cn } from "../lib/utils"; 
import { Slot } from "@radix-ui/react-slot";

// --- 1. VOLTANDO PARA A ANIMAÇÃO ORIGINAL (ClipPath + Blur) ---
const contentVariants = {
  hidden: {
    clipPath: "inset(10% 50% 90% 50% round 12px)", // Começa pequeno no centro
  },
  show: {
    clipPath: "inset(0% 0% 0% 0% round 12px)", // Abre para o tamanho total
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.5,
      delayChildren: 0.15,
      staggerChildren: 0.1, // Efeito cascata nos itens
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
    filter: "blur(20px)",
  },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
  },
};

// --- Componentes ---

export function DropdownMenu({ className, children, ...props }) {
  return (
    <DropdownMenuProvider>
      <div
        className={cn("relative inline-block text-left", className)}
        {...props}
      >
        {children}
      </div>
    </DropdownMenuProvider>
  );
}

export function DropdownMenuTrigger({
  asChild = false,
  children,
  className,
  ...props
}) {
  const { isOpen, setIsOpen } = useDropdownMenu();
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        "flex items-center gap-2 rounded-xl px-3 transition-all cursor-pointer",
        "hover:bg-gray-100/50 active:scale-95",
        className
      )}
      onClick={() => setIsOpen((prev) => !prev)}
      {...props}
    >
      <span className="text-[18px] font-medium">{children}</span>
      <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.span>
    </Comp>
  );
}

export function DropdownMenuContent({
  children,
  className,
  ...props
}) {
  const { isOpen } = useDropdownMenu();

  return (
    // NOTA: Removi o <AnimatePresence> aqui porque a animação de clipPath 
    // funciona melhor controlando o estado 'animate' direto no componente.
    <motion.ul
      className={cn(
        // POSICIONAMENTO (Mantido o que consertou o layout):
        "absolute top-full mt-2 left-1/2 -translate-x-1/2", 
        "z-50",
        
        // ESTILO VISUAL:
        "min-w-[180px] p-2 rounded-xl bg-white border border-gray-100 shadow-xl",
        "flex flex-col gap-1",
        
        // INTERATIVIDADE (Importante para clipPath):
        isOpen ? "pointer-events-auto" : "pointer-events-none", // Impede clique quando fechado
        className
      )}
      variants={contentVariants}
      initial="hidden"
      // Aqui controlamos se mostra ou esconde baseado no isOpen
      animate={isOpen ? "show" : "hidden"} 
      {...props}
    >
      {children}
    </motion.ul>
  );
}

export function DropdownMenuItem({
  asChild = false,
  children,
  className,
  ...props
}) {
  const Comp = asChild ? Slot : "button";

  return (
    <motion.li variants={itemVariants} transition={{ duration: 0.2 }}>
      <Comp
        className={cn(
          "w-full flex items-center gap-2 rounded-lg px-3 py-1 text-sm text-gray-600 transition-colors text-left",
          "hover:bg-gray-50 hover:text-black",
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    </motion.li>
  );
}

// --- Contexto ---

const Context = createContext({});

function DropdownMenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Context.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </Context.Provider>
  );
}

function useDropdownMenu() {
  const context = useContext(Context);
  if (!context) throw new Error("useDropdownMenu error");
  return context;
}