import nortech from "/images/NortechApp.png";
import cryptosync from "/images/cryptosync.png";
import rise from "/images/Rise.png";

import { AiFillGithub } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";

export const Session3 = () => {
  return (
    <div id="Projetos" className="bg-[#0D0D0D] relative">
      <div className="py-14 relative max-w-[1184px] mx-auto flex flex-col gap-14 w-full items-center">
        <h4 className="text-[#098FD3] font-bold text-5xl">Projetos</h4>
        <div className="flex flex-col w-full gap-6 items-center">
          <div className="flex gap-8 items-center">
            <Card
              title="Nortech APP"
              image={nortech}
              text="Este website é uma apresentação da empresa Nortech utilizado para chamar clientes de todo o mundo"
              subTitle="TS - React.Js - Tailwind - CSS"
              git="https://github.com/Leonardo-Borges-AF/nortechAPP-website"
              project="https://nortech.app/"
            />
            <Card
              title="Cryptosync"
              image={cryptosync}
              text="Esta pagina foi projetada para apresentar os serviços e trabalhos da empresa cryptosync-AU"
              subTitle="TS - React.Js - Tailwind - CSS"
              git="https://github.com/Leonardo-Borges-AF/Crypto-Sync"
              project="https://cryptosync-website.vercel.app/"
            />
            <Card
              title="Rise Capital Funds"
              image={rise}
              text="Este website é uma apresentação da empresa Nortech utilizado para chamar clientes"
              subTitle="TS - React.Js - Material UI - CSS"
              git=""
              project=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

type TCard = {
  title: string;
  text: string;
  subTitle: string;
  image: string;
  git: string;
  project: string;
};
const Card = ({ title, image, text, subTitle, git, project }: TCard) => {
  return (
    <div className="relative flex flex-col p-10 items-center gap-10 group bg-[#141414] transition-all duration-500 hover:bg-white hover:bg-opacity-20">
      <h5 className="font-bold text-white text-lg mb-4">{title}</h5>
      <div className="w-[250px] overflow-hidden flex relative">
        <div className="hidden group-hover:flex items-center justify-center gap-4 absolute w-full h-full">
          <a href={git}>
            <button className="bg-transparent">
              <AiFillGithub className="size-16 text-[#098FD3]  transition-all duration-500 hover:text-slate-950" />
            </button>
          </a>
          <a href={project}>
            <button className="bg-transparent">
              <IoEyeSharp className="size-16 text-[#098FD3] text-opacity-100 transition-all duration-500 hover:text-slate-950" />
            </button>
          </a>
        </div>
        <img src={image} />
      </div>
      <p className="text-lg text-center text-white text-opacity-80 max-w-[250px]">
        {text}
      </p>
      <p className="text-white text-opacity-80 text-center text-lg">
        {subTitle}
      </p>
    </div>
  );
};
