"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Footer from "../components/footer";
type Section = "tree" | "about" | "projects";

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

const projects = [
  {
    title: "Project One",
    description: "A short description of your project goes here.",
    tag: "Next.js",
  },
  {
    title: "Project Two",
    description: "A short description of your project goes here.",
    tag: "UI Design",
  },
  {
    title: "Project Three",
    description: "A short description of your project goes here.",
    tag: "Frontend",
  },
] as const;

function CloudNav({
  activeSection,
  onSelect,
}: {
  activeSection: Section;
  onSelect: (section: Section) => void;
}) {
  const isAboutActive = activeSection === "about";
  const isProjectsActive = activeSection === "projects";

  return (
    <div className="absolute left-1/2 top-6 z-30 -translate-x-1/2">
      <div className="relative flex items-center justify-center px-8 py-6">
        <div className="absolute left-6 top-7 h-14 w-14 rounded-full bg-white shadow-[0_10px_30px_rgba(255,255,255,0.25)]" />
        <div className="absolute left-14 top-2 h-16 w-16 rounded-full bg-white shadow-[0_10px_30px_rgba(255,255,255,0.25)]" />
        <div className="absolute left-28 top-0 h-20 w-20 rounded-full bg-white shadow-[0_10px_30px_rgba(255,255,255,0.25)]" />
        <div className="absolute left-44 top-3 h-16 w-16 rounded-full bg-white shadow-[0_10px_30px_rgba(255,255,255,0.25)]" />
        <div className="absolute left-56 top-8 h-12 w-12 rounded-full bg-white shadow-[0_10px_30px_rgba(255,255,255,0.25)]" />

        <div className="relative flex items-center gap-3 rounded-full bg-white/95 px-5 py-3 backdrop-blur-sm">
          <button
            onClick={() => onSelect(isAboutActive ? "tree" : "about")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              isAboutActive
                ? "bg-neutral-900 text-white"
                : "text-neutral-700 hover:bg-neutral-100"
            }`}
          >
            About
          </button>

          <button
            onClick={() => onSelect(isProjectsActive ? "tree" : "projects")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              isProjectsActive
                ? "bg-neutral-900 text-white"
                : "text-neutral-700 hover:bg-neutral-100"
            }`}
          >
            Projects
          </button>
        </div>
      </div>
    </div>
  );
}

function TreeStage() {
  return (
    <motion.div
      key="tree"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative flex h-full w-full flex-col items-center justify-center gap-4"    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.22 }}
        transition={{ duration: 1.2, delay: 1.7 }}
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400 blur-3xl"
      />

      <svg
        viewBox="0 0 400 500"
        className="relative -translate-y-8 h-auto w-[260px] sm:w-[340px]"
                fill="none"
      >
        <motion.path
          d="M200 460 C198 405 194 355 196 310 C198 270 203 245 200 210"
          stroke="#7C4A2D"
          strokeWidth="12"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        <motion.path
          d="M199 275 C170 255 148 235 122 205"
          stroke="#7C4A2D"
          strokeWidth="7"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, delay: 0.95, ease: "easeInOut" }}
        />

        <motion.path
          d="M201 265 C232 242 262 218 298 182"
          stroke="#7C4A2D"
          strokeWidth="7"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.75, delay: 1.05, ease: "easeInOut" }}
        />

        <motion.path
          d="M198 230 C184 205 174 185 162 162"
          stroke="#7C4A2D"
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.55, delay: 1.3, ease: "easeInOut" }}
        />

        <motion.path
          d="M203 225 C220 200 238 178 255 156"
          stroke="#7C4A2D"
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.55, delay: 1.36, ease: "easeInOut" }}
        />

        <motion.path
          d="M138 223 C152 206 162 194 176 176"
          stroke="#7C4A2D"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.45, delay: 1.48, ease: "easeInOut" }}
        />

        <motion.path
          d="M270 208 C288 192 302 176 316 158"
          stroke="#7C4A2D"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
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
            initial={{ scale: 0, opacity: 0 }}
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
          initial={{ opacity: 0, scaleX: 0.8 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
      </svg>
      <motion.blockquote
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 2.4 }}
  className="relative -mt-8 max-w-sm text-center text-sm leading-7 text-white/60 sm:text-base"
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
  <footer className="mt-3 text-xs uppercase tracking-[0.25em] text-white/40">
    Yung Pueblo
  </footer>
