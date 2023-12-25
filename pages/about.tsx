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
      <main className="flex flex-col md:flex-row md:justify-center md:items-center md:space-x-6 my-12 mx-auto px-4">
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
          <h1 className="text-4xl font-bold">Hi, I am Joshua</h1>
          <p className="mt-2 text-lg">
            {/* Add your description here */}
            Hi, I am Joshua, a high school student passionate about software development...
          </p>
        </div>
      </main>
      <section className=" py-6">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center md:text-left">Hobbies</h2>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            {/* List your hobbies here */}
            <li>Coding and programming</li>
            <li>Contributing to open-source projects</li>
            <li>Building electronics</li>
            {/* Add more as needed */}
          </ul>
        </div>
      </section>
    </>
  );
};

export default About;
