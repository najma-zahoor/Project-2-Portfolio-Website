import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Dashboard/Profile";
import Certificates from "./pages/Dashboard/Certificates";
import Settings from "./pages/Dashboard/Settings";
function App() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* Nested Routes */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        >
          <Route
            path="profile"
            element={<Profile />}
          />
          <Route
            path="certificates"
            element={<Certificates />}
          />
          <Route
            path="settings"
            element={<Settings />}
          />
        </Route>
      </Routes>
    </div>
  );
}
export default App;