import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Image from 'next/image';
import '../app/globals.css';

const projects = [
  {
    title: 'Solar Index Map: Mississauga Open Data Hackathon 4th place overall',
    description:
      'A website with an interactive heatmap using open data to design a solar index map for evaluating solar energy potential. This project was created in the Mississauga Open Data Hackathon and won 4th place overall. I worked on the frontend using leaflet.js and heatmap.js',
    imageUrl: '/solar.png',
    link: 'https://opendata-hackathon-2024-mississauga.hub.arcgis.com/',
    tags: ['Next.js', 'Leaflet.js', 'Heatmap.js', 'Open Data']
  },
  {
    title: 'Fraser Hacks',
    description:
      "John Fraser Secondary School's official hackathon website. I was responsible for developing the animations and hackathon description section.",
    imageUrl: '/hacks.png',
    link: 'https://www.fraserhacks.ca/',
    tags: ['Next.js', 'Tailwind CSS']
  },
  {
    title: 'Discover UofT: DeerHacks',
    description:
      'A website designed for clubs at the University of Toronto to post upcoming events and notify users. I worked on the frontend and integrated a machine learning model to personalize event recommendations for users.',
    imageUrl: '/discover-utm.png',
    link: 'https://devpost.com/software/discover-utm',
    tags: ['Next.js', 'Python', 'Machine Learning', 'Firebase', 'Docker']
  },
  {
    title: 'Scholar',
    description:
      'A streamlined school and course manager that allows students to take notes, set reminders, save important links, keep track of their schedule, the weather and any upcoming assessments',
    imageUrl: '/scholar.png',
    link: 'https://scholar-j.vercel.app/',
    tags: ['Next.js','Tailwind CSS']
  },
  {
    title: 'Grade Genius',
    description:
      'A comprehensive course manager app utilizing Flask, SQL and JavaScript. This application allows students to track course assessments, grades, goals, study times and notes.',
    imageUrl: '/grade-genius.png',
    link: 'https://youtu.be/cccXBHTkUmE?si=prIcJLCm2WQCiaNT',
    tags: ['Flask', 'SQL', 'JavaScript', 'Django']
  },
  {
    title: 'Relief Exchange',
    description:
      'Designed to alleviate poverty, this platform provides a connection for donors and those in need. It facilitates an impactful exchange of resources, easily reaching the underprivileged and those willing to help. I worked on both the backend and frontend, utilizing Golang, Next.js and Firebase.',
    imageUrl: '/relief-ex.png',
    link: 'https://reliefexchange.aritrosaha.ca/',
    tags: ['Golang', 'Next.js', 'Firebase', 'Docker']
  },
  {
    title: 'Mindfulness and Meditation',
    description:
      'An application for anyone interested in starting meditation practice. Includes a mindfulness course, meditation timer and calendar.',
    imageUrl: '/mindfulness.png',
    link: 'https://mindfulness-eight.vercel.app/',
    tags: ['Next.js', 'Tailwind CSS', 'Vercel']
  },
  {
    title: 'Learn Chemistry-Brookedge Academy',
    description:
      'An interactive app developed for Brookedge Academy. I received the Volunteer of the Year award for the development of this app. It was posted on Brookedge Academy\'s main website. The interactive quizzes and features were used in the Young Chemists Workshop I led.',
    imageUrl: '/chem.png',
    link: 'https://www.brookedge.org/event-details/young-chemists-workshop-2022-08-08-16-00-1',
    tags: ['Javascript','HTML','CSS']
  },
  {
    title: 'Canadian High Schools',
    description:
      'Led the development of a wiki platform where high school students can share tools and information while earning volunteer hours. My role focused on using Django to build a user-friendly interface.',
    imageUrl: '/chs-logo.png',
    link: 'http://cahighschools.org/login',
    tags: ['Django', 'Python', 'PostgreSQL']
  },
  {
    title: 'Tracker',
    description:
      'It has been proven that it is easier to build habits than to break them. This application acts as a progress tracker for anyone looking to set goals and improve their daily lives.',
    imageUrl: '/tracker.png',
    link: 'https://tracker-six-orpin.vercel.app/',
    tags: ['Next.js', 'Tailwind CSS']
  }
];

export default function ProjectsPage() {
    
  return (
    <>
      <Head>
        <title>Projects | Joshua Chou</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <style jsx global>{`
body {
  background: #001734 !important; /* Force the body background to blue */
}
`}</style>
      {/* Add top padding to avoid navbar overlap */}
      <div className="pt-20" />

      <main className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Project Title */}
                <h2 className="text-xl font-bold text-white mb-3">{project.title}</h2>

                {/* Project Description */}
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                {/* Project Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-blue-600 text-white rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
