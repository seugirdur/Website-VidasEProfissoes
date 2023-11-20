import { MenuBar } from "../components/MenuBar";
import Beatriz from "../assets/beatriz.png";
import QSomos2 from "../assets/qsomos2.jpg";
import { Footer } from "../components/Footer";

export const QuemSomos = () => {
  return (
    <div className="flex flex-col">
      <MenuBar />
      <div className="w-full bg-gradient-to-r from-[#FEB922] to-transparent h-12 flex flex-col mt-16 justify-center px-4">
        <p className="uppercase font-bold">● Quem Somos</p>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center pb-20">
        <img src={Beatriz} className="w-1/2 mt-12" />
        <p className="font-bold text-2xl mt-4">BEATRIZ MINTE</p>
        <p className="font-semibold text-lg">RH ESPECIALIZADO</p>
        <p className="px-8 text-justify font-semibold mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in est laborum
        </p>
        <div className="w-48 h-48 mt-8 overflow-hidden rounded-full">
          <img
            src={QSomos2}
            alt="Your Image"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-xl mt-4 font-bold uppercase">
          Seu sucesso é o nosso sucesso!
        </p>
        <p className="px-8 text-justify font-semibold mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in est laborum
        </p>
      </div>
      <Footer />
    </div>
  );
};
