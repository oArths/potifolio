import Image from 'next/image';
import { ProjetosSDD } from '@/public/images';
import { handlerColor } from '@/app/utils/colors';
export default function Projetos() {
  return (
    <section className="mt-[30dvh] flex h-full w-full flex-col items-center justify-center overflow-hidden py-10">
      <div className="flex h-full w-[90%] flex-col items-start justify-start gap-10">
        <h2 className="font-Draper text-4xl tracking-[1.57rem] text-50">
          Projetos
        </h2>
        <article className="relative mt-24 flex h-[90vh] flex-col items-start justify-center text-50">
          <div className="absolute right-[75%] top-48 z-10 aspect-square h-[75vw] w-[75vw] animate-morphBlue rounded-full bg-50 p-0 opacity-40 blur-3xl" />

          <div className="z-20 flex h-auto flex-col items-center gap-4 md:flex-row">
            <div className="group relative h-full w-full rounded-md bg-900/30">
              <h3 className="absolute z-20 h-[30%] w-full pl-14 pt-14 text-4xl font-medium">
                <span className="absolute inset-0 bg-gradient-to-b from-950/80 to-950/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                <span className="relative z-10 text-50">Tabla Syncssf</span>
              </h3>
              <Image
                src={ProjetosSDD}
                alt="Imagem do projeto"
                className="h-full w-full object-contain opacity-90 transition duration-300 ease-linear group-hover:opacity-100"
              />
            </div>
            <div className="flex h-fit flex-col gap-2 md:max-w-[50%]">
              <div className="flex h-fit w-full flex-col items-start justify-center rounded-md border border-white-200/20 bg-950/40 px-8 py-4 backdrop-blur-md md:py-9">
                <nav className="flex w-full items-center justify-between">
                  <div className="flex flex-col items-start justify-center">
                    <h3 className="text-base lg:text-lg">
                      Desenvolvedor Full- Stack
                    </h3>
                    <div className="flex flex-row items-start justify-center gap-16">
                      <p className="text-base font-extralight text-200 lg:text-lg">
                        6+ meses
                      </p>
                      <p className="text-base font-extralight text-200 lg:text-lg">
                        Finalizado
                      </p>
                    </div>
                  </div>
                  <div>
                    <button className="rounded-lg border border-100/50 px-4 py-2 text-sm font-light lg:text-base">
                      Explorar Projeto
                    </button>
                  </div>
                </nav>
                <span className="mt-5 text-justify text-sm font-extralight text-100 lg:mt-10 lg:text-base">
                  Fui responsável pelo desenvolvimento da MultiPage da Suporte
                  de Domingo, um projeto voltado para a divulgação da empresa
                  com forte cunho social. Durante esse período, também iniciei
                  projetos white label, desenvolvendo sistemas de controle de
                  NF-e e e-commerce para restaurantes. Fui responsável pelo
                  desenvolvimento da MultiPage da Suporte de Domingo, um projeto
                  voltado para a divulgação da empresa com forte cunho social.
                </span>
                <div className="mt-5 flex w-full items-center justify-center lg:mt-10">
                  <ul className="flex w-full flex-row items-start justify-start gap-4 border-t-[0.5px] border-50/20 pt-4 lg:pt-8">
                    <li
                      className={`py rounded-md px-4 text-sm lg:text-base ${handlerColor(0)} `}
                    >
                      tec
                    </li>
                    <li
                      className={`py rounded-md px-4 text-sm lg:text-base ${handlerColor(1)} `}
                    >
                      tec
                    </li>
                    <li
                      className={`py rounded-md px-4 text-sm lg:text-base ${handlerColor(2)} `}
                    >
                      tec
                    </li>
                    <li
                      className={`py rounded-md px-4 text-sm lg:text-base ${handlerColor(3)} `}
                    >
                      tec
                    </li>
                    <li
                      className={`py rounded-md px-4 text-sm lg:text-base ${handlerColor(4)} `}
                    >
                      tec
                    </li>
                  </ul>
                </div>
              </div>
              <nav className="flex-rows flex w-full items-center justify-between rounded-md border border-white-200/20 bg-950/40 px-6 py-4">
                <div className="cursor-pointer rounded-md border border-white-200/50 px-4 py-2 text-sm">
                  Anterior
                </div>
                <p className="text-sm">1 de 10</p>
                <div className="cursor-pointer rounded-md border border-white-200/50 px-4 py-2 text-sm">
                  Proximo
                </div>
              </nav>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
