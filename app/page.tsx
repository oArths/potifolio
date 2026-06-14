import Header from './templates/header';
import Home from './templates/home';
import Projetos from './templates/projetos';
import Skills from './templates/skills';
import Trajetoria from './templates/trajetoria';

export default function Main() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-950 font-Draper">
      <Header />
      <Home />
      <Trajetoria />
      <Projetos />
      <Skills/>
    </div>
  );
}
