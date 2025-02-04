import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = ({ setFilter, scrollY, fadeIn }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setFilter(filter);
  };

  return (
    <header
      className={`header ${scrollY > 0 ?  " border-b-1 shadow-black shadow-2xl" : ""}`}
    >
      <div
        className={`filters ${
          fadeIn ? "opacity-100" : "opacity-0"
        } font-poppins transition-opacity duration-1000`}
      >
        <div
          className={`filter-item ${activeFilter === "all" ? "active" : ""}`}
          onClick={() => handleFilterClick("all")}
        >
          All
        </div>
        <div
          className={`filter-item ${activeFilter === "about" ? "active" : ""}`}
          onClick={() => handleFilterClick("about")}
        >
          About
        </div>
        <div
          className={`filter-item ${
            activeFilter === "projects" ? "active" : ""
          }`}
          onClick={() => handleFilterClick("projects")}
        >
          Projects
        </div>
      </div>
    </header>
  );
};

export default Header;
