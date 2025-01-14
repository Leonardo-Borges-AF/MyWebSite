import ts from "/images/typescript.png";
import rn from "/images/reactnative.png";
import tw from "/images/tailwind.png";
import docker from "/images/docker.png";
import node from "/images/nodejs.png";
import next from "/images/nextjs.png";
import rust from "/images/rust.png";
import solidity from "/images/solidyt.png";
import stellar from "/images/stellar.png";
import MUI from "/images/MUI.png";
import git from "/images/git.png";
import { CSSProperties } from "react";

export const Conhecimentos = () => {
  return (
    <div
      id="Conhecimentos"
      className="flex flex-col py-24 gap-20 bg-[#141414] relative items-center"
    >
      <h3 className="font-bold text-5xl text-[#098FD3]">Conhecimentos</h3>
      <div className="max-w-[1184px] mx-auto flex flex-col gap-16">
        <div className="flex gap-16">
          <CardConhecimento
            title="TypeScript"
            image={ts}
            text="TypeScript é uma linguagem de programação desenvolvida pela Microsoft, que é um superset do JavaScript. Isso significa que qualquer código JavaScript válido também é código TypeScript válido."
          />
          <CardConhecimento
            title="ReactNative"
            image={rn}
            text="React Native é um framework de código aberto desenvolvido pelo Facebook que permite desenvolver aplicações móveis usando JavaScript. Ele possibilita que você use o mesmo código para criar aplicativos para Android e iOS."
          />
          <CardConhecimento
            title="React.JS"
            image={rn}
            text="React.js é uma biblioteca JavaScript amplamente utilizada para criar interfaces de usuário interativas e dinâmicas para aplicativos da web."
          />
        </div>
        <div className="flex gap-16">
          <CardConhecimento
            title="Tailwind CSS"
            image={tw}
            text="Tailwind CSS é um framework de CSS que facilita a criação de interfaces de usuário modernas e responsivas."
            imgstyle={{ width: "120px", height: "70px", marginBottom: "30px" }}
          ></CardConhecimento>
          <CardConhecimento
            title="Docker"
            image={docker}
            text="Docker é uma plataforma de software que permite criar, testar e implantar aplicações rapidamente através de contêineres. Contêineres são ambientes leves e portáteis que embalam o código da aplicação e todas as suas dependências"
          />
          <CardConhecimento
            title="Node.JS"
            image={node}
            text="Node.js é um ambiente de execução JavaScript de código aberto, que permite que você execute JavaScript no lado do servidor."
          />
        </div>
        <div className="flex gap-16">
          <CardConhecimento
            title="Next.JS"
            image={next}
            text="Next.js é um framework de desenvolvimento web front-end React de código aberto que permite a criação de aplicativos web de forma rápida e eficiente, com suporte para renderização tanto do lado do cliente quanto do lado do servidor."
            imgstyle={{ width: "150px", height: "100px" }}
          ></CardConhecimento>
          <CardConhecimento
            title="Solidyt"
            image={solidity}
            text="Solidity é uma linguagem de programação de alto nível, projetada especificamente para desenvolver contratos inteligentes que rodam na Ethereum Virtual Machine (EVM)"
          />
          <CardConhecimento
            title="Material-UI"
            image={MUI}
            text="Material-UI é uma biblioteca de componentes de interface de usuário (UI) para o React. É baseada nos princípios do Material Design do Google, que é um conjunto de diretrizes para o design de interfaces visuais e de interação."
          />
        </div>
        <div className="flex gap-16">
          <CardConhecimento
            title="Rust"
            image={rust}
            text="Rust é uma linguagem de programação de sistemas projetada para ser segura, rápida e concorrente. É conhecida por suas características únicas que ajudam a evitar erros comuns de programação, especialmente aqueles relacionados a segurança de memória."
          ></CardConhecimento>
          <CardConhecimento
            title="Stellar"
            image={stellar}
            text="Stellar é uma plataforma de blockchain projetada para facilitar transações financeiras rápidas, baratas e seguras em escala global"
          />
          <CardConhecimento
            title="Git"
            image={git}
            text="Git é um sistema de controle de versão distribuído, amplamente utilizado para rastrear mudanças em arquivos de código-fonte durante o desenvolvimento de software."
          />
        </div>
      </div>
    </div>
  );
};

type TCardConhecimento = {
  title: string;
  text: string;
  image: string;
  imgstyle?: CSSProperties;
};
const CardConhecimento = ({
  title,
  image,
  text,
  imgstyle,
}: TCardConhecimento) => {
  return (
    <div className="p-11 flex flex-col gap-6 max-w-[330.66px] bg-[#0D0D0D] transition-all duration-500 hover:bg-white hover:bg-opacity-20 drop-shadow-md hover:drop-shadow-2xl rounded-2xl">
      <img src={image} className="size-[100px]" style={imgstyle} />
      <p className="text-white  font-bold text-2xl">{title}</p>
      <p className="text-base text-white text-opacity-65 leading-[1.3]">
        {text}
      </p>
    </div>
  );
};
