// app/page.tsx
"use client";
import Head from "next/head";
import {useState } from 'react';
import Navbar from '../components/navbar';
import styles from '../styles.module.css'; 
import Image from 'next/image';
//relief exchange github
// https://github.com/AritroSaha10/ReliefExchange-ICS4U/tree/ce97ac9770ed0dded6ecdace65ab861707565b3e
const Home = () => {
  const [animate] = useState(true);
  const projects = [

    { title: 'Relief Exchange', description: 'Designed to alleviate poverty, this platform provides a connection for donors and those in need. It facilitates an impactful exchange of recourses, easily reaching the underprivileged and those willing to help. I worked on both the backend and frontend, utilizing Golang, Next.js and Firebase. ', imageUrl: '/relief-ex.png' ,link:"https://reliefexchange.aritrosaha.ca/"},
    { title: 'Grade Genius', description: 'A comprehensive course manager app utilizing Flask, SQl and Javascript. Allows students to track course assessments, grades, goals, study times and notes. ', imageUrl: '/grade-genius.png' ,link:'https://gradegenius.joshuachou.com'},
    { title: 'Learn Chemistry-Brookedge Academy', description: "An interactive app developed for Brookedge Academy. I was awarded the volunteer of the year award by the Academy for the development of this app.  Complete with quizzes and lessons. Posted on Brookedge Academy's main website, and used in the Young Chemists Workshop. ", imageUrl: '/chem.png' ,link:'https://learn-chemistry.joshuac16.repl.co/'},

  ];
  // const sections = [
  //   {
  //     title: 'About Me',
  //     description: 'Learn more about who I am, my hobbies and extracurriculars.',
  //     link: '/about',
  //   },
  //   {
  //     title: 'My Projects',
  //     description: "Discover my portfolio of projects from web applications to software solutions.",
  //     link: '/projects',
  //   },
  //   {
  //     title: 'Experience',
  //     description: 'Learn about my professional journey and the experiences that have shaped my career.',
  //     link: '/experiences',
  //   },
  //   {
  //     title: 'My Skills and Awards',
  //     description: 'Explore the skills I’ve acquired and the recognition I’ve achieved along the way.',
  //     link: '/skills',
  //   },
  // ];
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <Head>
        <title>Joshua Chou | Software Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Adjust the top margin to move the content up */}
      <main className="flex flex-col items-center w-full px-20 text-center mt-8">
      <div className={`flex flex-col items-center ${animate ? styles.startSlideRight : ''}`}>
  <h1 className="text-blue-600 text-4xl md:text-9xl font-bold">Joshua</h1>
  <h2 className="text-blue-600 text-4xl md:text-9xl font-bold">Chou</h2>

</div>
      <br /><br /><br />
      <div className={`mt-3 text-2xl ${animate ? styles.startSlideLeft : ''}`}>
        <p className="font-bold">I am a high school student and a<br />
          <span className="text-blue-600">software developer</span>
        </p>
      </div>
    </main>

    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-8">
        {sections.map((section) => (
          <a key={section.title} href={section.link} target="_blank" className=" border-solid border-2 border-sky-500 flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-lg font-bold text-white">{section.title}</h3>
            <p className="mt-2 text-gray-300">{section.description}</p>
          </a>
        ))}
      </div> */}
       <section className="w-full">

{projects.map((project, index) => (
  <div key={project.title} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center my-8`}>
    
    {/* Project Image */}
    <a target='_blank' rel="noopener noreferrer" href={project.link} className="w-full md:w-1/2 hover:translate-y-[-10px] transition-transform duration-300">
      <Image  className="w-full h-auto object-cover" src={project.imageUrl} alt={project.title} width={500} height={600} />
    </a>
    
    {/* Project Description */}
    <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-4 flex justify-center md:justify-start">
      <div className="text-center md:text-left mx-auto md:mx-500 px-4 md:px-0 w-41">
        <h3 className="text-lg font-bold">{project.title}</h3>
        <p className="mt-2 text-white-600">{project.description}</p>
        <div className="mt-4">
          {/* Other content */}
        </div>
      </div>
    </div>

  </div>
))}
</section>

<footer className="flex items-center justify-center w-full h-24 ">
  {/* Footer content */}
</footer>

    </div>
  )
}

export default Home;
