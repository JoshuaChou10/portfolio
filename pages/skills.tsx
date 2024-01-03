
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