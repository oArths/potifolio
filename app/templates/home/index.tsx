export default function Home() {
  return (
    <section className="flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
      <div className="relative min-h-[calc(100dvh+23vw)] w-full">
        <div className="absolute -left-48 top-48 aspect-square h-[25vw] w-[25vw] animate-morph rounded-full bg-blue100 p-0 opacity-40 blur-3xl" />
        <div className="absolute -right-1 -top-28 aspect-square h-[25vw] w-[25vw] animate-morphExtreme rounded-full bg-red100 opacity-40 blur-3xl" />
        <span className="relative top-[10vh] ml-32 mt-40 flex w-auto flex-col items-start justify-center">
          <h1 className="mb-6 select-none font-Draper text-7xl text-50">
            I'M Arthur
          </h1>
          <p className="relative ml-10 h-auto w-full whitespace-nowrap text-6xl font-bold">
            <span className="text-transparent absolute inset-0 w-full select-none whitespace-nowrap font-Draper text-7xl tracking-wider text-[#fff0] [-webkit-text-stroke-color:#e7e7e7be] [-webkit-text-stroke-width:0.2px]">
              full stack developer
            </span>
          </p>
        </span>
        <div className="absolute bottom-44 left-[90%] aspect-square h-[23vw] w-[23vw] animate-morphSoft rounded-full bg-50 opacity-40 blur-3xl" />
      </div>
    </section>
  );
}
