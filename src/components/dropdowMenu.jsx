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
import { motion as Motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";
import { Slot } from "@radix-ui/react-slot";

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 },
};

export function DropdownMenu({
  className,
  isActive = false,
  children,
  ...props
}) {
  return (
    <DropdownMenuProvider>
      <DropdownMenuContainer
        isActive={isActive}
        className={className}
        {...props}
      >
        {children}
      </DropdownMenuContainer>
    </DropdownMenuProvider>
  );
}

function DropdownMenuContainer({ className, isActive, children, ...props }) {
  const { setIsOpen, isOpen } = useDropdownMenu();
  const menuRef = useRef(null);
  const triggerChild = Children.toArray(children).find(
    (child) => isValidElement(child) && child.type === DropdownMenuTrigger,
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsOpen]);

  return (
    <>
      <LiquidGlassFilter />
      <div
        ref={menuRef}
        className={cn("relative inline-block w-max text-left", className)}
        {...props}
      >
        <div aria-hidden="true" className="invisible pointer-events-none">
          {triggerChild}
        </div>
        <div
          className={cn(
            "absolute top-0 left-0 z-50 w-max overflow-hidden rounded-lg",
            (isOpen || isActive) && "backdrop-liquid-glass",
          )}
        >
          {children}
        </div>
      </div>
    </>
  );
}

export function DropdownMenuTrigger({
  asChild = false,
  children,
  isActive = false,
  className,
  ...props
}) {
  const { isOpen, setIsOpen } = useDropdownMenu();
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      type="button"
      className={cn(
        "flex items-center gap-2  transition-colors cursor-pointer",
        "text-xl font-medium text-white/90",
        (isOpen || isActive) && "px-3.5 py-0.5 text-orange-primary",
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
        <Motion.ul
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={{
            hidden: { opacity: 0, height: 0, padding: 0, y: -8 },
            show: { opacity: 1, height: "auto", y: 0 },
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
            staggerChildren: 0.06,
          }}
          className={cn(
            "flex w-max min-w-full flex-col overflow-hidden",
            className,
          )}
          {...props}
        >
          {children}
        </Motion.ul>
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
    <Motion.li
      variants={itemVariants}
      transition={{ duration: 0.2 }}
      className="first:pt-2 first:pb-1 last:pb-2"
    >
      <Comp
        className={cn(
          "w-full flex items-center rounded-lg px-3 text-xl text-black-primary/90 transition-colors text-left",
          "hover:text-orange-primary hover:bg-white/5",
          className,
        )}
        onClick={() => setIsOpen(false)}
        {...props}
      >
        {children}
      </Comp>
    </Motion.li>
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
