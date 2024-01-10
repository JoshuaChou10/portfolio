import '../app/globals.css';
import Head from 'next/head';
import Navbar from '../components/navbar';
const Projects=()=>{
    const projects = [

        { title: 'Relief Exchange', description: 'Designed to alleviate poverty, this platform provides a connection for donors and those in need. It facilitates an impactful exchange of recourses, easily reaching the underprivileged and those willing to help. I worked on both the backend and frontend, utilizing Golang, Next.js and Firebase. ', imageUrl: '/relief-ex.png' ,link:"https://reliefexchange.aritrosaha.ca/"},
        { title: 'Grade Genius', description: 'A comprehensive course manager app utilizing Flask, SQl and Javascript. Allows students to track course assessments, grades, goals, study times and notes. ', imageUrl: '/grade-genius.png' ,link:'https://gradegenius.joshuachou.com'},
        { title: 'Learn Chemistry-Brookedge Academy', description: "An interactive app developed for Brookedge Academy. I was awarded the volunteer of the year award by the Academy for the development of this app.  Complete with quizzes and lessons. Posted on Brookedge Academy's main website, and used in the Young Chemists Workshop. ", imageUrl: '/chem.png' ,link:'https://learn-chemistry.joshuac16.repl.co/'},

      ];
    return(<>
     <Head>
        <title>Projects | Joshua Chou</title>
      </Head>
      <Navbar />
     
     <div className="flex flex-col w-full">

     <h1 className="text-4xl font-bold text-center m-5">Projects</h1>
  <h4 className="text-center">Projects I've developed over the years.</h4>
     <section className="w-full">

  {projects.map((project, index) => (
    <div key={project.title} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center my-8`}>
      
      {/* Project Image */}
      <a target='_blank' rel="noopener noreferrer" href={project.link} className="w-full md:w-1/2 hover:translate-y-[-10px] transition-transform duration-300">
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
</div>
    </>
    )
}
export default Projects;