import "./header.css";
import { FaInstagram } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="flex fixed backdrop-blur-sm z-50 w-full items-center justify-between px-28 py-[10px] bg-transparent font-main">
      <a
        href=""
        className="font-permanentMarker font-bold text-4xl text-[#098FD3]"
      >
        Leonardo Borges
      </a>
      <div className="flex gap-8 items-center justify-center">
        <a href="" className="text-[#098FD3]">
          Sobre mim
        </a>
        <a href="" className="text-[#098FD3]">
          Projetos
        </a>
        <a href="" className="text-[#098FD3]">
          Conhecimentos
        </a>
        <a href="" className="text-[#098FD3]">
          Fale comigo
        </a>
      </div>

      <div className="flex gap-4">
        <a href="">
          <FaSquareGithub className="text-[#098FD3] size-8" />
        </a>
        <a href="">
          <FaLinkedinIn className="text-[#098FD3] size-8" />
        </a>
        <a href="">
          <FaInstagram className="text-[#098FD3] size-8" />
        </a>
      </div>
    </div>
  );
};
