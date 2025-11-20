import Image from 'next/image';
import { ProjetosSDD } from '@/public/images';
export default function Projetos() {
  return (
    <section className="mt-[30dvh] flex h-full min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <div className="relative flex h-full w-[90%] flex-col items-start justify-start">
        <h2 className="font-Draper text-4xl tracking-[1.57rem] text-50">
          Projetos
        </h2>
        <article className="relative mt-24 flex flex-col items-start justify-center text-50">
          <div className="absolute right-[75%] top-48 z-10 aspect-square h-[75vw] w-[75vw] animate-morphBlue rounded-full bg-50 p-0 opacity-40 blur-3xl" />

          <div className="relative z-20">
            <div className="relative h-[50vh] w-full overflow-hidden rounded-md">
              <h3 className="absolute left-14 top-14 text-4xl font-medium opacity-100 brightness-100">
                Tabla Sync
              </h3>
              <Image
                src={ProjetosSDD}
                alt="Imagem do projeto"
                className="opacity-60 transition duration-300 hover:opacity-100"
              />
            </div>
            <div className="mt-5 flex h-auto w-full flex-col items-start justify-center rounded-md bg-950/40 px-8 py-4 backdrop-blur-md md:py-9">
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
                  <h3 className="text-base md:text-lg">
                    Desenvolvedor Full- Stack
                  </h3>
                  <div className="flex flex-row items-start justify-center gap-16">
                    <p className="text-base font-extralight text-200 md:text-lg">
                      6+ meses
                    </p>
                    <p className="text-base font-extralight text-200 md:text-lg">
                      Finalizado
                    </p>
                  </div>
                </div>
                <div>
                  <button className="rounded-md border border-50 text-base md:text-lg">
                    Explorar Projeto
                  </button>
                </div>
              </nav>
              <span className="mt-5 text-justify text-sm text-100 md:mt-10 md:text-base">
                Fui responsável pelo desenvolvimento da MultiPage da Suporte de
                Domingo, um projeto voltado para a divulgação da empresa com
                forte cunho social. Durante esse período, também iniciei
                projetos white label, desenvolvendo sistemas de controle de NF-e
                e e-commerce para restaurantes. Fui responsável pelo
                desenvolvimento da MultiPage da Suporte de Domingo, um projeto
                voltado para a divulgação da empresa com forte cunho social.
                Durante esse período, também iniciei projetos white label,
                desenvolvendo sistemas de controle de NF-e e e-commerce para
                restaurantes.cunho social. Durante esse período, também iniciei
                projetos white label, desenvolvendo sistemas de controle de NF-e
                e e-commerce para restaurantes.
              </span>
              <div className="mt-5 flex w-full items-center justify-center md:mt-10">
                <ul className="flex w-full flex-row items-start justify-start gap-4 border-t-[0.5px] border-50/50 pt-4 md:pt-8">
                  <li className="text-base md:text-lg">tec</li>
                  <li className="text-base md:text-lg">tec</li>
                  <li className="text-base md:text-lg">tec</li>
                  <li className="text-base md:text-lg">tec</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
