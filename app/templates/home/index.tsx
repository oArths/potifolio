export default function Home() {
  return (
    <section className="flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
      <div className="relative min-h-[calc(100dvh+23vw)] w-full">
        <div className="absolute top-48 aspect-square h-[25vw] min-h-[150px] w-[25vw] min-w-[150px] animate-morph rounded-full bg-blue-1000 p-0 opacity-40 blur-3xl lg:-left-48" />
        <div className="absolute -right-1 aspect-square h-[25vw] min-h-[200px] w-[25vw] min-w-[200px] animate-morphExtreme rounded-full bg-rose-200 opacity-40 blur-3xl lg:-top-28" />
        <span className="relative top-[10vh] ml-32 mt-40 flex w-auto flex-col items-start justify-center">
          <h1 className="mb-6 select-none font-Draper text-2xl text-50 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            I'M Arthur
          </h1>
          <p className="relative ml-10 h-auto w-full whitespace-nowrap text-2xl font-bold sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl">
            <span className="text-transparent absolute inset-0 w-full select-none whitespace-nowrap font-Draper  tracking-wider text-[#fff0] [-webkit-text-stroke-color:#e7e7e7be] [-webkit-text-stroke-width:0.2px] text-2xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl">
              full stack developer
            </span>
          </p>
        </span>
        <div className="absolute bottom-44 left-[90%] aspect-square h-[23vw] min-h-[150px] w-[23vw] min-w-[150px] animate-morphSoft rounded-full bg-50 opacity-40 blur-3xl" />
      </div>
    </section>
  );
}
