import { NavLink } from "react-router-dom"; 
function Navbar() {
  const active = ({ isActive }) =>
    isActive ? "text-blue-400" : "text-white";
   return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/10 border-b border-white/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-white text-2xl font-bold">
          Portfolio
        </h1>
        <div className="flex gap-6">
          <NavLink className={active} to="/">Home</NavLink>
          <NavLink className={active} to="/about">About</NavLink>
          <NavLink className={active} to="/skills">Skills</NavLink>
          <NavLink className={active} to="/projects">Projects</NavLink>
          <NavLink className={active} to="/contact">Contact</NavLink>
          <NavLink className={active} to="/dashboard">Dashboard</NavLink>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;