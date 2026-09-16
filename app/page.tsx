"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Footer from "../components/footer";
import FeaturedWork from "../components/featured-work";
import MoreProjects from "../components/more-projects";

const leaves = [
  { cx: 118, cy: 210, r: 14, delay: 1.75 },
  { cx: 138, cy: 188, r: 12, delay: 1.82 },
  { cx: 162, cy: 220, r: 13, delay: 1.9 },
  { cx: 176, cy: 182, r: 11, delay: 1.98 },
  { cx: 280, cy: 188, r: 13, delay: 1.86 },
  { cx: 302, cy: 166, r: 12, delay: 1.94 },
  { cx: 324, cy: 196, r: 14, delay: 2.02 },
  { cx: 258, cy: 218, r: 12, delay: 2.08 },
  { cx: 214, cy: 160, r: 11, delay: 2.12 },
  { cx: 196, cy: 198, r: 10, delay: 2.18 },
] as const;

function CloudNav() {
  return (
    <nav
      className="fixed left-1/2 top-4 z-30 -translate-x-1/2 sm:top-6"
      aria-label="Portfolio sections"
    >
      <div className="relative flex items-center justify-center px-4 py-4 sm:px-8 sm:py-6">
        <div className="pointer-events-none absolute left-6 top-7 hidden h-14 w-14 rounded-full bg-white shadow-[0_10px_30px_rgba(255,255,255,0.25)] sm:block" />
        <div className="pointer-events-none absolute left-14 top-2 hidden h-16 w-16 rounded-full bg-white shadow-[0_10px_30px_rgba(255,255,255,0.25)] sm:block" />
        <div className="pointer-events-none absolute left-28 top-0 hidden h-20 w-20 rounded-full bg-white shadow-[0_10px_30px_rgba(255,255,255,0.25)] sm:block" />
        <div className="pointer-events-none absolute left-44 top-3 hidden h-16 w-16 rounded-full bg-white shadow-[0_10px_30px_rgba(255,255,255,0.25)] sm:block" />
        <div className="pointer-events-none absolute left-56 top-8 hidden h-12 w-12 rounded-full bg-white shadow-[0_10px_30px_rgba(255,255,255,0.25)] sm:block" />

        <div className="relative flex max-w-[calc(100vw-1.5rem)] items-center gap-1 overflow-x-auto rounded-full bg-white/95 px-3 py-2 backdrop-blur-sm sm:gap-3 sm:px-5 sm:py-3">
          <a
            href="#about"
            className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 sm:px-4"
          >
            About
          </a>
          <a
            href="#featured"
            className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 sm:px-4"
          >
            Work
          </a>
          <a
            href="#projects"
            className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 sm:px-4"
          >
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
}

function TreeStage() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      key="tree"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative flex h-full w-full flex-col items-center justify-center gap-4"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: reduceMotion ? 0.12 : 0.18 }}
        transition={{ duration: 1.2, delay: 1.7 }}
        className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400 blur-3xl sm:h-56 sm:w-56"
      />

      <svg
        viewBox="0 0 400 500"
        className="relative h-auto w-[160px] -translate-y-4 sm:w-[220px]"
        fill="none"
        aria-hidden="true"
      >
        <motion.path
          d="M200 460 C198 405 194 355 196 310 C198 270 203 245 200 210"
          stroke="#7C4A2D"
          strokeWidth="12"
          strokeLinecap="round"
          initial={{ pathLength: reduceMotion ? 1 : 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        <motion.path
          d="M199 275 C170 255 148 235 122 205"
          stroke="#7C4A2D"
          strokeWidth="7"
          strokeLinecap="round"
          initial={{ pathLength: reduceMotion ? 1 : 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, delay: 0.95, ease: "easeInOut" }}
        />

        <motion.path
          d="M201 265 C232 242 262 218 298 182"
          stroke="#7C4A2D"
          strokeWidth="7"
          strokeLinecap="round"
          initial={{ pathLength: reduceMotion ? 1 : 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.75, delay: 1.05, ease: "easeInOut" }}
        />

        <motion.path
          d="M198 230 C184 205 174 185 162 162"
          stroke="#7C4A2D"
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: reduceMotion ? 1 : 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.55, delay: 1.3, ease: "easeInOut" }}
        />

        <motion.path
          d="M203 225 C220 200 238 178 255 156"
          stroke="#7C4A2D"
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: reduceMotion ? 1 : 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.55, delay: 1.36, ease: "easeInOut" }}
        />

        <motion.path
          d="M138 223 C152 206 162 194 176 176"
          stroke="#7C4A2D"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: reduceMotion ? 1 : 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.45, delay: 1.48, ease: "easeInOut" }}
        />

        <motion.path
          d="M270 208 C288 192 302 176 316 158"
          stroke="#7C4A2D"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: reduceMotion ? 1 : 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.45, delay: 1.54, ease: "easeInOut" }}
        />

        {leaves.map((leaf, index) => (
          <motion.circle
            key={index}
            cx={leaf.cx}
            cy={leaf.cy}
            r={leaf.r}
            fill="#4ADE80"
            initial={reduceMotion ? false : { scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.35,
              delay: leaf.delay,
              ease: "easeOut",
            }}
            style={{ transformOrigin: `${leaf.cx}px ${leaf.cy}px` }}
          />
        ))}

        <motion.ellipse
          cx="200"
          cy="472"
          rx="70"
          ry="10"
          fill="rgba(255,255,255,0.14)"
          initial={reduceMotion ? false : { opacity: 0, scaleX: 0.8 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
      </svg>
      <motion.blockquote
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: reduceMotion ? 0 : 2.4 }}
        className="relative -mt-6 max-w-xs text-center text-xs leading-6 text-white/55 sm:text-sm"
      >
        <p>
          “i closed my eyes
          <br />
          to look inward
          <br />
          and found a universe
          <br />
          waiting to be explored”
        </p>
        <footer className="mt-2 text-[10px] uppercase tracking-[0.22em] text-white/45">
          Yung Pueblo
        </footer>
      </motion.blockquote>
    </motion.div>
  );
}

