import LogoWhite from "../assets/logowhite.png";

export const Footer = () => {
  return (
    <div className="bg-gradient-to-br items-center flex flex-col p-4 from-black to-zinc-500 ">
      <div className="w-40 h-20 m-2">
        <img src={LogoWhite} alt="" />
      </div>
      <p className="text-white m-2 text-center text-sm uppercase" >CNPJ 38.175.111/0001-01 | ©2023 por Vidas e Profissões. </p>
    </div>
  );
};
