// app/page.tsx
import Head from "next/head";
import Navbar from '../components/navbar';

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Adjust the top margin to move the content up */}
      <main className="flex flex-col items-center w-full px-20 text-center mt-8">
  <div className="flex flex-col items-center">
    <h1 className="text-blue-600 text-9xl font-bold">Joshua</h1>
    <h2 className="text-blue-600 text-9xl font-bold">Chou</h2>
  </div>
  <br></br>
  <br></br>
  <br></br>

  <div className="mt-3 text-2xl">
    <p className="font bold" >I am a high school student and<br></br> <p className="text-blue-600 font bold">software developer </p></p>
  </div>
</main>
      {/* Add a section for projects */}
      <section className="w-full">
      <section className=" py-8">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
    {/* Sample project card */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-56 object-cover object-center" src="/project-image.jpg" alt="project image" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">Project Title</h3>
        <p className="mt-2 text-gray-600">Short description of the project...</p>
        <div className="mt-4">
          <a href="#" className="text-teal-600 hover:underline">Read more</a>
        </div>
      </div>
      
    </div>

    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-56 object-cover object-center" src="/project-image.jpg" alt="project image" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">Project Title</h3>
        <p className="mt-2 text-gray-600">Short description of the project...</p>
        <div className="mt-4">
          <a href="#" className="text-teal-600 hover:underline">Read more</a>
        </div>
      </div>
      
    </div>
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-56 object-cover object-center" src="/project-image.jpg" alt="project image" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">Project Title</h3>
        <p className="mt-2 text-gray-600">Short description of the project...</p>
        <div className="mt-4">
          <a href="#" className="text-teal-600 hover:underline">Read more</a>
        </div>
      </div>
      
    </div>
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-56 object-cover object-center" src="/project-image.jpg" alt="project image" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">Project Title</h3>
        <p className="mt-2 text-gray-600">Short description of the project...</p>
        <div className="mt-4">
          <a href="#" className="text-teal-600 hover:underline">Read more</a>
        </div>
      </div>
      
    </div>
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-56 object-cover object-center" src="/project-image.jpg" alt="project image" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">Project Title</h3>
        <p className="mt-2 text-gray-600">Short description of the project...</p>
        <div className="mt-4">
          <a href="#" className="text-teal-600 hover:underline">Read more</a>
        </div>
      </div>
      
    </div>
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-56 object-cover object-center" src="/project-image.jpg" alt="project image" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">Project Title</h3>
        <p className="mt-2 text-gray-600">Short description of the project...</p>
        <div className="mt-4">
          <a href="#" className="text-teal-600 hover:underline">Read more</a>
        </div>
      </div>
      
    </div>
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-56 object-cover object-center" src="/project-image.jpg" alt="project image" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">Project Title</h3>
        <p className="mt-2 text-gray-600">Short description of the project...</p>
        <div className="mt-4">
          <a href="#" className="text-teal-600 hover:underline">Read more</a>
        </div>
      </div>
      
    </div>
    
  </div>
</section>

      </section>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        {/* Footer content */}
      </footer>
    </div>
  )
}

export default Home;
