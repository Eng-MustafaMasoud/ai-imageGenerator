import React from "react";
import { Link } from "react-router-dom";
import {logo} from "../assets"
const Header = () => {
  return (
    <header className="bg-white w-full  border-b border-b-gray-200 ">
      <nav className="max-w-[1366px] mx-auto flex items-center justify-between py-4 px-2 sm:px-4">
        <span>
          <Link to="/" className="w-28 font-bold ">Image Generator</Link>
        </span>
        <Link to="/create" className="font-inter bg-blue-500 hover:bg-blue-400 text-white px-2 py-1 rounded-sm">Create</Link>
      </nav>
    </header>
  );
};

export default Header;
