import * as I from "lucide-react";
import Image from "next/image";
const Header = () => {
  return (
    <header className="text-50 flex flex-row items-center justify-start px-9 border-2  w-full h-16 border-950 border-b-400 backdrop-blur-sm border-b-[0.5px]">
      <Image src="./images/favicon.svg" alt="Logo" width={50} height={50} />
      <nav className="text-50 flex  w-auto mx-auto flex-row items-center justify-between ">
        <ul className="flex items-center max-md:hidden gap-28 justify-between">
          <li>
            <a className="font-extralight text-base" href="#inicio">
              inicio
            </a>
          </li>
          <li>
            <a className="font-extralight text-base" href="#Trajetoria">
              Trajetoria
            </a>
          </li>
          <li>
            <a
              className="font-extralight text-base"
              href="#Projetos"
            >
              Projetos
            </a>
          </li>
          <li>
            <a className="font-extralight text-base" href="#Conatato">
              Conatato
            </a>
          </li>
        </ul>
      </nav>
      <div className=" ">
        <button className="hidden md:flex font-extralight text-base text-50">
          PTB
        </button>
        <button className=" flex md:hidden font-extralight text-base text-50">
          <I.Menu size={32} color="#ffff" />
        </button>
      </div>
    </header>
  );
};

export default Header;
