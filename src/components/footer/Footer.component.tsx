import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="flex flex-col bg-[#0d0d0d] relative items-center max-w-[1184px] mx-auto">
      <div className=" flex mx-auto  items-center w-full border-t-2 border-solid border-white border-opacity-30" />
      <div className="flex w-full">
        <div className="py-14 w-full items-center flex justify-between">
          <div className="flex flex-col gap-9 ">
            <h3 className="font-permanentMarker font-bold text-4xl text-white text-opacity-40">
              Leonardo Borges
            </h3>
            <div className="flex flex-col gap-1">
              <h5 className="text-white text-opacity-40">
                ©2025 por Leonardo Borges Arias Ferreira.
              </h5>
              <h5 className="text-white text-opacity-40">
                Todos os direitos reservados.
              </h5>
            </div>
          </div>
          <div className="flex gap-8 ">
            <a
              href="https://www.linkedin.com/in/leonardoborgesaf/"
              className="text-white transition-all duration-500 hover:text-blue-600"
            >
              <FaLinkedinIn className="size-6" />
            </a>
            <a
              href="https://github.com/Leonardo-Borges-AF"
              className="text-white transition-all duration-500 hover:text-black"
            >
              <FaGithub className="size-6" />
            </a>
            <a
              href="https://www.instagram.com/leoborgesaf/"
              className="text-white transition-all duration-500 hover:text-pink-400"
            >
              <FaInstagram className="size-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
