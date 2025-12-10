import Card from '@/app/components/card';
import json from '../../json/trajetoria.json';
export default function Trajetoria() {
  return (
    <section className="flex h-full min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <div className="flex h-full w-[90%] flex-col items-start justify-start">
        <h2 className="font-Draper text-3xl tracking-[1.57rem] text-50">
          Trajetoria
        </h2>
        <div className="relative right-0 mt-24 flex h-full w-full flex-row">
          <div className="relative left-2 flex flex-col items-center justify-between">
            <p className="h-2 w-2 rounded-full bg-50"></p>
            <span className="min-h-[calc(100%-16px)] w-[2px] bg-50"></span>
            <p className="h-2 w-2 rounded-full bg-50"></p>
          </div>
          <div className="flex flex-col items-start h-auto  gap-10 lg:gap-[130px] w-full">
            {json &&
              json.map((card, idx) => (
                <Card
                key={idx}
                  id={idx}
                  date={card.date}
                  description={card.description}
                  duration={card.duration}
                  institution={card.institution}
                  role={card.role}
                  status={card.status}
                />
              ))}

            <div className="absolute left-[75%] top-48 z-[1] aspect-square h-[75vw] w-[75vw] animate-morphBlue rounded-full bg-blue-1000 p-0 opacity-40 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
