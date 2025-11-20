export default function Trajetoria() {
  return (
    <section className="flex h-full min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <div className="flex h-full w-[90%] flex-col items-start justify-start">
        <h2 className="font-Draper text-4xl tracking-[1.57rem] text-50">
          Trajetoria
        </h2>
        <div className="relative right-0 mt-24 flex h-full w-full flex-row">
          <div className="relative left-2 flex flex-col items-center justify-between">
            <p className="h-2 w-2 rounded-full bg-50"></p>
            <span className="min-h-[calc(100%-16px)] w-[2px] bg-50"></span>
            <p className="h-2 w-2 rounded-full bg-50"></p>
          </div>
          <div className="flex flex-col items-start gap-[130px]">
            <div className="flex flex-row items-center justify-center gap-11">
              <div className="flex flex-col items-start justify-center">
                <h3 className="ml-6 text-xl font-extralight tracking-widest text-200">
                  12 Jun 2024
                </h3>
                <span className="flex flex-row items-center justify-center">
                  <p className="h-2 w-2 rounded-full bg-50"></p>
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
                  <p className="h-2 w-2 rotate-45 bg-50"></p>
                </span>
              </div>

              <div className="relative flex h-auto w-[43vw] flex-col rounded-3xl bg-950/40 px-14 py-12 backdrop-blur-md">
                <div
                  className="rounded-3xl"
                  style={{
                    content: '""',
                    position: 'absolute',
                    inset: '0',
                    padding: '1.2px',
                    background:
                      'linear-gradient(45deg, rgb(30, 30, 30), rgb(102, 102, 102))',
                    WebkitMask:
                      'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    pointerEvents: 'none',
                  }}
                />
                <h2 className="mb-6 text-2xl font-light">
                  Senai Suíço-Brasileira
                </h2>
                <div>
                  <h2 className="text-2xl font-normal">
                    Tecnologo em Sesenvolvimento de Sistema
                  </h2>
                  <span className="fex-row mb-9 flex items-start justify-start gap-11">
                    <p className="text-xl font-extralight">+1.5 anos</p>
                    <p className="text-xl font-extralight">Finalizado</p>
                  </span>
                </div>
                <span className="text-justify text-lg font-normal text-100">
                  Durante o curso de ADS, desenvolvi uma base sólida em
                  programação e adquiri experiências práticas, como o
                  levantamento de requisitos com clientes, a liderança de uma
                  squad como Tech Lead e a participação em três projetos de
                  desenvolvimento de soluções mobile e web Durante o curso de
                  ADS, desenvolvi uma base sólida em programação e adquiri
                  experiências práticas, como o levantamento de requisitos com
                  clientes, a liderança de uma squad como Tech Lead ,
                </span>
              </div>
            </div>
            <div className="z-10 flex flex-row items-center justify-center gap-11">
              <div className="flex flex-col items-start justify-center">
                <h3 className="ml-6 text-xl font-extralight tracking-widest text-200">
                  12 Jun 2024
                </h3>
                <span className="flex flex-row items-center justify-center">
                  <p className="h-2 w-2 rounded-full bg-50"></p>
                  <svg width="100%" height="10" viewBox="0 0 600 10">
                    <line
                      x1="0"
                      y1="5"
                      x2="600"
                      y2="5"
                      stroke="white"
                      strokeWidth="2.41"
                      strokeDasharray="12, 12"
                    />
                  </svg>
                  <p className="h-2 w-2 rotate-45 bg-50"></p>
                </span>
              </div>

              <div className="relative flex h-auto w-[43vw] flex-col rounded-3xl bg-950/40 px-14 py-12 backdrop-blur-[100px]">
                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl"
                  style={{
                    content: '""',
                    position: 'absolute',
                    inset: '0',
                    padding: '1.2px',
                    background:
                      'linear-gradient(90deg,rgb(102, 102, 102), rgb(30, 30, 30) )',
                    WebkitMask:
                      'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    pointerEvents: 'none',
                  }}
                />
                <div className="absolute inset-0 rounded-3xl" />
                <div className="relative">
                  <h2 className="mb-6 text-2xl font-light">
                    Senai Suíço-Brasileiraasa
                  </h2>
                  <div>
                    <h2 className="text-2xl font-normal">
                      Tecnologo em Sesenvolvimento de Sistema
                    </h2>
                    <span className="fex-row mb-9 flex items-start justify-start gap-11">
                      <p className="text-xl font-extralight">+1.5 anos</p>
                      <p className="text-xl font-extralight">Finalizado</p>
                    </span>
                  </div>
                  <span className="text-justify text-lg font-normal text-100">
                    Durante o curso de ADS, desenvolvi uma base sólida em
                    programação e adquiri experiências práticas, como o
                    levantamento de requisitos com clientes, a liderança de uma
                    squad como Tech Lead e a participação em três projetos de
                    desenvolvimento de soluções mobile e web Durante o curso de
                    ADS, desenvolvi uma base sólida em programação e adquiri
                    experiências práticas, como o levantamento de requisitos com
                    clientes, a liderança de uma squad como Tech Lead ,
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute left-[75%] top-48 z-[1] aspect-square h-[75vw] w-[75vw] animate-morphBlue rounded-full bg-blue-1000 p-0 opacity-40 blur-3xl" />

            <div className="flex flex-row items-center justify-center gap-11">
              <div className="flex flex-col items-start justify-center">
                <h3 className="ml-6 text-xl font-extralight tracking-widest text-200">
                  12 Jun 2024
                </h3>
                <span className="flex flex-row items-center justify-center">
                  <p className="h-2 w-2 rounded-full bg-50"></p>
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
                  <p className="h-2 w-2 rotate-45 bg-50"></p>
                </span>
              </div>

              <div className="relative flex h-auto w-[43vw] flex-col rounded-3xl bg-950/40 px-14 py-12 backdrop-blur-md">
                <div
                  className="rounded-3xl"
                  style={{
                    content: '""',
                    position: 'absolute',
                    inset: '0',
                    padding: '1.2px',
                    background:
                      'linear-gradient(90deg, rgb(30, 30, 30), rgb(102, 102, 102))',
                    WebkitMask:
                      'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    pointerEvents: 'none',
                  }}
                />
                <h2 className="mb-6 text-2xl font-light">
                  Senai Suíço-Brasileira
                </h2>
                <div>
                  <h2 className="text-2xl font-normal">
                    Tecnologo em Sesenvolvimento de Sistema
                  </h2>
                  <span className="fex-row mb-9 flex items-start justify-start gap-11">
                    <p className="text-xl font-extralight">+1.5 anos</p>
                    <p className="text-xl font-extralight">Finalizado</p>
                  </span>
                </div>
                <span className="text-justify text-lg font-normal text-100">
                  Durante o curso de ADS, desenvolvi uma base sólida em
                  programação e adquiri experiências práticas, como o
                  levantamento de requisitos com clientes, a liderança de uma
                  squad como Tech Lead e a participação em três projetos de
                  desenvolvimento de soluções mobile e web Durante o curso de
                  ADS, desenvolvi uma base sólida em programação e adquiri
                  experiências práticas, como o levantamento de requisitos com
                  clientes, a liderança de uma squad como Tech Lead ,
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
