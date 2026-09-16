"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { featuredProjects } from "../lib/projects";

function FeaturedWork() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="featured"
      className="relative z-10 bg-[#001734] px-6 py-20 sm:py-24"
      aria-labelledby="featured-heading"
    >
      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-14 text-center">
          <h2
            id="featured-heading"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Projects I&apos;m Most Proud Of
          </h2>
        </header>

        <div className="space-y-16 md:space-y-20">
          {featuredProjects.map((project, index) => {
            const featured = project.featured;
            if (!featured) return null;

            const imageOnRight = index % 2 === 0;

            return (
              <motion.article
                id={project.id}
                key={project.id}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="grid scroll-mt-32 items-center gap-8 md:grid-cols-2 md:gap-12"
              >
                <div
                  className={`relative overflow-hidden rounded-[1.5rem] ${
                    imageOnRight ? "md:order-2" : "md:order-1"
                  } ${
                    featured.imageFit === "contain"
                      ? `aspect-[4/3] ${
                          featured.imageBackground === "dark"
                            ? "bg-neutral-950"
                            : "bg-white"
                        }`
                      : "aspect-[16/10] bg-white/10"
                  }`}
                >
                  <Image
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className={
                      featured.imageFit === "contain"
                        ? "object-contain p-8"
                        : "object-cover"
                    }
                  />
                </div>

                <div className={imageOnRight ? "md:order-1" : "md:order-2"}>
                  {featured.badge ? (
                    <p className="mb-3 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white/85">
                      {featured.badge}
                    </p>
                  ) : null}

                  <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    {featured.name}
                  </h3>
                  <p className="mt-3 text-xl font-medium text-sky-200">
                    {featured.outcome}
                  </p>
                  <p className="mt-4 max-w-md text-base leading-7 text-white/75">
                    {featured.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-blue-600/90 px-3 py-1 text-xs font-medium text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {featured.links.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;
