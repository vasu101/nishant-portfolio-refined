import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 px-6">

      <div className="max-w-6xl mx-auto">

        <div className="relative mb-24">

          <h1 className="absolute text-[clamp(120px,20vw,220px)] font-black text-black/5 leading-none -top-20 select-none">
            P
          </h1>

          <div className="relative z-10">
            <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
              Selected Work
            </p>

            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              Portfolio
            </h2>
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
                border
                border-gray-200
                rounded-[32px]
                p-8 lg:p-10
                bg-white
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >

              <p className="text-sm text-gray-400 mb-6">
                0{index + 1}
              </p>

              <h3 className="text-3xl font-bold tracking-tight mb-4">
                {project.title}
              </h3>

              <p className="text-sm uppercase tracking-wide text-gray-500 mb-6">
                {project.tech}
              </p>

              <p className="text-gray-600 leading-relaxed">
                {project.description}
              </p>

              <div className="flex gap-6 mt-10 text-sm font-semibold uppercase tracking-wide">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-gray-500 transition-colors"
                >
                  <Github size={16} />
                  GitHub
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gray-500 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Portfolio;