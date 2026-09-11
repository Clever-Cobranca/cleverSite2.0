import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  Children,
  isValidElement,
} from "react";
import LiquidGlassFilter from "../components/LiquidGlassFilter";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";
import { Slot } from "@radix-ui/react-slot";

const sharedTransition = { type: "spring", bounce: 0, duration: 0.5 };

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 },
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsOpen]);

  // Isola só o Trigger dos children, pra usar como molde do espaçador
  const triggerChild = Children.toArray(children).find(
    (child) => isValidElement(child) && child.type === DropdownMenuTrigger,
  );

  return (
    <>
      <LiquidGlassFilter />
      <div
        ref={menuRef}
        className={cn("relative w-full inline-block text-left", className)}
        {...props}
      >
        {/* Espaçador: mesmo trigger, mas invisível — reserva a largura/altura
            no fluxo do header. "invisible" (não "hidden") preserva o espaço. */}
        <div aria-hidden="true" className="invisible pointer-events-none">
          {triggerChild}
        </div>

        {/* Peça de vidro real: sai do fluxo e flutua sobre o espaçador,
            então crescer pra baixo não afeta mais ninguém no header */}
        <motion.div
          layout
          transition={sharedTransition}
          className={cn(
            "absolute top-0 left-0 z-50 w-max rounded-lg",
            "backdrop-liquid-glass border bg-neutral-900/40 border-white/10",
          )}
        >
          <div className="overflow-hidden rounded-3xl">{children}</div>
        </motion.div>
      </div>
    </>
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
      type="button"
      className={cn(
        "flex items-center gap-2 px-5 py-0.5 transition-all cursor-pointer",
        "sm:text-[18px] text-sm font-medium text-white/90",
        isOpen && "text-orange-primary",
        "hover:text-orange-primary active:scale-95",
        className,
      )}
      onClick={() => setIsOpen((prev) => !prev)}
      {...props}
    >
      {children}
    </Comp>
  );
}

export function DropdownMenuContent({ children, className, ...props }) {
  const { isOpen } = useDropdownMenu();

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.ul
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ staggerChildren: 0.06, delayChildren: 0.08 }}
          className={cn(
            "w-max min-w-full p-2 flex flex-col gap-1",
            "border-t border-white/10",
            className,
          )}
          {...props}
        >
          {children}
        </motion.ul>
      )}
    </AnimatePresence>
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
          "w-full flex items-center gap-2 rounded-lg px-3 py-1.5 text-md text-orange-primary/90 transition-colors text-left",
          "hover:text-orange-primary hover:bg-white/5",
          className,
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
