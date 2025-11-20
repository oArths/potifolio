'use client';
import * as I from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';
import { HeaderIcon } from '@/public/images';
const Header = () => {
  let lastScrollTop = 0;

  useEffect(() => {
    const header = document.getElementById('header');
    if (!header) return;
    const handleScroll = () => {
      let scrollTop = window.scrollY || document.documentElement.scrollTop;
      scrollTop > lastScrollTop
        ? (header.style.top = '-80px')
        : (header.style.top = '0');
      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      id="header"
      className="fixed top-0 z-50 flex h-16 w-full flex-row items-center justify-start border-2 border-b-[0.5px] border-950 border-b-400 bg-950/30 px-9 text-50 backdrop-blur-md"
    >
      <div className="flex h-[50] w-[50] items-center justify-center">
        <Image
          src={HeaderIcon}
          alt="Logo"
          className="h-auto w-[50px] object-contain"
        />
      </div>
      <nav className="mx-auto flex w-auto flex-row items-center justify-between text-50">
        <ul className="flex items-center justify-between gap-28 max-md:hidden">
          <li>
            <a className="text-base font-extralight" href="#inicio">
              inicio
            </a>
          </li>
          <li>
            <a className="text-base font-extralight" href="#Trajetoria">
              Trajetoria
            </a>
          </li>
          <li>
            <a className="text-base font-extralight" href="#Projetos">
              Projetos
            </a>
          </li>
          <li>
            <a className="text-base font-extralight" href="#Conatato">
              Conatato
            </a>
          </li>
        </ul>
      </nav>
      <div className=" ">
        <button className="hidden text-base font-extralight text-50 md:flex">
          PTB
        </button>
        <button className="flex text-base font-extralight text-50 md:hidden">
          <I.Menu size={32} color="#ffff" />
        </button>
      </div>
    </header>
  );
};

export default Header;
