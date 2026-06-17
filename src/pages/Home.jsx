import profileImage from "../assets/image.jpg";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <img
        src={profileImage}
        alt="Najma Zahoor"
        className="w-40 h-40 mb-5 rounded-full object-cover border-4 border-blue-500 shadow-lg"/>
        <h1 className="text-5xl font-bold">
        Najma Zahoor
      </h1>
      <p className="mt-2 text-xl text-gray-300">
        Web Developer
      </p>
      <button className="mt-5 rounded-lg bg-blue-500 px-6 py-2 font-medium transition hover:bg-blue-600">
        Download Resume
      </button>
    </div>
  );
}
export default Home;