function AboutStage() {
  return (
    <motion.aside
      id="about"
      key="about"
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full max-w-3xl scroll-mt-32 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_minmax(180px,0.42fr)]">
        <div className="order-2 p-6 sm:order-1 sm:p-8">
          <p className="mb-2 text-xs uppercase tracking-[0.35em] text-white/50">
            About
          </p>
         

          <div className="mt-5 text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
            <p className="font-semibold text-white/90">Currently I&apos;m...</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>
                Lead Software Developer of the {" "}
                <a
                  href="https://www.instagram.com/p/DXMwMuWEW8L/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-300 underline underline-offset-4 hover:text-blue-200"
                >
                  CAGH UTM Chapter
                </a>
                 
              </li>
              <li>
                Returning Peer Coach at the{" "}
                <a
                  href="https://www.instagram.com/p/DRNJbcwiJbL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-300 underline underline-offset-4 hover:text-blue-200"
                >
                  International Education Centre 
                </a>{" "}
                UTM (great way to connect and meet new people)
              </li>
              <li>
                Recommended Tutor at Superprof for over 5 years with 30 students
              </li>
            </ul>

            <p className="mt-5 font-semibold text-white/90">I&apos;ve built...</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>
                Developed the official{" "}
                <a
                  href="#fraserhacks"
                  className="font-medium text-blue-300 underline underline-offset-4 hover:text-blue-200"
                >
                  FraserHacks website
                </a>
              </li>
              <li>
                Awarded Volunteer of the Year at Brookedge Academy for developing{" "}
                <a
                  href="#chemquest"
                  className="font-medium text-blue-300 underline underline-offset-4 hover:text-blue-200"
                >
                  ChemQuest
                </a>
              </li>
              <li>
                4th place winner at the{" "}
                <a
                  href="#solar"
                  className="font-medium text-blue-300 underline underline-offset-4 hover:text-blue-200"
                >
                  Mississauga Open Data Hackathon
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative order-1 min-h-[260px] h-full sm:order-2">
          <Image
            src="/profile_pic.jpeg"
            alt="Joshua Chou"
            fill
            sizes="(min-width: 640px) 220px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </motion.aside>
  );
}

export default function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#001734] text-white">
      <CloudNav />

      <section
        id="home"
        className="relative z-10 flex flex-col px-6 pb-4 pt-24 sm:pb-6 sm:pt-28"
      >
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-center"
        >
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Joshua Chou
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
            I&apos;m a software engineer at CAGH UTM and a computer science and
            statistics major. I enjoy meditation, music and <p className="text-green-400">touching grass</p> (which is rare for a CS major in 2026).
          </p>
        </motion.header>

        <div className="flex flex-1 items-center justify-center pt-4">
          <div className="flex min-h-[300px] w-full items-center justify-center sm:min-h-[340px]">
            <TreeStage />
          </div>
        </div>
      </section>

      <section className="relative z-10 flex flex-col items-center px-6 pb-16 pt-2 sm:pb-24 sm:pt-4">
        <AboutStage />
        <div className="mt-6 grid w-full max-w-3xl gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight text-white/90">
              Why I Code
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              I code because...it&apos;s fun. I like coming up with ideas, and seeing
              it appear on a page and eventually in the world. It&apos;s always nice
              to see that people are using the things I&apos;ve built. In a small
              way, it&apos;s my contribution to the world.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight text-white/90">
              My Philosophy
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              I do my best work when I&apos;m having fun. But to get to that
              point, I need to be willing to put in the work.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              For example, I started my meditative discipline at 13 years old. I
              couldn&apos;t get my mind to calm down, but I kept practicing every
              day and I&apos;ve found that something difficult can become
              enjoyable ... and that I can have a lot of fun just turning inwards.
            </p>
          </div>
        </div>
      </section>

      <FeaturedWork />
      <MoreProjects />

      <div className="relative z-10 bg-[#001734] px-6 py-8 text-center text-sm text-white/60">
        <Footer />
      </div>
    </main>
  );
}
