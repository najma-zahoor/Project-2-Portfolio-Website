function Skills() {
  const skills = [
    { name: "HTML", value: 95 },
    { name: "CSS", value: 90 },
    { name: "JavaScript", value: 85 },
    { name: "React", value: 80 }];
  return (
    <div className="p-10 text-white">
      <h1 className="text-4xl font-bold mb-8">
        Skills
      </h1>
      {skills.map((skill) => (
        <div key={skill.name} className="mb-6">
          <p>{skill.name}</p>
          <div className="bg-gray-700 rounded-full h-4">
            <div
              className="bg-blue-500 h-4 rounded-full"
              style={{ width: `${skill.value}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Skills;