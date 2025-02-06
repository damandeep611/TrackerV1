import { NavLink } from "react-router";

export default function Navigation() {
  return (
    <header className=" bg-white text-black dark:bg-black dark:text-white flex items-center justify-between px-6 h-16 relative z-50">
      <div className="flex items-center justify-between gap-6">
        <span className="font-bold">Tasker 友智</span>
        <nav>
          <ul className="flex items-center justify-between gap-4 text-xs sm:text-sm capitalize">
            <li>
              <NavLink to="/">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/">Feedback</NavLink>
            </li>
            <li>
              <NavLink to="/">Pro</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center justify-between gap-6">
        <button className="bg-white text-black border border-gray-100 p-2 px-6 rounded-lg">
          Sign Up
        </button>
        <button className="bg-blue-600 p-2 px-6 rounded-lg cursor-pointer ">
          Sign In
        </button>
      </div>
    </header>
  );
}
