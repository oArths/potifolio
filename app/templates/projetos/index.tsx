import Image from 'next/image';
import { ProjetosSDD } from '@/public/images';
import { handlerColor } from '@/app/utils/colors';
export default function Projetos() {
  return (
    <section className="mt-[30dvh] flex h-full w-full flex-col items-center justify-center overflow-hidden py-10">
      <div className="flex h-full w-[90%] flex-col items-start justify-start">
        <h2 className="font-Draper text-4xl tracking-[1.57rem] text-50">
          Projetos
        </h2>
        <article className="relative mt-24 flex h-[90vh] flex-col items-start justify-center text-50">
          <div className="absolute right-[75%] top-48 z-10 aspect-square h-[75vw] w-[75vw] animate-morphBlue rounded-full bg-50 p-0 opacity-40 blur-3xl" />

          <div className="z-20 grid h-auto gap-4 grid-rows-[auto_auto_auto] items-center lg:grid-cols-[1fr_1fr]">
            <div className="group relative h-full  w-full rounded-md bg-900/70">
              <h3 className="absolute z-20 h-[30%] w-full pl-14 pt-14 text-4xl font-medium">
                <span className="absolute inset-0 bg-gradient-to-b from-950/80 to-950/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                <span className="relative text-50 z-10">Tabla Syncssf</span>
              </h3>
              <Image
                src={ProjetosSDD}
                alt="Imagem do projeto"
                className="h-full w-full object-contain opacity-90 transition duration-300 ease-linear group-hover:opacity-100"
              />
            </div>
            <div className=" flex h-fit w-full flex-col items-start justify-center rounded-md bg-950/40 px-8 py-4 backdrop-blur-md md:py-9">
              <div
                className="rounded-md"
                style={{
                  content: '""',
                  position: 'absolute',
                  inset: '0',
                  padding: '1px',
                  background:
                    'linear-gradient(45deg, rgb(176, 176, 176,0.5), rgb(176, 176, 176,0.5))',
                  WebkitMask:
                    'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  pointerEvents: 'none',
                }}
              />
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
                  <button className="rounded-md border border-50 px-4 py-1 text-base lg:text-lg">
                    Explorar Projeto
                  </button>
                </div>
              </nav>
              <span className="mt-5 text-justify text-sm text-100 lg:mt-10 lg:text-base">
                Fui responsável pelo desenvolvimento da MultiPage da Suporte de
                Domingo, um projeto voltado para a divulgação da empresa com
                forte cunho social. Durante esse período, também iniciei
                projetos white label, desenvolvendo sistemas de controle de NF-e
                e e-commerce para restaurantes. Fui responsável pelo
                desenvolvimento da MultiPage da Suporte de Domingo, um projeto
                voltado para a divulgação da empresa com forte cunho social.
                
              </span>
              <div className="mt-5 flex w-full items-center justify-center lg:mt-10">
                <ul className="flex w-full flex-row items-start justify-start gap-4 border-t-[0.5px] border-50/50 pt-4 lg:pt-8">
                  <li
                    className={`py rounded-md px-4 text-base lg:text-lg ${handlerColor(0)} `}
                  >
                    tec
                  </li>
                  <li
                    className={`py rounded-md px-4 text-base lg:text-lg ${handlerColor(1)} `}
                  >
                    tec
                  </li>
                  <li
                    className={`py rounded-md px-4 text-base lg:text-lg ${handlerColor(2)} `}
                  >
                    tec
                  </li>
                  <li
                    className={`py rounded-md px-4 text-base lg:text-lg ${handlerColor(3)} `}
                  >
                    tec
                  </li>
                  <li
                    className={`py rounded-md px-4 text-base lg:text-lg ${handlerColor(4)} `}
                  >
                    tec
                  </li>
                </ul>
              </div>
            </div>
            <nav className="flex flex-rows w-full h-10 justify-between px-5  items-center bg-950/40 rounded-md ">
              <div>anterior</div>
              <div>proximo</div>
            </nav>
          </div>
        </article>
      </div>
    </section>
  );
}
