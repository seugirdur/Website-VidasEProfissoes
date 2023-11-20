import { MenuBar } from "../components/MenuBar";
import Servicos1 from "../assets/servicos1.png";
import Servicos2 from "../assets/servicos2.png";
import { Footer } from "../components/Footer";

export const Servicos = () => {
  return (
    <div className="flex flex-col">
      <MenuBar />
      <div className="w-full bg-gradient-to-r from-[#FEB922] to-transparent h-12 flex flex-col mt-16 justify-center px-4">
        <p className="uppercase font-bold">● Serviços</p>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center pb-20">
        <p className="font-bold text-xl text-center uppercase px-4 mt-4">
          Do currículo à contratação
        </p>



        <div className="w-3/5 h-2 mt-6 bg-gradient-to-r from-[#FEB922] to-transparent"></div>
        <img src={Servicos1} className="w-3/5 " />
        <button className="uppercase py-2 px-4 font-bold text-white bg-[#FEB922]  items-center rounded-full mt-6">
          Acesssar o ebook
        </button>
        <p className="px-8 text-justify font-semibold mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in est laborumLorem ipsum dolor sit 
          laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in est laborumLorem ipsum dolor sit 
        </p>
        
        <p className="font-bold text-xl text-center uppercase px-8 mt-4">
          Desenvolvimento Profissional 360
        </p><div className="w-3/5 h-2 mt-6 bg-gradient-to-r from-[#FEB922] to-transparent"></div>
        <img src={Servicos2} className="w-3/5 " />
        <button className="uppercase py-2 px-4 font-bold text-white bg-[#000]  items-center rounded-full mt-6">
          Acesssar a mentoria
        </button>
        <p className="px-8 text-justify font-semibold mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in est laborumLorem ipsum dolor sit 
          laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in est laborumLorem ipsum dolor sit 
        </p>
      </div>
      <Footer />
    </div>
  );
};
