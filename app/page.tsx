"use client";

import { motion } from "framer-motion";

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
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.12),transparent_35%),radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.1 }}
          className="mb-8 text-center"
        >

          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Joshua Chou
          </h1>
          <p className="mt-4 max-w-xl text-sm text-white/70 sm:text-base">
            I am a computer science and statistics major at the University of Toronto and a
            <br />
            <span className="bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
              software developer
            </span>
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.22 }}
            transition={{ duration: 1.2, delay: 1.8 }}
            className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400 blur-3xl"
          />

          <svg
            viewBox="0 0 400 500"
            className="relative h-auto w-[320px] sm:w-[420px]"
            fill="none"
          >
            {/* trunk */}
            <motion.path
              d="M200 460 C198 405 194 355 196 310 C198 270 203 245 200 210"
              stroke="#7C4A2D"
              strokeWidth="12"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />

            {/* main branches */}
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

            {/* leaves */}
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

            {/* ground */}
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
        </div>
      </div>
    </main>
  );
}