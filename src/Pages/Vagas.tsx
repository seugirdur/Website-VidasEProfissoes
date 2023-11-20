import { MenuBar } from "../components/MenuBar";
import VagasImg from "../assets/vagas.png";
import QSomos2 from "../assets/qsomos2.jpg";
import { Footer } from "../components/Footer";

export const Vagas = () => {
  return (
    <div className="flex flex-col">
      <MenuBar />
      <div className="w-full bg-gradient-to-r from-[#FEB922] to-transparent h-12 flex flex-col mt-16 justify-center px-4">
        <p className="uppercase font-bold">● Vagas</p>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center pb-20">
        <p className="font-bold text-3xl uppercase px-4 mt-4">
          Recrutamento e Seleção
        </p>

        <button className="uppercase py-2 px-4 font-bold text-white bg-[#FEB922]  items-center rounded-full mt-6">
          Acesssar o whatsapp
        </button>
        <div className="w-full h-2 mt-6 bg-gradient-to-r from-[#FEB922] to-transparent"></div>
        <img src={VagasImg} className="w-full " />
        <p className="px-8 text-justify font-semibold mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in est laborumLorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in est laborumLorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in est laborum
        </p>
        <button className="uppercase py-2 px-4 font-bold text-white bg-[#000000]  items-center rounded-full mt-6">
          Acesssar o whatsapp
        </button>
      </div>
      <Footer />
    </div>
  );
};
