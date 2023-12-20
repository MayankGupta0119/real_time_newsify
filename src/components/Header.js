import React, { useContext } from "react";
import { Appcontext } from "../context/Appcontext";

const Header = () => {
  const { darkmode, setDarkMode } = useContext(Appcontext);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkmode);
  };

  return (
    <div
      className={`flex flex-row justify-evenly items-center w-full flex-wrap ${
        darkmode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <header className="py-4 text-4xl font-bold underline w-[80%] flex flex-wrap justify-center items-center">
        <h1>RealTimeNewsify</h1>
      </header>
      <div className="w-[18%]">
        <button onClick={handleDarkModeToggle}>
          <div className="w-full flex flex-wrap justify-center items-center">
            <input type="checkbox" className="theme-checkbox" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
