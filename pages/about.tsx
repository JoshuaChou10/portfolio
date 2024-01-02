import Image from 'next/image';
import Head from 'next/head';
import Navbar from '../components/navbar';
import '../app/globals.css'
const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Navbar />
      <main className="flex flex-col md:flex-row md:justify-center md:items-center md:space-x-6 my-12 mx-auto px-20">
        {/* Image section */}
        <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
          <Image 
            src="/pic.png" // Replace with the path to your image
            alt="Joshua"
            width={300} // These are just placeholder values
            height={300} 
            className="rounded-full" 
            layout="intrinsic" // This prop is needed for next/image component
          />
        </div>
        {/* Description section */}
        <div className="md:w-2/3 text-center md:text-left">
          <h1 className="text-4xl font-bold">Hi,  I'm Joshua</h1>
          <p className="mt-2 text-lg">
            {/* Add your description here */}
           I'm a high school student and a software developer in Ontario. As a programmer I have always enjoyed watching the logic flow into code. 
           I aim to create programs that will benefit others, whether that's by creating educational applications, or developing tools that simplify life and improve efficiency. 
          </p>
        </div>
      </main>
      <section className="py-6">
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center">Hobbies and Interests</h2>
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Hobbies: Repeat for each hobby */}
      <div className="hobby-box bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg p-4 shadow-lg">
        <h3 className="text-xl font-bold">Teaching</h3>
        <p>Description of Hobby 1</p>
      </div>
      <div className="hobby-box bg-gradient-to-r from-pink-500 to-orange-400 rounded-lg p-4 shadow-lg">
        <h3 className="text-xl font-bold">Meditating</h3>
        <p>Description of Hobby 2</p>
      </div>
      <div className="hobby-box bg-gradient-to-r from-purple-500 to-indigo-400 rounded-lg p-4 shadow-lg">
        <h3 className="text-xl font-bold">Playing Piano</h3>
        <p>Description of Hobby 3</p>
      </div>
      <div className="hobby-box bg-gradient-to-r from-green-500 to-lime-400 rounded-lg p-4 shadow-lg">
        <h3 className="text-xl font-bold">Frisbee</h3>
        <p>Description of Hobby 4</p>
      </div>
    </div>
  </div>
</section>
<section className="py-6">
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center">Skills and Awards</h2>
    <div className="mt-4 flex flex-col md:flex-row gap-4">
      
      {/* Skills Section */}
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-center md:text-left">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-2">
          {/* Repeat for each skill */}
          <div className="skill-box bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg p-4 shadow-lg">
            <h4 className="text-xl font-bold">Mathematics</h4>
            <p>Description of Skill 1</p>
          </div>
          <div className="skill-box bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg p-4 shadow-lg">
            <h4 className="text-xl font-bold">Coding</h4>
            <p>Bootcamps, projects. Python, Golang, Nextjs, Java</p>
          </div>
        </div>
      </div>

      {/* Awards Section */}
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-center md:text-left">Awards</h3>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-2">
          {/* Repeat for each award */}
          <div className="award-box bg-gradient-to-r from-pink-500 to-orange-400 rounded-lg p-4 shadow-lg">
            <h4 className="text-xl font-bold">Certificate of Distinction-Fermat Contest 2023</h4>
            <p>Description of Award 1</p>
          </div>
          <div className="award-box bg-gradient-to-r from-pink-500 to-orange-400 rounded-lg p-4 shadow-lg">
            <h4 className="text-xl font-bold">Volunteer of The Year Award-Brookedge Academy</h4>
            <p>Description of Award 2</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

    </>
  );
};

export default About;
