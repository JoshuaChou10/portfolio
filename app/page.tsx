// app/page.tsx
"use client";
import Head from "next/head";
import {useState } from 'react';
import Navbar from '../components/navbar';
import styles from '../styles.module.css'; 
import Image from 'next/image';
import Footer from '../components/footer'
import { setDefaultAutoSelectFamily } from "net";
//relief exchange github
// https://github.com/AritroSaha10/ReliefExchange-ICS4U/tree/ce97ac9770ed0dded6ecdace65ab861707565b3e
const Home = () => {
  const [animate] = useState(true);
  const projects = [
    //put certificae 
    { title: 'Solar Index Map: Mississauga Open Data Hackathon 4th place overall', description: "A website with an interactive heatmap using open data to design a solar index map for evaluating solar energy potential. This project was created in the Mississauga Open Data Hackathon and won 4th place overall. I worked on the frontend using leaflet.js and heatmap.js", imageUrl: '/solar.png' ,link:'https://opendata-hackathon-2024-mississauga.hub.arcgis.com/'},
    { title: 'Fraser Hacks', description: "John Fraser Secondary School's official hackathon website. I was responsible for the animations and hackathon description.", imageUrl: '/hacks.png' ,link:'https://www.fraserhacks.ca/'},
    {title:'Scholar', description: 'A streamlined school and course manager that allows students to take notes, set reminders, save important links, keep track of their schedule, the weather and any upcoming assessments', imageUrl: '/scholar.png' ,link:"https://scholar-j.vercel.app/"},
    { title: 'Grade Genius', description: 'A comprehensive course manager app utilizing Flask, SQL and JavaScript. This application allows students to track course assessments, grades, goals, study times and notes. ', imageUrl: '/grade-genius.png' ,link:'https://youtu.be/cccXBHTkUmE?si=prIcJLCm2WQCiaNT'},
    { title: 'Relief Exchange', description: 'Designed to alleviate poverty, this platform provides a connection for donors and those in need. It facilitates an impactful exchange of resources, easily reaching the underprivileged and those willing to help. I worked on both the backend and frontend, utilizing Golang, Next.js and Firebase. ', imageUrl: '/relief-ex.png' ,link:"https://reliefexchange.aritrosaha.ca/"},
    { title: 'Mindfulness and Meditation', description: 'An application for anyone interested in starting meditation practice. Includes a mindfulness course, meditation timer and calendar.', imageUrl: '/mindfulness.png' ,link:"https://mindfulness-eight.vercel.app/"},
    { title: 'Learn Chemistry-Brookedge Academy', description: "An interactive app developed for Brookedge Academy. I received the Volunteer of the Year award for the development of this app. It was posted on Brookedge Academy's main website. The interactive quizzes and features were used in the Young Chemists Workshop I led. ", imageUrl: '/chem.png' ,link:'https://www.brookedge.org/event-details/young-chemists-workshop-2022-08-08-16-00-1'},
    { title: 'Canadian High Schools', description: 'Led the development of a wiki platform where high school students can share tools and information while earning volunteer hours. My role focused on using Django to build a user-friendly interface.  ', imageUrl: '/chs-logo.png' ,link:'http://cahighschools.org/login'},
    { title: 'Tracker', description: 'It has been proven that it is easier to build habits than to break them. This application acts as a progress tracker for anyone looking to set goals and improve their daily lives. ', imageUrl: '/tracker.png' ,link:'https://tracker-six-orpin.vercel.app/'},

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
    <div className="flex flex-col w-full pt-20 lg:pt-24 ">
      <div className="bg-[#F95738]">
      <Navbar />
      <Head>
        <title>Joshua Chou | Software Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center w-full text-center mt-8">
        <div
          className={`flex flex-col items-center justify-center ${
            animate ? styles.startSlideDown : ''
          }`}
          style={{
            backgroundImage: "url('/waves.svg')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center bottom',
            backgroundSize: 'cover',
            padding: '6rem 0',
            width: '100%',
            maxWidth: '100%',
          }}
        >
          <h1 className="text-black-600 text-4xl md:text-9xl font-bold">Joshua</h1>
          <h2 className="text-black-600 text-4xl md:text-9xl font-bold">Chou</h2>

          <br />
          <br />
          <br />
          <div className="mt-3 text-2xl">
            <p className="font-bold">
              I am a Computer Science student at the University of Toronto and a
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
                software developer
              </span>
            </p>
          </div>
        </div>
      </main>
    </div>
   
    <section className="w-full bg-[#001734]">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {projects.map((project, index) => (
      <div
        key={project.title}
        className={`flex ${
          index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
        } items-center my-8`}
      >
        {/* Project Image */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={project.link}
          className="w-full md:w-1/2 hover:translate-y-[-10px] transition-transform duration-300"
        >
          <Image
            className="w-full h-auto object-cover"
            src={project.imageUrl}
            alt={project.title}
            width={500}
            height={600}
          />
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
  </div>
</section>


<Footer />

    </div>
  )
}

export default Home;
