import Image from "next/image";
import { ProjetosSDD } from "@/public/images";
export default function Projetos() {
  return (
    <section className="flex flex-col mt-[30dvh] items-center justify-center w-full h-full min-h-screen overflow-hidden ">
      <div className=" flex flex-col items-start justify-start w-[90%]  h-full relative">
        <h2 className=" font-Draper text-50 text-4xl tracking-[1.57rem] ">
          Projetos
        </h2>
        <article className="flex flex-col  items-start justify-center mt-24 text-50 relative ">
          <div className="bg-50 blur-3xl z-10 absolute opacity-40 top-48 right-[75%] p-0  w-[75vw] h-[75vw] animate-morphBlue aspect-square rounded-full" />

          <div className="relative z-50">
            <div className="h-[50dvh] w-full rounded-md overflow-hidden ">
              <h3 className=" relative top-10 font-medium text-4xl">
                Tabla Sync
              </h3>
              <Image src={ProjetosSDD} alt="asas" />
            </div>
            <div className="flex flex-col items-start justify-center mt-7 h-auto w-full  rounded-md bg-950/40  backdrop-blur-md px-8 py-9  ">
              <div
                className="rounded-md"
                style={{
                  content: '""',
                  position: "absolute",
                  inset: "0",
                  padding: "1px",
                  background:
                    "linear-gradient(45deg, rgb(176, 176, 176,0.5), rgb(176, 176, 176,0.5))",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  pointerEvents: "none",
                }}
              />
              <nav className="flex items-center justify-between w-full">
                <div className="flex flex-col items-start justify-center">
                  <h3 className="text-lg ">Desenvolvedor Full- Stack</h3>
                  <div className="flex flex-row items-start gap-16 justify-center">
                    <p className="text-lg font-extralight text-200">6+ meses</p>
                    <p className="text-lg font-extralight text-200">
                      Finalizado
                    </p>
                  </div>
                </div>
                <div>
                  <button>Explorar Projeto</button>
                </div>
              </nav>
              <span className=" text-justify text-100 text-base">
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
              <div className="w-full flex  items-center justify-center ">
                <ul className=" flex flex-row items-start justify-start gap-4 mt-4 w-full border-t-[0.5px]  border-50/50">
                  <li>tec</li>
                  <li>tec</li>
                  <li>tec</li>
                  <li>tec</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
