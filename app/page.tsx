// app/page.tsx
"use client";
import Head from "next/head";
import { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import styles from '../styles.module.css'; 

const Home = () => {
  const [animate] = useState(true);
  const projects = [

    { title: 'Relief Exchange', description: 'Designed to alleviate poverty, this platform provides a connection for donors and those in need. It facilitates an impactful exchange of recourses, easily reaching the underprivileged and those willing to help. I worked on both the backend and frontend, utilizing Golang, Next.js and Firebase. ', imageUrl: '/relief-ex.png' ,link:"https://reliefexchange.aritrosaha.ca/"},
    { title: 'Grade Genius', description: 'A course manager app utilizing Flask, SQl and Javascript. Allows students to track course assessments, grades, goals, study times and notes. ', imageUrl: '/grade-genius.png' ,link:'https://gradegenius.joshuachou.com'},
    { title: 'Learn Chemistry-Brookedge Academy', description: "An interactive app developed for Brookedge Academy. Complete with quizzes and lessons. Posted on Brookedge Academy's main website, and used in the Young Chemists Workshop. ", imageUrl: '/chem.png' ,link:'https://learn-chemistry.joshuac16.repl.co/'},

  ];
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Adjust the top margin to move the content up */}
      <main className="flex flex-col items-center w-full px-20 text-center mt-8">
      <div className={`flex flex-col items-center ${animate ? styles.startSlideRight : ''}`}>
        <h1 className="text-blue-600 text-9xl font-bold">Joshua</h1>
        <h2 className="text-blue-600 text-9xl font-bold">Chou</h2>
      </div>
      <br /><br /><br />
      <div className={`mt-3 text-2xl ${animate ? styles.startSlideLeft : ''}`}>
        <p className="font-bold">I am a high school student and a<br />
          <span className="text-blue-600">software developer</span>
        </p>
      </div>
    </main>
      {/* Add a section for projects */}
      <section className="w-full">
  {projects.map((project, index) => (
    <div key={project.title} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center my-8`}>
      
      {/* Project Image */}
      <a target='_blank' rel="noopener noreferrer" href={project.link} className="w-full md:w-1/2 hover:translate-y-[-5px] transition-transform duration-300">
        <img className="w-full h-auto object-cover" src={project.imageUrl} alt={project.title} />
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
<footer className="flex items-center justify-center w-full h-24 border-t">
  {/* Footer content */}
</footer>

    </div>
  )
}

export default Home;
