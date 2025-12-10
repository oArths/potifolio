interface CardProps {
  id: number;
  description: string;
  role: string;
  institution: string;
  duration: string;
  status: string;
  date: string;
}

export default function Card(data: CardProps) {
  const isPair = data.id % 2 === 0 ? true : false;

  return (
    <div
      className={`relative z-10 flex w-full flex-col items-center justify-start gap-5 lg:flex-row lg:gap-11 ${isPair ? 'lg:w-[75%]' : 'lg:w-[100%]'}`}
    >
      <div className="flex h-40 w-full flex-col items-start justify-center">
        <h3 className="ml-6 text-sm font-extralight tracking-widest text-200 lg:text-base">
          {data.date}
        </h3>
        <span className="flex flex-row items-center justify-start ">
          <div className="relative flex w-fit flex-col">
            <div className="flex flex-row items-center">
              <p className="h-2 w-2 rounded-full bg-50"></p>
              <svg className="h-[10px] w-[50%] lg:w-full" viewBox="0 0 600 10">
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
              <p className="hidden h-2 w-2 rotate-45 bg-50 lg:flex"></p>
            </div>
            <div className="absolute top-[6px] ml-[50%] flex h-fit flex-col items-center justify-center lg:hidden">
              <svg
                className="flex h-[50px] w-fit lg:hidden"
                viewBox="0 0 10 100"
              >
                <line
                  x1="5"
                  y1="0"
                  x2="5"
                  y2="100"
                  stroke="white"
                  strokeWidth="2.41"
                  strokeDasharray="12, 12"
                />
              </svg>
              <p className="h-2 w-2 rotate-45 bg-50"></p>
            </div>
          </div>
        </span>
      </div>

      <div className="relative flex h-auto ml-5 md:ml-0 w-fit max-w-[500px] flex-col rounded-3xl bg-950/40 px-10 py-10 backdrop-blur-[100px]">
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
        <div className="relative flex flex-col items-start gap-5">
          <h2 className="text-lg font-light">{data.institution}</h2>
          <div>
            <h2 className="text-xl font-normal">{data.role}</h2>
            <span className="fex-row flex items-start justify-start gap-11">
              <p className="text-sm font-extralight lg:text-base">
                +{data.duration}
              </p>
              <p className="text-sm font-extralight lg:text-base">
                {data.status}
              </p>
            </span>
          </div>
          <span className="text-justify text-sm font-normal text-200 lg:text-base">
            {data.description}
          </span>
        </div>
      </div>
    </div>
  );
}
