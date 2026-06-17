import { NavLink, Outlet } from "react-router-dom";
function Dashboard() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-5">
        <h2 className="text-2xl font-bold mb-8">
          Dashboard
        </h2>
        <div className="flex flex-col gap-4">
          <NavLink to="profile">
            Profile
          </NavLink>
          <NavLink to="certificates">
            Certificates
          </NavLink>
          <NavLink to="settings">
            Settings
          </NavLink>
        </div>
      </div>
      {/* Content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;