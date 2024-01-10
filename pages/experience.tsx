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
               
                <div className="relative leading-8">
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
                    <time className="block text-sm font-normal leading-none text-gray-400">November 2021 - Present</time>
                    <ul className="list-disc ml-5 mt-4 mb-4 text-gray-300">
                      <li>Led the Development of the Learn Chemistry App</li>
                      <li>Led a team of developers to implement innovative software solutions.</li>
                      <li>Managed cross-functional teams to align technology with strategic goals.</li>
                      <li>Ensured security compliance and data protection measures were upheld.</li>
                    </ul>
                  
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-3 mt-1.5 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-900"></div>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <Image 
              src='/cahighschools-logo.png'
              alt='Canadian High Schools'
              width={100}  // Adjust the width as needed
              height={25} // Adjust the height as needed
              className="mb-4"
            />
                    <h3 className="text-xl font-semibold">Director of IT</h3>
                    <p className=" font-semibold">Canadian High Schools</p>
                    <time className="block text-sm font-normal leading-none text-gray-400">November 2021 - Present</time>
                    <ul className="list-disc ml-5 mt-4 mb-4 text-gray-300">
                      <li>Engineered the application using Python-Flask, SQLalchemy, and Javascript </li>
                      <li>Led a team of developers to implement innovative software solutions.</li>
                      <li>Managed cross-functional teams to align technology with strategic goals.</li>
                      <li>Ensured security compliance and data protection measures were upheld.</li>
                    </ul>
                  
                  </div>
                </div>
                <div className="relative">
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
                  <p className=" font-semibold">Grade Genius</p>
                    <ul className="list-disc ml-5 mt-4 mb-4 text-gray-300">
                      <li>Overhauled IT infrastructure, resulting in a 20% increase in efficiency.</li>
                      <li>Led a team of developers to implement innovative software solutions.</li>
                      <li>Managed cross-functional teams to align technology with strategic goals.</li>
                      <li>Ensured security compliance and data protection measures were upheld.</li>
                    </ul>
                    <time className="block text-sm font-normal leading-none text-gray-400">November 2021 - Present</time>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-3 mt-1.5 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-900"></div>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                    <p className="text-gray-400">Grade Genius</p>
                    <ul className="list-disc ml-5 mt-4 mb-4 text-gray-300">
                      <li>Overhauled IT infrastructure, resulting in a 20% increase in efficiency.</li>
                      <li>Led a team of developers to implement innovative software solutions.</li>
                      <li>Managed cross-functional teams to align technology with strategic goals.</li>
                      <li>Ensured security compliance and data protection measures were upheld.</li>
                    </ul>
                    <time className="block text-sm font-normal leading-none text-gray-400">November 2021 - Present</time>
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
