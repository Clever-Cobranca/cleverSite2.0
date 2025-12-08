"use client"; // Mantenha se estiver usando Next.js, se for Vite puro não faz mal deixar

import { createContext, useContext, useState } from "react";
import { motion } from "motion/react";
import { cn } from "../lib/utils"; // Ajuste o caminho se necessário
import { Slot } from "@radix-ui/react-slot";

// Configuração das animações
const contentVariants = {
  hidden: {
    clipPath: "inset(10% 50% 90% 50% round 12px)",
  },
  show: {
    clipPath: "inset(0% 0% 0% 0% round 12px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.5,
      delayChildren: 0.15,
      staggerChildren: 0.1,
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

// Componente Principal (Wrapper)
export function DropdownMenu({ className, children, ...props }) {
  return (
    <DropdownMenuProvider>
      <nav
        className={cn("", className)}
        {...props}
      >
        {children}
      </nav>
    </DropdownMenuProvider>
  );
}

// Botão que abre o menu
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
        "flex w-full max-w-[300px] items-center justify-between rounded-xl bg-main-secondary px-3 py-2 ease-out",
        "duration-200 focus-visible:border-border focus-visible:outline-none active:scale-[0.97]",
        className
      )}
      onClick={() => setIsOpen((prev) => !prev)}
      {...props}
    >
      {children}

    </Comp>
  );
}

// Conteúdo (Lista) do menu
export function DropdownMenuContent({
  children,
  floating = false,
  className,
  ...props
}) {
  const { isOpen } = useDropdownMenu();

  return (
    <motion.ul
      className={cn(
        "z-[1] mx-auto flex w-full max-w-[200px] flex-col gap-1.5 rounded-xl p-1",
        "border border-border bg-main-secondary",
        isOpen ? "pointer-events-auto" : "pointer-events-none",
        floating ? "absolute" : "relative",
        className
      )}
      variants={contentVariants}
      initial="hidden"
      animate={isOpen ? "show" : "hidden"}
      exit="hidden"
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.ul>
  );
}

// Item individual do menu
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
          "flex w-full items-center gap-2 rounded-lg border border-transparent py-1 text-primary-muted transition-colors",
          "hover:text-primary-foreground focus-visible:border-border focus-visible:text-primary-foreground focus-visible:outline-none",
          "select-none px-1.5 hover:bg-main-foreground/60 focus-visible:bg-main-foreground/60",
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    </motion.li>
  );
}

// --- Contexto para gerenciar o estado Aberto/Fechado ---

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
  if (!context) {
    throw new Error("useDropdownMenu deve ser usado dentro de um DropdownMenuProvider");
  }
  return context;
}