</motion.blockquote>
    </motion.div>
    
  );
  
}

function AboutStage({
  setActiveSection,
}: {
  setActiveSection: (section: Section) => void;
}) {

  return (
    <motion.section
      key="about"
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -24, scale: 0.98 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mx-auto w-full max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-10"
    >
    <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
  <div className="flex-shrink-0">
    <Image
      src="/profile_pic.jpeg"
      alt="Joshua Chou"
      width={180}
      height={180}
      className="rounded-full border border-white/10 object-cover"
    />
  </div>

  <div>
    <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/50">
      About
    </p>

    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
      Software Engineer at the University of Toronto with interests in meditation, teaching and music
    </h2>
  </div>
</div>

      <div className="mt-6 max-w-2xl text-base leading-8 text-white/75">
  <p className="font-semibold text-white/90">Currently I&apos;m...</p>

  <ul className="ml-5 list-disc space-y-1">
    <li>
      Vice President of{" "}
      <a
        href="https://www.instagram.com/thed3signhub.utm/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-blue-300 underline underline-offset-4 hover:text-blue-200"
      >
        TDH
      </a>
    </li>
    <li>Peer Coach at the <a
        href="https://www.instagram.com/p/DRNJbcwiJbL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-blue-300 underline underline-offset-4 hover:text-blue-200"
      >
        International Education Centre
      </a> UTM</li>
    <li>Recommended Tutor at Superprof for over 5 years with 30 students</li>
  </ul>

  <p className="mt-5 font-semibold text-white/90">I&apos;ve built...</p>

  <ul className="ml-5 list-disc space-y-1">
    <li>
      Developed the official{" "}
      <button
        onClick={() => setActiveSection("projects")}
        className="font-medium text-blue-300 underline underline-offset-4 hover:text-blue-200"
      >
        FraserHacks website
      </button>
   
    </li>
    <li>
      Awarded Volunteer of the Year at Brookedge Academy for developing{" "}
      <button
        onClick={() => setActiveSection("projects")}
        className="font-medium text-blue-300 underline underline-offset-4 hover:text-blue-200"
      >
        ChemQuest
      </button>
    </li>
    <li>
      4th place winner at the{" "}
      <button
        onClick={() => setActiveSection("projects")}
        className="font-medium text-blue-300 underline underline-offset-4 hover:text-blue-200"
      >
        Mississauga Open Data Hackathon
      </button>
    </li>
  </ul>
</div>
     
     

      
    </motion.section>
  );
}

