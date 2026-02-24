'use client';
import { useState } from 'react';
import * as I from 'lucide-react';

interface item {
  repo: string;
  figma: string;
  demo: string;
}
interface DropDownProps {
  DropdownItem: item;
}
export default function DropDown(data: DropDownProps) {
  const [dropdown, setDropDown] = useState(false);

  const handlerClick = (link: string) => {
    setDropDown(false);
    window.open(link, '_blank');
  };
// TODO: adicionar div com iset para caso se clique fora do dropdown ele feche usar de ref oq tem no chartool mars
  return (
    <div className="relative">
      <button
        onClick={() => setDropDown(!dropdown)}
        className="rounded-lg border border-100/40 px-2 md:px-4 py-2 text-sm font-light lg:text-base"
      >
        Explorar Projeto
      </button>

      {dropdown && (
        <>
          <div
            className="fixed inset-0 z-20 bg-rose-100"
            onClick={() => setDropDown(false)}
          />

          <div className="absolute top-12 w-full z-30">
            <ul className="flex h-fit w-full flex-col items-start justify-start gap-2 rounded-md border-100 bg-925 p-2">
              {data.DropdownItem.repo.length > 0 && (
                <li
                  onClick={() => handlerClick(data.DropdownItem.repo)}
                  className="flex w-full cursor-pointer flex-row items-start justify-start gap-2 rounded-lg p-2 text-base hover:bg-910"
                >
                  <I.Github size={22} />
                  Repositorio
                </li>
              )}
              {data.DropdownItem.figma.length > 0 && (
                <li
                  onClick={() => handlerClick(data.DropdownItem.figma)}
                  className="flex w-full cursor-pointer flex-row items-start justify-start gap-2 rounded-lg p-2 text-base hover:bg-910"
                >
                  <I.Figma size={22} />
                  Prototipo
                </li>
              )}
              {data.DropdownItem.demo.length > 0 && (
                <li
                  onClick={() => handlerClick(data.DropdownItem.demo)}
                  className="flex w-full cursor-pointer flex-row items-start justify-start gap-2 rounded-lg p-2 text-base hover:bg-910"
                >
                  <I.BadgeCheck size={22} />
                  Demo
                </li>
              )}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
