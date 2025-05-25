import Image from 'next/image';
import Head from 'next/head';
import Navbar from '../components/navbar';
import '../app/globals.css'
import { FaExternalLinkAlt } from 'react-icons/fa'
import Footer from '../components/footer'
const About = () => {
  return (
    <div className="bg-[#001734]">
      <Head>
        <title>About | Joshua Chou</title>
      </Head>
      <Navbar />
      <style jsx global>{`
      body {
        background: #001734 !important; /* Force the body background to blue */
      }
    `}</style>
      <main className="flex flex-col md:flex-row md:justify-center md:items-center  my-12 mx-auto px-20 pt-20 lg:pt-24 ">

        {/* Image section */}
        <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
          <Image 
            src="/profile_pic.jpeg" // Replace with the path to your image
            alt="Joshua"
            width={300} // These are just placeholder values
            height={300} 
            className="rounded-full" 
            layout="intrinsic" // This prop is needed for next/image component
          />
        </div>
        {/* Description section */}
        <div className="md:w-2/3 text-center md:text-left">
          <h1 className="text-4xl font-bold">Hi,  I&apos;m Joshua.</h1>
          <p className="mt-2 text-lg">
  I&apos;m a Computer Science student at the University of Toronto and a software developer. <br></br>
  I have been a passionate programmer for over 5 years. Whether it&apos;s through the creativity of hackathons or developing educational applications, 
  I code because I want to innovate, reason through tasks, and build programs that benefit others and simplify everyday life.
</p>

        </div>
      </main>
      <section className="py-6">
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center">Hobbies and Interests</h2>
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">

      <div className="hobby-box bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg p-4 shadow-lg">
        <h3 className="text-xl font-bold">Teaching</h3>
        <p>I have always enjoyed interacting with and helping others. During the pandemic, I started volunteering at various organizations. I am now a coding and Mathematics tutor on Superprof. </p>
      </div>
      <div className="hobby-box bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg p-4 shadow-lg">
        <h3 className="text-xl font-bold">Meditating</h3>
        <p>I have been meditating daily for 5 years. It&apos;s a way for things to settle down. I always feel much lighter and clearer afterwards. </p>
      </div>
      <div className="hobby-box bg-gradient-to-r from-purple-500 to-indigo-400 rounded-lg p-4 shadow-lg">
        <h3 className="text-xl font-bold">Playing Piano</h3>
        <p>I have been playing piano for over 10 years. I enjoy making music, and it helps me relax. </p>
      </div>
      <div className="hobby-box bg-gradient-to-r from-green-600 to-lime-600 rounded-lg p-4 shadow-lg">
        <h3 className="text-xl font-bold">Frisbee</h3>
        <p>I play Ultimate Frisbee at school, and I find it is a great way to have fun and exercise teamwork.  </p>
      </div>
    </div>
  </div>
</section>

<section className="py-6">
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center">Extracurriculars</h2>
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">

    <div className="hobby-box bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg p-4 shadow-lg hover:translate-y-[-7px] transition-transform duration-300 relative">
  <a href="https://frasercodes.vercel.app/" target="_blank" className="absolute top-0 right-0 p-2">
    <FaExternalLinkAlt /> {/* FontAwesome Icon */}
  </a>
  <h3 className="text-xl font-bold hover:underline"><a target="_blank" href="https://frasercodes.vercel.app/">Executive Teaching Lead at John Fraser Computer Science Club</a></h3>
  <b>June 2023-June 2024</b>
  <br></br>
  <p>I joined the Executive team of the computer science club after a successful application and interview. I lead weekly meetings covering computer science topics. My contributions extend to leading the Fraser Hacks competition, helping develop 
    the <u><a target="_blank" href="https://frasercodes.vercel.app/"> club website</a></u>, promoting the club on social media or in events, and reviewing general member applications.</p>
</div>
      
      <div className="hobby-box bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg p-4 shadow-lg hover:translate-y-[-7px] transition-transform duration-300 relative">
      <a href="https://www.udemy.com/course/100-days-of-code/" target="_blank" className="absolute top-0 right-0 p-2">
    <FaExternalLinkAlt /> {/* FontAwesome Icon */}
  </a>
      <a target="_blank" href='https://www.udemy.com/course/the-web-developer-bootcamp/'>
        <h3 className="text-xl font-bold hover:underline">The Web Developer Bootcamp</h3>
      
        <b>September 2020 - February 2021</b>
        <br></br>
        <p>I started learning web development with the lessons and projects in this bootcamp. 
          This program offers a well structured program, covering key areas: HTML,CSS, Javascript, Node.js and MongoDB</p>
          </a>
      </div>
    
      <div className="hobby-box bg-gradient-to-r from-purple-500 to-indigo-400 rounded-lg p-4 shadow-lg">
        <h3 className="text-xl font-bold">General Member at John Fraser Computer Science Club</h3>
        <b>September 2021 - June 2023</b>
        <br></br>
        <p>I started my first 2 years in the computer science club as a general member, 
          attending weekly meetings and expanding my knowledge of computer science from competitive programming to machine learning. </p>
      </div>
    
     
<div className="hobby-box bg-gradient-to-r from-green-600 to-lime-600 rounded-lg p-4 shadow-lg hover:translate-y-[-7px] transition-transform duration-300 relative">
  <a href="https://www.udemy.com/course/100-days-of-code/" target="_blank" className="absolute top-0 right-0 p-2">
    <FaExternalLinkAlt /> {/* FontAwesome Icon */}
  </a>
  <h3 className="text-xl font-bold hover:underline">
  <a href="https://www.udemy.com/course/100-days-of-code/" target="_blank"> 100 Days of Code: The Complete Python Pro Bootcamp for 2023</a>
  </h3>
  <b>September 2020 - February 2021</b>
  <br></br>
        <p>This bootcamp gave me the set of skills needed for backend development in applications. </p>
   
      </div>
    
    </div>
  </div>
</section>
<Footer />
    </div>
  );
  
};

export default About;
