import img from "/images/Myimage.jpg";
import "./Session1.css";

export const Session1 = () => {
  return (
    <div className="bg-[#0D0D0D]">
      <div className="bg-[#0D0D0D] flex relative pb-[188px] w-full md:w-[1184px] pt-[250px] m-auto px-4 md:px-0 z-10 items-center">
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-6">
              <div className="flex gap-2">
                <h4 className="uppercase text-[#098FD3] font-bold">
                  Hello world
                </h4>
              </div>
              <h2 className="text-white text-5xl font-bold font-main">
                Eu sou Leonardo,
              </h2>
              <p className="text-white text-opacity-65 text-3xl font-semmibold typing-effect">
                Desenvolvedor Web e Web3.
              </p>
            </div>
            <button className="px-[22px] py-[10px] bg-transparent border-[3px] border-solid border-[#098FD3] rounded-none items-center uppercase text-base w-fit text-[#098FD3] font-bold">
              Fale comigo
            </button>
          </div>
          <div className="rounded-full size-[420px] relative overflow-hidden animate-float">
            {" "}
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
