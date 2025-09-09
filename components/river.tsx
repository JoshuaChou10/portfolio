"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const River = () => {
  const marker = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (!marker.current) return;

    gsap.to(marker.current, {
      scrollTrigger: {
        trigger: ".river-section",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      motionPath: {
        path: "#riverPath",
        align: "#riverPath",
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
      },
    });
  }, []);

  return (
    <svg
      viewBox="0 0 400 2000"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full pointer-events-none"
    >
      {/* the river’s centreline */}
      <path
        id="riverPath"
        d="
          M200,0
          C150,100 250,300 200,400
          C150,500 250,700 200,800
          C150,900 250,1100 200,1200
          C150,1300 250,1500 200,1600
          C150,1700 250,1900 200,2000
        "
        stroke="#4fb6e1"
        strokeWidth="20"
        fill="none"
      />
      {/* a droplet that follows the path */}
      <circle
        ref={marker}
        r="10"
        fill="#77c5ee"
      />
    </svg>
  );
};

export default River;
