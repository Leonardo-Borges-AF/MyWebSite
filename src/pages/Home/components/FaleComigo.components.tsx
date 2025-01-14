import { IoIosMail } from "react-icons/io";
import { IoIosPhonePortrait } from "react-icons/io";
import cel from "/images/cel.png";

import "./FaleComigo.css";
import "./Session1.css";

export const FaleComigo = () => {
  return (
    <div id="FaleComigo">
      <div className="flex py-24 bg-[#0d0d0d] relative items-center">
        <div className="max-w-[1184px] flex mx-auto justify-between items-center w-full px-20">
          <div className="flex flex-col gap-4">
            <h3 className="text-[#098FD3] font-bold text-3xl">Fale Comigo!</h3>
            <div className="flex flex-col">
              <a href="mailto:leoborgesaf@hotmail.com">
                <button className="bg-transparent flex items-center gap-3 p-4 hover:bg-white hover:bg-opacity-20 transition-all duration-500">
                  <IoIosMail className="size-8" />
                  <p className="text-base text-white text-opacity-65">
                    leoborgesaf@hotmail.com
                  </p>
                </button>
              </a>
              <a href="https://wa.me/5516993729232?text=Olá">
                <button className="bg-transparent flex items-center gap-3 p-4 hover:bg-white hover:bg-opacity-20 transition-all duration-500">
                  <IoIosPhonePortrait className="text-[#43b234] size-10" />
                  <p className="text-base text-white text-opacity-65">
                    +55 16 993729232
                  </p>
                </button>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-8">
            <img
              src={cel}
              className="w-[130px] h-[340px] shadow-lg animate-float"
            />
            <div className="sombra bg-black " />
          </div>
        </div>
      </div>
    </div>
  );
};
