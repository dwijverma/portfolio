import { useEffect, useState } from "react";
import "./dark-mode.css";

const DarkMode = () => {
  const [theme, setTheme] = useState("dark");
  const handleChange = () => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div
      className={`special-border w-full h-full dark-mode ${theme} p-10`}
    >
      <input
        id="switch"
        type="checkbox"
        onChange={handleChange}
        checked={theme === "light"}
        style={{ display: "none" }}
      />
      <div className="app">
        <label className="label" htmlFor="switch">
          <div className="content">
            <div className="circle">
              <div className="crescent"></div>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default DarkMode;
