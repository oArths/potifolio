export default function Home() {
  return (
    <section className="flex flex-col items-start  justify-start w-full min-h-screen overflow-hidden  ">
      <div className=" relative  min-h-[calc(100dvh+23vw)] w-full">
        <div className="bg-blue100  blur-3xl absolute opacity-40 top-48 -left-48 p-0  w-[25vw] h-[25vw] animate-morph aspect-square rounded-full" />
        <div className="bg-red100  blur-3xl absolute opacity-40 -top-28 -right-1 w-[25vw] h-[25vw] animate-morphExtreme aspect-square rounded-full" />
        <span className="flex flex-col items-start ml-32 relative top-[10vh] mt-40 justify-center w-auto">
          <h1 className="font-Draper text-50 text-7xl select-none mb-6">
            I'M Arthur
          </h1>
          <p className="relative ml-10 whitespace-nowrap text-6xl w-full h-auto font-bold">
            <span
              className="select-none w-full whitespace-nowrap font-Draper tracking-wider text-7xl absolute inset-0 
                text-transparent text-[#fff0] [-webkit-text-stroke-width:0.2px] 
                [-webkit-text-stroke-color:#e7e7e7be]"
            >
              full stack developer
            </span>
          </p>
        </span>
        <div className="bg-50  blur-3xl absolute opacity-40 bottom-44  left-[90%]  w-[23vw] h-[23vw]  animate-morphSoft aspect-square rounded-full" />
      </div>
    </section>
  );
}