function ProjectsStage() {
  const projects = [
    {
      title: "Solar Index Map: Mississauga Open Data Hackathon 4th place overall",
      description:
        "A website with an interactive heatmap using open data to design a solar index map for evaluating solar energy potential. This project was created in the Mississauga Open Data Hackathon and won 4th place overall. I worked on the frontend using leaflet.js and heatmap.js",
      imageUrl: "/solar.png",
      link: "https://opendata-hackathon-2024-mississauga.hub.arcgis.com/",
      tags: ["Next.js", "Leaflet.js", "Heatmap.js", "Open Data"],
    },
    {
      title: "Fraser Hacks",
      description:
        "John Fraser Secondary School's official hackathon website. I was responsible for developing the animations and hackathon description section.",
      imageUrl: "/hacks.png",
      link: "https://www.fraserhacks.ca/",
      tags: ["Next.js", "Tailwind CSS"],
    },
    {
      title: "Discover UofT: DeerHacks",
      description:
        "A website designed for clubs at the University of Toronto to post upcoming events and notify users. I worked on the frontend and integrated a machine learning model to personalize event recommendations for users.",
      imageUrl: "/discover-utm.png",
      link: "https://devpost.com/software/discover-utm",
      tags: ["Next.js", "Python", "Machine Learning", "Firebase", "Docker"],
    },
    {
      title: "Scholar",
      description:
        "A streamlined school and course manager that allows students to take notes, set reminders, save important links, keep track of their schedule, the weather and any upcoming assessments",
      imageUrl: "/scholar.png",
      link: "https://scholar-j.vercel.app/",
      tags: ["Next.js", "Tailwind CSS"],
    },
    {
      title: "Grade Genius",
      description:
        "A comprehensive course manager app utilizing Flask, SQL and JavaScript. This application allows students to track course assessments, grades, goals, study times and notes.",
      imageUrl: "/grade-genius.png",
      link: "https://youtu.be/cccXBHTkUmE?si=prIcJLCm2WQCiaNT",
      tags: ["Flask", "SQL", "JavaScript", "Django"],
    },
    {
      title: "Relief Exchange",
      description:
        "Designed to alleviate poverty, this platform provides a connection for donors and those in need. It facilitates an impactful exchange of resources, easily reaching the underprivileged and those willing to help. I worked on both the backend and frontend, utilizing Golang, Next.js and Firebase.",
      imageUrl: "/relief-ex.png",
      link: "https://reliefexchange.aritrosaha.ca/",
      tags: ["Golang", "Next.js", "Firebase", "Docker"],
    },
    {
      title: "Mindfulness and Meditation",
      description:
        "An application for anyone interested in starting meditation practice. Includes a mindfulness course, meditation timer and calendar.",
      imageUrl: "/mindfulness.png",
      link: "https://mindfulness-eight.vercel.app/",
      tags: ["Next.js", "Tailwind CSS", "Vercel"],
    },
    {
      title: "ChemQuest-Brookedge Academy",
      description:
        "An interactive app developed for Brookedge Academy. I received the Volunteer of the Year award for the development of this app. It was posted on Brookedge Academy's main website. The interactive quizzes and features were used in the Young Chemists Workshop I led.",
      imageUrl: "/chem.png",
      link: "https://chemquest.vercel.app/",
      tags: ["Javascript", "HTML", "CSS"],
    },
    {
      title: "Canadian High Schools",
      description:
        "Led the development of a wiki platform where high school students can share tools and information while earning volunteer hours. My role focused on using Django to build a user-friendly interface.",
      imageUrl: "/chs-logo.png",
      link: "http://cahighschools.org/login",
      tags: ["Django", "Python", "PostgreSQL"],
    },
    {
      title: "Tracker",
      description:
        "It has been proven that it is easier to build habits than to break them. This application acts as a progress tracker for anyone looking to set goals and improve their daily lives.",
      imageUrl: "/tracker.png",
      link: "https://tracker-six-orpin.vercel.app/",
      tags: ["Next.js", "Tailwind CSS"],
    },
  ];

  return (
    <motion.section
      key="projects"
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -24, scale: 0.98 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mx-auto w-full max-w-7xl px-4"
    >
      <div className="mb-10 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/50">
          Projects
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="relative h-48 w-full">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
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
    </motion.section>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>("tree");

  return (
<main className="relative flex min-h-screen flex-col overflow-hidden bg-neutral-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.12),transparent_35%),radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_42%)]" />

      <CloudNav activeSection={activeSection} onSelect={setActiveSection} />

      <div className="relative z-10 flex flex-1 flex-col px-6 pb-4 pt-32">
                <motion.header
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-white/60">
            Portfolio
          </p>

          <button
            onClick={() => setActiveSection("tree")}
            className="text-4xl font-semibold tracking-tight sm:text-6xl"
          >
            Joshua Chou
          </button>

          <p className="mt-4 text-sm text-white/70 sm:text-base">
          I am a computer science and statistics major at the University of Toronto and a
            <br />
            <span className="bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
              software developer
            </span>
          </p>
        </motion.header>

        <div className="flex flex-1 items-center justify-center pt-10">
          <div className="flex min-h-[520px] w-full items-center justify-center">
            <AnimatePresence mode="wait">
              {activeSection === "tree" && <TreeStage />}
              {activeSection === "about" && (
              <AboutStage setActiveSection={setActiveSection} />
            )}
              {activeSection === "projects" && <ProjectsStage />}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="relative z-10 border-t border-white/10 bg-white/5 px-6 py-4 text-center text-sm text-white/60 backdrop-blur-xl">
  <Footer />
</div>
    </main>
      

  );
}