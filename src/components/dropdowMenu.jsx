
import { createContext, useContext, useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "../lib/utils"; 
import { Slot } from "@radix-ui/react-slot";

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

export function DropdownMenu({ className, children, ...props }) {
  return (
    <DropdownMenuProvider>
      <DropdownMenuContainer className={className} {...props}>
        {children}
      </DropdownMenuContainer>
    </DropdownMenuProvider>
  );
}

function DropdownMenuContainer({ className, children, ...props }) {
  const { setIsOpen } = useDropdownMenu();
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <div
      ref={menuRef}
      className={cn("relative inline-block text-left", className)}
      {...props}
    >
      {children}
    </div>
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
    <motion.ul
      className={cn(
        "absolute top-full mt-2 left-1/2 -translate-x-1/2", 
        "z-50",
        "min-w-[180px] p-2 rounded-xl bg-white border border-gray-100 shadow-xl",
        "flex flex-col gap-1",
        isOpen ? "pointer-events-auto" : "pointer-events-none",
        className
      )}
      variants={contentVariants}
      initial="hidden"
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
    const { setIsOpen } = useDropdownMenu();

  return (
    <motion.li variants={itemVariants} transition={{ duration: 0.2 }}>
      <Comp
        className={cn(
          "w-full flex items-center gap-2 rounded-lg px-3 py-1 text-sm text-gray-600 transition-colors text-left",
          "hover:bg-gray-50 hover:text-black",
          className
        )}
        onClick={() => setIsOpen(false)}

        {...props}
      >
        {children}
      </Comp>
    </motion.li>
  );
}

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