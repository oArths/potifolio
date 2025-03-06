import Header from "./templates/header";
import Home from "./templates/home";
import Projetos from "./templates/projetos";
import Trajetoria from "./templates/trajetoria";

export default function Main() {
  return (
    <div className="h-full w-full  flex flex-col  items-center  font-Draper bg-950">
      <Header />
      <Home />
      <Trajetoria />
      <Projetos />
    </div>
  );
}
