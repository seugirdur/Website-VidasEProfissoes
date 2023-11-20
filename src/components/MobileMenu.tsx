import { Buildings, Envelope, User, Users } from "phosphor-react";
import { Link } from "react-router-dom";

interface MobileMenuProps {
  showMenu: boolean;
  setShowMenu: (showMenu: boolean) => void;
}

export const MobileMenu = ({ showMenu, setShowMenu }: MobileMenuProps) => {


  return (
    <div
    className={`w-screen h-screen fixed top-0 left-0 z-10 bg-black bg-opacity-50 transform transition-transform ease-in-out ${
      showMenu ? "translate-x-0" : "-translate-x-full"
    }`}
    onClick={() => setShowMenu(!showMenu)}
  >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white font-opensans absolute top-16 w-3/5 h-[calc(100vh-20px)] z-10 flex flex-col"
      >
        <div>
          <button
            onClick={() => console.log("clicked")}
            className="flex flex-row w-full font-bold uppercase px-4 py-4 items-center"
          >
            <Buildings className="mr-2" width={32} height={32} weight="fill" />
            <a href={"/quem-somos"}>Quem Somos</a>
          </button>
          <button className="flex flex-row w-full font-bold uppercase px-4 py-4 items-center">
            <User className="mr-2" width={32} height={32} weight="fill" />
            <a href={"/vagas"}>Vagas</a>
          </button>
          <button className="flex flex-row w-full font-bold uppercase px-4 py-4 items-center">
            <Users className="mr-2" width={32} height={32} weight="fill" />
            <a href={"/servicos"}>Serviços</a>
          </button>
          <button className="flex flex-row w-full font-bold uppercase px-4 py-4 items-center">
            <Envelope className="mr-2" width={32} height={32} weight="fill" />
            <a href={"/contato"}>Contato</a>
          </button>
        </div>
        <div className="flex flex-col mt-auto mb-20">
          <p className="text-gray-600 text-center px-4 uppercase flex flex-col">
            CNPJ 38.175.111/0001-01 | ©2023 por Vidas e Profissões.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
