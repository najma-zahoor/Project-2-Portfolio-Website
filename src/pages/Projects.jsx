function Projects() {
  const projects = [
    "Portfolio Website",
    "E-Commerce App",
    "Weather App"];
  return (
    <div className="p-10 text-white">
      <h1 className="text-4xl font-bold mb-8">
        Projects
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project}
            className="bg-white/10 p-5 rounded-xl hover:scale-105 transition">
            <h2 className="text-2xl font-bold">
              {project}
            </h2>
            <p className="mt-2">
              Project Description
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Projects;