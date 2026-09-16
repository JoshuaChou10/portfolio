import Image from "next/image";
import { moreProjects } from "../lib/projects";

function MoreProjects() {
  return (
    <section
      id="projects"
      className="relative z-10 bg-[#001734] px-6 pb-20 pt-4 sm:pb-24"
      aria-labelledby="more-projects-heading"
    >
      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-10 text-center">
          
          <h2
            id="more-projects-heading"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            What I've Built
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {moreProjects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-[1.5rem] bg-white/10 shadow-lg transition duration-300 motion-safe:hover:-translate-y-1 hover:bg-white/15 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <div className="relative h-44 w-full bg-white/5">
                <Image
                  src={project.imageUrl}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-6 text-white/70">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MoreProjects;
