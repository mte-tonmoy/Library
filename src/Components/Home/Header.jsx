import React from "react";
import { BoltIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      {/* Logo Section */}
      <Link to="/" className="inline-flex items-center">
        <BoltIcon className="h-6 w-6 text-blue-500" />
        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
          nextPage
        </span>
      </Link>
      {/* Nav Item section */}
      <ul className="items-center hidden space-x-8 lg:flex font-semibold">
        <li>
          <NavLink
            to="/"
            title="Home"
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/book"
            title="Books"
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            Books
          </NavLink>
        </li>{" "}
        <li>
          <NavLink
            to="/about"
            title="About"
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            about Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
