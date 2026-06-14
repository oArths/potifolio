'use client';
import * as I from 'lucide-react';

export default function Skills() {
  const skills = [
    'html',
    'css',
    'python',
    'javascript',
    'java',
    'nodejs',
    'cpp',
    'php',
    'c',
    'typescript',
    'react',
    'angular',
    'dotnet',
    'laravel',
    'nextjs',
    'mysql',
    'mongodb',
    'postgres',
    'aws',
    'azure',
    'docker',
    'git',
    'github',
    'postman',
    'vercel',
    'vscode',
    'eclipse',
    'idea',
    'jest',
    'figma',
    'notion',
    'discord',
  ];
  return (
    <section className="mt-[30dvh] flex h-full w-full flex-col items-center justify-center py-10">
      <div className="flex h-full w-[90%] flex-col items-start justify-start gap-10">
        <h2 className="font-Draper text-3xl tracking-[1.57rem] text-50">
          Skills
        </h2>
        <article className="mt-24 flex flex-col items-start justify-center text-50">
          <div className="grid-auto-rows-[minmax(200px,auto)] grid grid-cols-4 gap-5">
            <div className="font-draper col-start-1 col-end-2 row-start-2 row-end-3 flex flex-col justify-center rounded-md border border-white-200/20 bg-950/40 px-4 py-4 font-sans text-4xl font-medium backdrop-blur-md">
              2+
              <p className="font-draper text-xl">Anos de experiência</p>
            </div>

            <div className="col-start-4 col-end-5 row-start-1 row-end-2 flex flex-row items-center gap-4 rounded-md border border-white-200/20 bg-950/40 px-4 py-4 backdrop-blur-md">
              <I.Github size={22} />
              <I.Linkedin size={22} />
              <I.Mail size={22} />
            </div>

            <div className="col-start-1 col-end-4 row-start-1 row-end-2 rounded-md border border-white-200/20 bg-950/40 px-4 py-4 font-Draper backdrop-blur-md">
              Desenvolvedor full-stack
            </div>

            <div className="col-start-2 col-end-5 row-start-2 row-end-3 flex flex-col justify-start gap-3 rounded-md border border-white-200/20 bg-950/40 px-4 py-4 backdrop-blur-md">
              <h2 className="">Sobre Mim</h2>
              <p className="text-justify">
                Sou um desenvolvedor full-stack apaixonado por criar soluções
                inovadoras e eficientes. Com experiência em diversas
                tecnologias, estou sempre em busca de novos desafios para
                aprimorar minhas habilidades e contribuir para projetos
                impactantes.
              </p>
            </div>

            <div className="col-start-1 col-end-3 row-start-3 row-end-4 flex flex-col items-center justify-center rounded-md border border-white-200/20 bg-950/40 px-4 py-4 backdrop-blur-md">
              <img
                width="auto"
                height="auto"
                className="max-h-40"
                src="https://github-readme-stats.vercel.app/api?username=oArths&show=reviews,prs_merged,prs_merged_percentage&show_icons=true&count_private=true&hide_border=true&title_color=00bfbf&icon_color=00bfbf&text_color=c9d1d9&bg_color=00000000"
                alt="oArths github stats"
              />
            </div>

            <div className="col-start-3 col-end-5 row-start-3 row-end-4 flex flex-col items-center justify-center rounded-md border border-white-200/20 bg-950/40 px-4 py-4 backdrop-blur-md">
              <img
                width="auto"
                height="auto"
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=oArths&layout=compact&hide_border=true&title_color=00bfbf&text_color=00bfbf&bg_color=00000000"
              />
            </div>

            <div className="col-start-1 col-end-5 row-start-4 row-end-5 rounded-md border border-white-200/20 bg-950/40 px-4 py-4 backdrop-blur-md">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <img
                    key={skill}
                    className="max-h-10"
                    src={`https://skillicons.dev/icons?i=${skill}`}
                    alt={skill}
                  />
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
