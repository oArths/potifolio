import Header from "./components/header";

export default function Home() {
  return (
    <div className="h-screen w-full  flex flex-col  items-center font-Draper  bg-950">
      <Header />
      <section className="flex flex-col items-start  justify-start w-full h-full">
        <span className="flex flex-col items-start ml-32 mt-40  justify-center w-auto ">
          <h1 className=" font-Draper  text-50 text-5xl">I'M Arthur</h1>
          <p className="relative ml-10 whitespace-nowrap text-4xl  w-full h-auto font-bold text-white">
            <span
              className=" w-full whitespace-nowrap font-Draper tracking-wider text-5xl absolute inset-0 bg-gradient-to-r from-[#e7e7e70] to-[#FFFFFF]/50 bg-clip-text text-transparent 
            [-webkit-text-stroke-width:0.2px] [-webkit-text-stroke-color:rgba(231,231,231,0.5)]"
            >
              full stack developer
            </span>
            full stack developer
          </p>
        </span>
        <div className="bg-blue100  blur-3xl relative opacity-40 -left-1/4 w-2/5 h-3/5 rounded-full" />
        <div className="bg-red100  blur-3xl absolute opacity-40 -top-72 right-0 w-2/5 h-3/5 rounded-full" />
        <div className="bg-50  blur-3xl absolute opacity-40 -bottom-8 right-12  w-1/5 h-1/5 rounded-full" />

      </section>
      <section className="flex flex-col items-center justify-center w-full h-screen">
        
      </section>
    </div>
  );
}
