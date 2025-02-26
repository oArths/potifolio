import Header from "./components/header";

export default function Home() {
  return (
    <div className="h-full w-full  flex flex-col  items-center  font-Draper bg-950">
      <Header />
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
      <section className="flex flex-col items-center justify-center w-[90%] h-screen">
        <div className="h-screen flex flex-col items-start justify-start w-full">
          <h2 className=" font-Draper text-50 text-4xl tracking-[1.57rem] ">
            Trajetoria
          </h2>
          <div className=" flex flex-row w-full h-full ">
            <div className="flex flex-col justify-between items-center">
              <p className=" w-2 h-2 rounded-full bg-50"></p>
              <span className="w-[2px] min-h-[calc(95dvh-16px)] bg-50"></span>
              <p className=" w-2 h-2 rounded-full bg-50"></p>
            </div>
            <div>
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
              <div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
