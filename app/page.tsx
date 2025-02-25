import Header from "./components/header";

export default function Home() {
  return (
    <div className="h-full w-full  flex flex-col  items-center  font-Draper bg-950">
      <Header />
      <section className="flex flex-col items-start  justify-start w-full h-screen  overflow-hidden  ">
        <div className=" relative  h-full w-full">
          <div className="bg-blue100  blur-3xl absolute opacity-40 top-36 -left-28 p-0  w-[27vw] h-[27vw] aspect-square rounded-full" />
          <div className="bg-red100  blur-3xl absolute opacity-40 -top-16 -right-10 w-[27vw] h-[27vw] aspect-square rounded-full" />
          <span className="flex flex-col items-start ml-32 relative top-[10vh] mt-40 justify-center w-auto">
            <h1 className="font-Draper text-50 text-7xl select-none">
              I'M Arthur
            </h1>
            <p className="relative ml-10 whitespace-nowrap text-6xl w-full h-auto font-bold">
              <span
                className="select-none w-full whitespace-nowrap font-Draper tracking-wider text-7xl absolute inset-0 
                text-transparent text-[#fff0] [-webkit-text-stroke-width:0.2px] 
                [-webkit-text-stroke-color:rgba(231,231,231,0.5)]"
              >
                full stack developer
              </span>
            </p>
          </span>
          <div className="bg-50  blur-3xl absolute opacity-40 bottom-0 left-[90%]  w-[27vw] h-[27vw] aspect-square rounded-full" />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center w-full h-screen"></section>
    </div>
  );
}
