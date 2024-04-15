import Image from 'next/image';
import Head from 'next/head';
import Navbar from '../components/navbar';
import '../app/globals.css';
import Footer from '../components/footer'
const Skills = () => {
  function toggleReadMore() {
    const description = document.getElementById('description');
    const btn=document.querySelector("#read")
    if (description && btn){
    if (description.classList.contains('max-h-24')) {
      description.classList.remove('max-h-24');
      description.classList.add('max-h-full');
      btn.innerHTML="Read Less"

    } else {
      description.classList.remove('max-h-full');
      description.classList.add('max-h-24');
      btn.innerHTML="Read More"
    }
  }
  }
  return (
    <>
      <Head>
        <title>Experience | Joshua Chou</title>
      </Head>
      <Navbar />

      <section className="py-6 pt-20 lg:pt-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">Skills and Awards</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-10">
    
            {/* Volunteer of The Year Award */}
            <div className="flex flex-col md:flex-row items-start gap-4 award-box bg-gradient-to-t from-[#a67c00] via-[#ca9f06] to-[#fed700] rounded-lg p-8 shadow-lg">

<div className="flex-1 space-y-4">
  <h4 className="text-xl font-bold">Volunteer of The Year Award - Brookedge Academy</h4>
  <p className="text-ellipsis overflow-hidden max-h-24" id="description">During the covid pandemic, where volunteer opportunities were scarce, I actively sought out ways I could involve myself in the community.
     After tutoring at Brookedge Academy for over a year, I decided I wanted to get creative. I realized that it was more difficult for students to learn online, so I created
     a prototype of the Learn Chemistry app and presented it to the leaders of the organization. I dedicated 3 months and 125 hours to developing this app and eventually used it to 
     lead the Brookedge Academy Young Chemists workshop.</p>
  <button id="read" className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700" onClick={toggleReadMore}>Read More</button>
</div>


  
  <div className="flex-shrink-0">
    <Image src="/volunteer-award.png" alt="Volunteer of The Year Award" width={300} height={500} />
  </div>
</div>

            {/* Coding Skill */}
            <div className="skill-box bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg p-4 shadow-lg">
              <h4 className="text-xl font-bold">Coding</h4>
              <p >I have more than 5 years of coding experience and have worked individually or with other developers to create projects such as Relief Exchange, Grade Genius, Learn Chemistry and Cahighschools.org.
               I have experience in Javascript, React, Nextjs, Node, Python, Golang, and Java. </p>
            </div>

            {/* Fermat Contest Award */}
            <div className=" award-box bg-gradient-to-t from-[#a67c00] via-[#ca9f06] to-[#fed700] rounded-lg p-8 shadow-lg">
              <h4 className="text-xl font-bold">Certificate of Distinction-Fermat Contest 2023</h4>
              <p>I achieved a certificate of distinction in the Universty of Waterloo Fermat contest, reserved for the top 25% of competitors. This international contest focuses on logical thinking and problem solving rather than curriculum content.  </p>
              <Image src="/fermat.png" alt="Fermat Contest Award" width={500} height={300} />
            </div>

            {/* Mathematics Skill */}
            <div className="skill-box bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg p-4 shadow-lg">
              <h4 className="text-xl font-bold">Mathematics</h4>
              <p>I have always had a passion for mathematics and started borrowing calculas books from the library when I was in grade 8. Throughout my senior high school years I consistently excelled in mathematics, scoring an average of 98.5% in mathematics courses</p>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  )

  
}
export default Skills;
