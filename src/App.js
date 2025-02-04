import { useState, useEffect } from "react";
import { motion } from "motion/react";
import "./App.css";
import "./output.css";
import Aboutme from "./Items/Aboutme";
import DarkMode from "./Items/DarkMode";
import Links from "./Items/Links";
import Spotify from "./Items/Spotify";
import Loader from "./Items/Loader";
import Palette from "./Items/Palette";
import DesignersHangout from "./Items/DesignersHangout";
import Modal from "./Items/Modal";
import Description from "./Items/Description";
import Header from "./Items/Header";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [filter, setFilter] = useState("none");
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [layout, setLayout] = useState({
    grid: "grid-cols-4 auto-rows-min",
    aboutme:
      "col-start-1 col-end-5 row-start-1 row-end-2 md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-3",
    darkmode:
      "col-start-1 col-end-3 row-start-2 row-end-3 md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-2",
    links:
      "col-start-3 col-end-5 row-start-2 row-end-3 md:col-start-3 md:col-end-4 md:row-start-3 md:row-end-4",
    spotify:
      "col-start-1 col-end-5 row-start-3 row-end-4 md:col-start-1 md:col-end-3 md:row-start-3 md:row-end-4",
    palette:
      "col-start-1 col-end-5 row-start-4 row-end-5 md:col-start-4 md:col-end-5 md:row-start-2 md:row-end-4",
    description:
      "col-start-1 col-end-5 row-start-5 row-end-6 md:col-start-1 md:col-end-2 md:row-start-4 md:row-end-5",
    designershangout:
      "col-start-1 col-end-5 row-start-6 row-end-7 md:col-start-2 md:col-end-5 md:row-start-4 md:row-end-5",
  });

  useEffect(() => {
    if (filter === "projects") {
      setLayout({
        grid: "grid-cols-4 auto-rows-min",
        palette:
          "col-start-1 col-end-5 row-start-1 row-end-2 md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-3",
        designershangout:
          "col-start-1 col-end-5 row-start-2 row-end-3 md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-2",
        spotify:
          "col-start-1 col-end-5 row-start-3 row-end-4 md:col-start-1 md:col-end-3 md:row-start-2 md:row-end-3",
        darkmode:
          "col-start-1 col-end-3 row-start-4 row-end-5 md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-3",
        links:
          "col-start-3 col-end-5 row-start-4 row-end-5 blur-xs  md:col-start-4 md:col-end-5 md:row-start-3 md:row-end-4",
        aboutme:
          "col-start-1 col-end-5 row-start-5 row-end-6 blur-xs  md:col-start-1 md:col-end-4 md:row-start-3 md:row-end-5",
        description:
          "col-start-1 col-end-5 row-start-6 row-end-7 blur-xs  md:col-start-4 md:col-end-5 md:row-start-4 md:row-end-5",
      });
    }
    if (filter === "about") {
      setLayout({
        grid: "grid-cols-4 auto-rows-min",
        aboutme:
          "col-start-1 col-end-5 row-start-1 row-end-2 md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-3",
        darkmode:
          "col-start-1 col-end-3 row-start-2 row-end-3 md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-2",
        links:
          "col-start-3 col-end-5 row-start-2 row-end-3 md:col-start-3 md:col-end-4 md:row-start-3 md:row-end-4",
        spotify:
          "col-start-1 col-end-5 row-start-3 row-end-4 md:col-start-1 md:col-end-3 md:row-start-3 md:row-end-4 blur-xs",
        palette:
          "col-start-1 col-end-5 row-start-4 row-end-5 md:col-start-4 md:col-end-5 md:row-start-2 md:row-end-4 blur-xs",
        description:
          "col-start-1 col-end-5 row-start-5 row-end-6 md:col-start-1 md:col-end-2 md:row-start-4 md:row-end-5 blur-xs",
        designershangout:
          "col-start-1 col-end-5 row-start-6 row-end-7 md:col-start-2 md:col-end-5 md:row-start-4 md:row-end-5 blur-xs",
      });
    }
    if (filter === "all") {
      setLayout({
        grid: "grid-cols-4 auto-rows-min",
        aboutme:
          "col-start-1 col-end-5 row-start-1 row-end-2 md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-3",
        darkmode:
          "col-start-1 col-end-3 row-start-2 row-end-3 md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-2",
        links:
          "col-start-3 col-end-5 row-start-2 row-end-3 md:col-start-3 md:col-end-4 md:row-start-3 md:row-end-4",
        spotify:
          "col-start-1 col-end-5 row-start-3 row-end-4 md:col-start-1 md:col-end-3 md:row-start-3 md:row-end-4",
        palette:
          "col-start-1 col-end-5 row-start-4 row-end-5 md:col-start-4 md:col-end-5 md:row-start-2 md:row-end-4",
        description:
          "col-start-1 col-end-5 row-start-5 row-end-6 md:col-start-1 md:col-end-2 md:row-start-4 md:row-end-5",
        designershangout:
          "col-start-1 col-end-5 row-start-6 row-end-7 md:col-start-2 md:col-end-5 md:row-start-4 md:row-end-5",
      });
    }
  }, [filter]);

  useEffect(() => {}, [screenSize]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setTimeout(() => setFadeIn(true), 100); // Slight delay for smooth transition
    }, 2000);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => setIsAnimating(true), 0); // Start animation on next render
  };

  const closeModal = () => {
    setIsAnimating(false); // Start closing animation
    setTimeout(() => setIsModalOpen(false), 300); // Delay removal of modal for animation duration
  };

  useEffect(() => {
    const handleResize = () => {
      const newScreenSize = window.innerWidth;
      setScreenSize(newScreenSize);

      if (newScreenSize < 1280) {
        document.body.classList.add("small");
      } else {
        document.body.classList.remove("small");
      }
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll); // Attach the listener

    // Clean up the listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scrollY);

  return (
    <>
      {loading ? (
        <Loader />
      ) : isModalOpen ? (
        <Modal closeModal={closeModal} isAnimating={isAnimating} />
      ) : (
        <>
          <Header setFilter={setFilter} scrollY={scrollY} fadeIn={fadeIn} />
          <div
            className={`container mx-auto grid ${
              layout.grid
            } h-full w-80 md:w-full font-poppins transition-opacity duration-1000 ${
              fadeIn ? "opacity-100" : "opacity-0"
            }`}
          >
            <motion.div layout className={`${layout.aboutme}`}>
              <Aboutme
                className=""
                openModal={openModal}
                screenSize={screenSize}
              />
            </motion.div>
            <motion.div layout className={`${layout.darkmode}`}>
              <DarkMode />
            </motion.div>
            <motion.div layout className={`${layout.links}`}>
              <Links />
            </motion.div>
            <motion.div className={`${layout.spotify}`}>
              <Spotify />
            </motion.div>
            <motion.div className={`${layout.palette}`}>
              <Palette />
            </motion.div>
            <motion.div className={`${layout.description} grid grid-cols-5`}>
              <Description screenSize={screenSize} />
            </motion.div>
            <motion.div className={`${layout.designershangout}`}>
              <DesignersHangout />
            </motion.div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
