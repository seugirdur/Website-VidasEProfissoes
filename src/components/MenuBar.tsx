import { List } from "phosphor-react";
import LogoIcon from "../assets/icon.png";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";

export const MenuBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {showMenu && <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />}
      <div className="bg-white fixed z-10 w-full h-16 flex flex-row items-center justify-center">
        <button onClick={() => setShowMenu(!showMenu)} type="button">
          <List width={40} height={40} className="absolute left-3 top-3" />
        </button>
        <a href="/" className="flex flex-row">
          <img src={LogoIcon} className="w-8 mx-2" />
          <div className="flex flex-col text-center uppercase">
            <h2 className="font-bold text-xl tracking-tight">
              Vidas e Profissões
            </h2>
            <h3 className="font-bold text-sm text-gray-700 tracking-tight">
              Recursos Humanos
            </h3>
          </div>
        </a>
      </div>
    </>
  );
};
