/* eslint-disable @typescript-eslint/no-explicit-any */
import bitcoin from "/images/bitcoin.png";

export const Session2 = () => {
  return (
    <div id="SobreMim" className="bg-[#141414] relative overflow-hidden">
      <div className="py-11 relative max-w-[1184px] mx-auto flex justify-between w-full items-center">
        <img
          src={bitcoin}
          alt="bitoin image"
          className="hover:rotate-[360deg] transition-all duration-700"
        />
        <div className="flex flex-col gap-12 w-[550px]">
          <h4 className="text-[#098FD3] font-bold text-5xl ">Sobre mim</h4>
          <p className="text-xl text-[#999999] font-medium">
            Desenvolvedor apaixonado por tecnologia, especializado em aplicações
            Web e Web3. Com experiência em front-end, back-end e blockchain, meu
            foco é criar soluções inovadoras e eficientes, sempre buscando a
            melhor experiência para o usuário. Vamos construir o futuro juntos?
          </p>
        </div>
      </div>
    </div>
  );
};
