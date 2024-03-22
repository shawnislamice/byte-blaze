import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Nav = () => {
  const [theme, setTheme] = useState("light");
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <div>
      <div className="navbar bg-base-100 shadow-lg px-4 fixed z-10">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost gap-0 text-secondary normal-case text-2xl font-bold"
          >
            Byte<span className="text-primary">Blaze</span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 font-bold space-x-5 md:mx-4">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? "text-primary" : "")}
              to="/blogs"
            >
              Blogs
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? "text-primary" : "")}
              to="/bookmarks"
            >
              Bookmarks
            </NavLink>
          </ul>
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              onChange={handleToggle}
              type="checkbox"
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Nav;
