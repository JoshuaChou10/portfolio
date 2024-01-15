import Image from 'next/image';
import Head from 'next/head';
import Navbar from '../components/navbar';
import '../app/globals.css';

const Experience = () => {
  return (
    <>
      <Head>
        <title>Experience | Joshua Chou</title>
      </Head>
      <Navbar />
      <div className="bg-gray-900 text-white min-h-screen">
        <div className="pt-10 pb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>
          <div className="max-w-4xl mx-auto p-4">
            <div className="relative border-l border-gray-200 pl-4">
              {/* Experience Block */}
              <div className="space-y-10"> {/* This wrapper introduces space between the items */}

                {/* Experience Item 1 */}
               
                
                <div className="relative leading-7">
                  <div className="absolute -left-3 mt-1.5 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-900"></div>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <Image 
              src='/chs-logo.png'
              alt='Canadian High Schools'
              width={100}  // Adjust the width as needed
              height={25} // Adjust the height as needed
              className="mb-4"
            />
                    <h3 className="text-xl font-semibold">Director of IT</h3>
                    <p className=" font-semibold">Canadian High Schools</p>
                    <time className="block text-sm font-normal leading-none text-gray-400 mt-1">July 2023 - Present</time>
                    <ul className="list-disc ml-5 mt-4 mb-4 text-gray-300">
                      <li>Co-founded the organization where high school students can post information to wiki and earn volunteer hours</li>
                      <li>Managed cross-functional teams to align technology with strategic goals.</li>
                      <li>Led a team of developers to implement innovative software solutions.</li>         
                      <li>Ensured security compliance and data protection measures were upheld.</li>
                    </ul>
                  
                  </div>
                </div>
                <div className="relative leading-7">
                  <div className="absolute -left-3 mt-1.5 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-900"></div>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <Image 
              src='/superprof.png'
              alt='Canadian High Schools'
              width={100}  // Adjust the width as needed
              height={25} // Adjust the height as needed
              className="mb-4"
            />
                    <h3 className="text-xl font-semibold">Coding Tutor</h3>
                    <p className=" font-semibold">Superprof</p>
                    <time className="block text-sm font-normal leading-none text-gray-400 mt-1">August 2022 - Present</time>
                    <ul className="list-disc ml-5 mt-4 mb-4 text-gray-300">
                      <li>Provide personalized assistance to college and coding bootcamp students with their assignments.</li>
                      <li>Ensure students understand the coding mechanism </li>
                      <li>Taught Python, Javascript, React, Java, HTML and CSS</li>
                 
                    </ul>
                  
                  </div>
                </div>
                <div className="relative leading-7">
                  <div className="absolute -left-3 mt-1.5 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-900"></div>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <Image 
              src='/grade-genius-logo.png'
              alt='Grade Genius'
              width={100}  // Adjust the width as needed
              height={25} // Adjust the height as needed
              className="mb-4"
            />
                  <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                  <p className="font-semibold">Grade Genius</p>
                  <time className="block text-sm font-normal leading-none text-gray-400 mt-1">September 2023- January 2023</time>
                    <ul className="list-disc ml-5 mt-4 mb-4 text-gray-300">         
                      <li>Developed a contemporary, sleek course management web application</li>
                      <li>Utilized Python Flask, SQLalchemy, Javascript and Django </li>
                      <li>Automates the calculation of grades for high school students around canada, enhancing educational efficiency </li>
                    </ul>
                   
                  </div>
                </div>
                <div className="relative leading-7">
                  <div className="absolute -left-3 mt-1.5 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-900"></div>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <Image 
              src='/brookedge-logo.png'
              alt='Brookedge Academy'
              width={100}  // Adjust the width as needed
              height={25} // Adjust the height as needed
              className="mb-4"
            />
                  <h3 className="text-xl font-semibold">Lead Web Developer - Learn Chemistry</h3>
                    
                    <p className=" font-semibold">Brookedge Academy</p>
                    <time className="block text-sm font-normal leading-none text-gray-400 mt-1">December 2021 - Febuary 2022</time>
                    <ul className="list-disc ml-5 mt-4 mb-4 text-gray-300">
                      <li>Led the Development of the Learn Chemistry App</li>
                      <li>Allowed over 100 students to prepare for assessments with integrated quizzes and lesson pages</li>
                      <li>Used to lead Brookedge Academy workshops such as the Young Chemists workshop</li>
                      <li>Posted on Brookedge Academy main website</li>
                      
                    </ul>
                  
                  </div>
                </div>
                



               
              
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
