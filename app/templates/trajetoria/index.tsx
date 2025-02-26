export default function Trajetoria() {
  return (
    <section className="flex flex-col items-center justify-center w-[90%] h-full min-h-screen">
      <div className="h-screen flex flex-col items-start justify-start w-full">
        <h2 className=" font-Draper text-50 text-4xl tracking-[1.57rem] ">
          Trajetoria
        </h2>
        <div className=" relative flex flex-row w-full h-full mt-24 ">
          <div className="flex flex-col justify-between items-center">
            <p className=" w-2 h-2 rounded-full bg-50"></p>
            <span className="w-[2px] min-h-[calc(95dvh-16px)] bg-50"></span>
            <p className=" w-2 h-2 rounded-full bg-50"></p>
          </div>
          <div className="absolute left-0 flex flex-row items-center justify-center gap-11 ">
            <div className="flex flex-col items-start justify-center">
              <h3 className=" ml-6 font-extralight text-xl text-200 tracking-widest">
                12 Jun 2024
              </h3>
              <span className="flex flex-row items-center justify-center">
                <p className=" w-2 h-2 rounded-full bg-50"></p>
                <svg width="100%" height="10" viewBox="0 0 200 10">
                  <line
                    x1="0"
                    y1="5"
                    x2="200"
                    y2="5"
                    stroke="white"
                    strokeWidth="2.41"
                    strokeDasharray="12, 12"
                  />
                </svg>
                <p className=" w-2 h-2 rotate-45 bg-50"></p>
              </span>
            </div>

            <div className="flex flex-col relative rounded-3xl bg-950/40 w-[43vw] h-auto px-14 py-12 ">
              <div
                className="rounded-3xl"
                style={{
                  content: '""',
                  position: "absolute",
                  inset: "0",
                  padding: "2.1px",
                  background:
                    "linear-gradient(90deg, rgb(30, 30, 30), rgb(102, 102, 102))",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  pointerEvents: "none",
                }}
              />
              <h2 className="font-light text-2xl mb-6">
                Senai Suíço-Brasileira
              </h2>
              <div>
                <h2 className="font-normal text-2xl">
                  Tecnologo em Sesenvolvimento de Sistema
                </h2>
                <span className="flex fex-row gap-11 items-start justify-start mb-9 ">
                  <p className="font-extralight text-xl">+1.5 anos</p>
                  <p className="font-extralight text-xl">Finalizado</p>
                </span>
              </div>
              <span className="font-normal text-lg text-100 text-justify">
                Durante o curso de ADS, desenvolvi uma base sólida em
                programação e adquiri experiências práticas, como o levantamento
                de requisitos com clientes, a liderança de uma squad como Tech
                Lead e a participação em três projetos de desenvolvimento de
                soluções mobile e web Durante o curso de ADS, desenvolvi uma
                base sólida em programação e adquiri experiências práticas, como
                o levantamento de requisitos com clientes, a liderança de uma
                squad como Tech Lead ,
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
