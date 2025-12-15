import clsx from "clsx";
import { NavHeaderComponent } from "./NavHeaderComponent";
import { IoCloseOutline } from "react-icons/io5";

export function HeaderModal({ isModalOpen, setIsModalOpen }) {
  return (
    <>
      <div
        className={clsx(
          "fixed inset-0 bg-black/50 transition-all ease-in-out duration-700",
          {
            "visible opacity-100": isModalOpen,
            "invisible opacity-0": !isModalOpen,
          }
        )}
        onClick={setIsModalOpen}
      />
      <div
        aria-modal={true}
        aria-label="Modal de Navegação"
        className="md:invisible flex bg-white justify-around fixed right-0 z-50 w-2/4 max-sm:w-full h-full transition-all ease-in-out duration-700"
        style={{
          transform: isModalOpen ? `translate(0px)` : `translate(100%)`,
        }}
      >
        <NavHeaderComponent />
        <button
          className="w-max h-max
            hover:cursor-pointer pt-3
        "
          onClick={setIsModalOpen}
          aria-label="close modal"
        >
          <IoCloseOutline size={28} />
        </button>
      </div>
    </>
  );
}
