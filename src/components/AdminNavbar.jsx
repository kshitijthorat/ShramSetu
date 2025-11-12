import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  Flag,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const AdminNavbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`h-screen ${
        isCollapsed ? "w-20" : "w-60"
      } bg-blue-600 text-white flex flex-col items-center py-6 sticky top-0 shadow-lg transition-all duration-500 ease-in-out`}
    >
      {/* Collapse / Expand Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute top-5 right-[-12px] bg-blue-700 p-1 rounded-full shadow-md hover:bg-blue-500 transition pointer-events-auto"
      >
        {isCollapsed ? (
          <ChevronRight size={20} />
        ) : (
          <ChevronLeft size={20} />
        )}
      </button>

      {/* Logo Section */}
      <div
        className={`text-2xl font-bold mb-10 tracking-wide transition-all duration-500 ${
          isCollapsed ? "opacity-0 translate-x-[-20px]" : "opacity-100"
        }`}
      >
        Shram<span className="text-yellow-300">Setu</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-6 w-full px-4">
        {[
          { name: "Dashboard", icon: <LayoutDashboard size={20} />, to: "/admin/dashboard" },
          { name: "Users", icon: <Users size={20} />, to: "/admin/users" },
          { name: "Jobs", icon: <Briefcase size={20} />, to: "/admin/jobs" },
          { name: "Reports", icon: <Flag size={20} />, to: "/admin/reports" },
          { name: "Settings", icon: <Settings size={20} />, to: "/admin/settings" },
        ].map((item, idx) => (
          <NavLink
            key={idx}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded-lg hover:bg-blue-500 transition-all ${
                isActive ? "bg-blue-500" : ""
              }`
            }
          >
            {item.icon}
            {!isCollapsed && (
              <span className="transition-opacity duration-300">{item.name}</span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="mt-auto px-4 w-full">
        <button
          className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 w-full py-2 rounded-lg transition-all"
        >
          <LogOut size={18} />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default AdminNavbar;
