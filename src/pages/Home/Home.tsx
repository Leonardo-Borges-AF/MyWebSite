import { Footer } from "~/components/footer/Footer.component";
import { Header } from "~/components/header/Header.components";
import { Session2 } from "./components";
import { Session1 } from "./components/Session1.components";
import { Session3 } from "./components/Session3.components";
import { Conhecimentos } from "./components/Conhecimentos.components";
import { FaleComigo } from "./components/FaleComigo.components";

export const Home = () => {
  return (
    <div className="w-full relative overflow-hidden">
      <Header />
      <Session1 />
      <Session2 />
      <Session3 />
      <Conhecimentos />
      <FaleComigo />
      <div className="relative">
        <Footer />
      </div>
    </div>
  );
};
