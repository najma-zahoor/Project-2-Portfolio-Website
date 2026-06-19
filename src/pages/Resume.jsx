function Resume() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-white">
      <h1 className="text-5xl font-bold">Najma Zahoor</h1>
      <p className="text-xl text-gray-300 mt-2">
        Web Developer
      </p>

      {/* Contact */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2">
          Contact
        </h2>
        <p className="mt-2"> najma@example.com</p>
        <p> +92 300 123456789</p>
        <p>Pakistan</p>
      </section>

      {/* Profile */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2">
          Profile
        </h2>
        <p className="mt-2 text-gray-300">
        Web Developer with experience in creating responsive and user-friendly websites using React, JavaScript, HTML, CSS, and Tailwind CS Passionate about building modern web applications and continuously learning new technologies.
        </p>
      </section>

      {/* Education */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2">
          Education
        </h2>
        <div className="mt-2">
          <h3 className="font-bold">BS Information Technology</h3>
          <p className="text-gray-300">
            University of the Punjab | Graduation: 2025
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2">
          Skills
        </h2>
        <ul className="mt-2 list-disc list-inside text-gray-300">
          <li>React.js</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML5 and CSS3</li>
          <li>Tailwind CSS</li>
          <li>Responsive Web Design</li>
          <li>Git and GitHub</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2">
          Projects
        </h2>

        <div className="mt-3">
          <h3 className="font-bold">Portfolio Website</h3>
          <p className="text-gray-300">
            Developed a responsive personal portfolio website using React and
            Tailwind CSS to showcase skills, projects, and achievements.
          </p>
        </div>

        <div className="mt-3">
          <h3 className="font-bold">E-Commerce App</h3>
          <p className="text-gray-300">
            Built an online shopping application with product listings, cart
            functionality, and modern UI design.
          </p>
        </div>

        <div className="mt-3">
          <h3 className="font-bold">Weather App</h3>
          <p className="text-gray-300">
            Created a weather application that fetches and displays real-time
            weather information using external APIs.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2">
          Experience
        </h2>
        <p className="mt-2 text-gray-300">
          Fresher Web Developer with hands-on experience in academic and
          personal projects involving React, JavaScript, and modern frontend
          technologies.
        </p>
      </section>
    </div>
  );
}

export default Resume;