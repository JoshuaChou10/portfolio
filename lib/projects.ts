export type ProjectLink = {
  label: string;
  href: string;
};

export type FeaturedDetails = {
  name: string;
  outcome: string;
  badge?: string;
  summary: string;
  imageFit: "cover" | "contain";
  imageBackground?: "light" | "dark";
  links: ProjectLink[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  link: string;
  tags: string[];
  featured?: FeaturedDetails;
};

export const FEATURED_PROJECT_IDS = ["solar", "chemquest", "fraserhacks"] as const;

export const projects: Project[] = [
  {
    id: "solar",
    title: "Solar Index Map: Mississauga Open Data Hackathon 4th place overall",
    description:
      "A website with an interactive heatmap using open data to design a solar index map for evaluating solar energy potential. This project was created in the Mississauga Open Data Hackathon and won 4th place overall. I worked on the frontend using leaflet.js and heatmap.js",
    imageUrl: "/solar.png",
    imageAlt: "Solar Index Map heatmap of solar energy potential in Mississauga",
    link: "https://opendata-hackathon-2024-mississauga.hub.arcgis.com/",
    tags: ["Next.js", "Leaflet.js", "Heatmap.js", "Open Data"],
    featured: {
      name: "Solar Index Map",
      outcome: "4th Place Overall",
      badge: "Mississauga Open Data Hackathon",
      summary:
        "Alongside my team, I built an interactive solar-index heatmap from City of Mississauga open data. I worked on the frontend  using leaflet.js and heatmap.js to display the heatmap.",
      imageFit: "cover",
      links: [
        {
          label: "View Results",
          href: "https://opendata-hackathon-2024-mississauga.hub.arcgis.com/",
        },
      ],
    },
  },
  {
    id: "fraserhacks",
    title: "Fraser Hacks",
    description:
      "John Fraser Secondary School's official hackathon website. I was responsible for developing the animations and hackathon description section.",
    imageUrl: "/hacks.png",
    imageAlt: "FraserHacks logo",
    link: "https://github.com/FraserHacks/fraserhacks24website",
    tags: ["Next.js", "Tailwind CSS"],
    featured: {
      name: "Official FraserHacks 2024 Website",
      outcome: "Hundreds of registrations",
      summary:
        "Collaborated with a team of developers on the official hackathon site, including animations and event information.",
      imageFit: "contain",
      imageBackground: "dark",
      links: [{ label: "View Github", href: "https://github.com/FraserHacks/fraserhacks24website" }],
    },
  },
  {
    id: "fridgeflow",
    title: "FridgeFlow",
    description:
      "FridgeFlow is a project built for the IBMZ X UNSA hackathon. It utilizes IBM watsonx.ai and allows users to upload a fridge photo or enter ingredients, then get meal recommendations based on available food, expiry date, and health goals. It also provides recipes, nutrition tracking, grocery suggestions, and fridge storage management.",
    imageUrl: "/Fridge.png",
    imageAlt: "FridgeFlow homepage with meal recommendations",
    link: "https://devpost.com/software/fridgeflow",
    tags: ["Machine Learning", "watsonx.ai", "Next.js", "Tailwind CSS"],
  },
  {
    id: "discover-uoft",
    title: "Discover UofT: DeerHacks",
    description:
      "A website designed for clubs at the University of Toronto to post upcoming events and notify users. I worked on the frontend and integrated a machine learning model to personalize event recommendations for users.",
    imageUrl: "/discover-utm.png",
    imageAlt: "Discover UofT event recommendations interface",
    link: "https://devpost.com/software/discover-utm",
    tags: ["Next.js", "Python", "Machine Learning", "Firebase", "Docker"],
  },
  {
    id: "scholar",
    title: "Scholar",
    description:
      "A streamlined school and course manager that allows students to take notes, set reminders, save important links, keep track of their schedule, the weather and any upcoming assessments",
    imageUrl: "/scholar.png",
    imageAlt: "Scholar course manager app",
    link: "https://scholar-j.vercel.app/",
    tags: ["Next.js", "Tailwind CSS"],
  },
  {
    id: "grade-genius",
    title: "Grade Genius",
    description:
      "A comprehensive course manager app utilizing Flask, SQL and JavaScript. This application allows students to track course assessments, grades, goals, study times and notes.",
    imageUrl: "/grade-genius.png",
    imageAlt: "Grade Genius course manager",
    link: "https://youtu.be/cccXBHTkUmE?si=prIcJLCm2WQCiaNT",
    tags: ["Flask", "SQL", "JavaScript", "Django"],
  },
  {
    id: "relief-exchange",
    title: "Relief Exchange",
    description:
      "Designed to alleviate poverty, this platform provides a connection for donors and those in need. It facilitates an impactful exchange of resources, easily reaching the underprivileged and those willing to help. I worked on both the backend and frontend, utilizing Golang, Next.js and Firebase.",
    imageUrl: "/relief-ex.png",
    imageAlt: "Relief Exchange platform",
    link: "https://reliefexchange.aritrosaha.ca/",
    tags: ["Golang", "Next.js", "Firebase", "Docker"],
  },
  {
    id: "mindfulness",
    title: "Mindfulness and Meditation",
    description:
      "An application for anyone interested in starting meditation practice. Includes a mindfulness course, meditation timer and calendar.",
    imageUrl: "/mindfulness.png",
    imageAlt: "Mindfulness and meditation app",
    link: "https://mindfulness-eight.vercel.app/",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
  },
  {
    id: "chemquest",
    title: "ChemQuest-Brookedge Academy",
    description:
      "An interactive app developed for Brookedge Academy. I received the Volunteer of the Year award for the development of this app. It was posted on Brookedge Academy's main website. The interactive quizzes and features were used in the Young Chemists Workshop I led.",
    imageUrl: "/chem.png",
    imageAlt: "Brookedge Academy ChemQuest branding",
    link: "https://chemquest.vercel.app/",
    tags: ["Javascript", "HTML", "CSS"],
    featured: {
      name: "ChemQuest",
      outcome: "Used by 100+ students",
      badge: "Volunteer of the Year",
      summary:
        "Interactive chemistry learning app for Brookedge Academy, with quizzes and lesson pages used in the Young Chemists workshop I led. Can be found on Brookedge Academy's main website.",
      imageFit: "contain",
      imageBackground: "light",
      links: [{ label: "View Project", href: "https://chemquest.vercel.app/" }],
    },
  },
  {
    id: "canadian-high-schools",
    title: "Canadian High Schools",
    description:
      "Led the development of a wiki platform where high school students can share tools and information while earning volunteer hours. My role focused on using Django to build a user-friendly interface.",
    imageUrl: "/chs-logo.png",
    imageAlt: "Canadian High Schools logo",
    link: "http://cahighschools.org/login",
    tags: ["Django", "Python", "PostgreSQL"],
  },
  {
    id: "tracker",
    title: "Tracker",
    description:
      "It has been proven that it is easier to build habits than to break them. This application acts as a progress tracker for anyone looking to set goals and improve their daily lives.",
    imageUrl: "/tracker.png",
    imageAlt: "Tracker habit progress app",
    link: "https://tracker-six-orpin.vercel.app/",
    tags: ["Next.js", "Tailwind CSS"],
  },
];

const featuredIdSet = new Set<string>(FEATURED_PROJECT_IDS);

export const featuredProjects: Project[] = FEATURED_PROJECT_IDS.map((id) => {
  const project = projects.find((item) => item.id === id);
  if (!project?.featured) {
    throw new Error(`Missing featured project: ${id}`);
  }
  return project;
});

export const moreProjects: Project[] = projects.filter(
  (project) => !featuredIdSet.has(project.id)
);
