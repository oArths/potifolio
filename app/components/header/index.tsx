import * as I from "lucide-react";
import Image from "next/image";
const Header = () => {
  return (
    <header className="text-50 flex flex-row items-center justify-start      p-4 border-2 h-20 border-950 border-b-400 backdrop-blur-sm border-b-[0.5px]">
      <Image src="./images/favicon.svg" alt="Logo" width={50} height={50} />
      <nav className="text-50 flex  w-auto  flex-row items-center justify-between p-4">
        <ul className="flex items-center gap-5 justify-between">
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
            <a className="font-extralight text-base" href="#Projetos">
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
      <div className=" flex md:hidden">
        <I.Menu size={32} color="#ffff" />
      </div>
    </header>
  );
};

export default Header;
