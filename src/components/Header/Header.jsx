import { useState } from "react";
import Logo from "../../assets/Logo.png";
import "../../global.css";
import { HeaderModal } from "./HeaderModal";
import { NavHeaderComponent } from "./NavHeaderComponent";
import { IoMenuOutline } from "react-icons/io5";

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <header className="pt-4 flex items-center-safe justify-around max-sm:justify-between pl-16 pr-16 w-full border border-black/20 fixed bg-white">
        <img src={Logo} />
        <IoMenuOutline
          aria-label="Abrir Modal"
          size={32}
          className="hover:cursor-pointer md:hidden"
          onClick={() => setIsModalOpen(true)}
        />

        <div className="max-md:hidden">
          <NavHeaderComponent />
        </div>
      </header>

      <HeaderModal isModalOpen={isModalOpen} setIsModalOpen={handleModal} />
    </>
  );
}
