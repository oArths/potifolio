"use client";
import * as I from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { HeaderIcon } from "@/public/images";
const Header = () => {
  let lastScrollTop = 0;

  useEffect(() => {
    const header = document.getElementById("header");
    if (!header) return;
    const handleScroll = () => {
      let scrollTop = window.scrollY || document.documentElement.scrollTop;
      scrollTop > lastScrollTop ? header.style.top = "-80px" : header.style.top = "0";
      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      id="header"
      className="text-50 flex flex-row items-center justify-start px-9 border-2 bg-950/30  backdrop-blur-md  z-50 top-0 fixed w-full h-16 border-950 border-b-400  border-b-[0.5px]  "
    >
      <div className=" flex items-center justify-center w-[50] h-[50]">
        <Image
          src={HeaderIcon}
          alt="Logo"
          className="object-contain w-[50px] h-auto"
        />
      </div>
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
