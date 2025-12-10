export default function Home() {
  return (
    <section className="flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
      <div className="relative flex min-h-[calc(100dvh)] w-full items-center justify-center">
        <div className="absolute top-48 aspect-square h-[25vw] min-h-[150px] w-[25vw] min-w-[150px] animate-morph rounded-full bg-blue-1000 p-0 opacity-40 blur-3xl -left-10 lg:-left-48" />
        <div className="absolute -right-1 aspect-square h-[25vw] min-h-[200px] w-[25vw] min-w-[200px] animate-morphExtreme rounded-full bg-rose-200 opacity-40 blur-3xl -top-10 lg:-top-28" />
        <span className=" flex w-fit flex-col items-start justify-start gap-3  md:gap-10">
          <h1 className="select-none font-Draper text-4xl text-50 md:text-4xl lg:text-5xl xl:text-6xl">
            I'M Arthur
          </h1>
          <div className="w-fit flex flex-col items-start md:flex-row gap-3 md:gap-5 md:ml-10">
            <p className="text-transparent w-fit select-none font-Draper text-4xl font-bold text-[#fff0] [-webkit-text-stroke:0.5px_#e7e7e7be] md:text-4xl  lg:text-5xl xl:text-6xl">
              full
            </p>
            <p className="text-transparent w-fit select-none font-Draper text-4xl font-bold text-[#fff0] [-webkit-text-stroke:0.5px_#e7e7e7be] md:text-4xl lg:text-5xl xl:text-6xl">
              stack
            </p>
            <p className="text-transparent w-fit select-none font-Draper text-4xl font-bold text-[#fff0] [-webkit-text-stroke:0.5px_#e7e7e7be] md:text-4xl lg:text-5xl xl:text-6xl">
              developer
            </p>
          </div>
        </span>
        <div className="absolute bottom-44 left-[90%] aspect-square h-[23vw] min-h-[150px] w-[23vw] min-w-[150px] animate-morphSoft rounded-full bg-50 opacity-40 blur-3xl" />
      </div>
    </section>
  );
}
