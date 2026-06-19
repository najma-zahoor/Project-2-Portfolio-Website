function Projects() {
  const projects = [
    {
      name: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my skills, projects, and contact information."
    },
    {
      name: "E-Commerce App",
      description:
        "An online shopping application with product listings, cart management, and checkout features."
    },
    {
      name: "Weather App",
      description:
        "A weather forecasting application that displays real-time weather updates for different locations."
    }
  ];

  return (
    <div className="p-10 text-white">
      <h1 className="text-4xl font-bold mb-8">
        Projects
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-white/10 p-5 rounded-xl hover:scale-105 transition"
          >
            <h2 className="text-2xl font-bold">
              {project.name}
            </h2>

            <p className="mt-2 text-gray-300">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;