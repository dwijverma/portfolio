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
  // layout can be "about", "projects", or "all"
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [layout, setLayout] = useState("all");
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      // Initially we set the layout to "all"
      setLayout("all");
      setTimeout(() => setFadeIn(true), 100);
    }, 2000);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => setIsAnimating(true), 0);
  };

  const closeModal = () => {
    setIsAnimating(false);
    setTimeout(() => setIsModalOpen(false), 300);
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
    window.addEventListener("resize", handleResize);
    // Initial check
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : isModalOpen ? (
        <Modal closeModal={closeModal} isAnimating={isAnimating} />
      ) : (
        <>
          {/* Pass setLayout (or setFilter) to Header so it can change the layout */}
          <Header setLayout={setLayout} scrollY={scrollY} fadeIn={fadeIn} />
          <div
            className={`container mx-auto h-full w-80 md:w-full font-poppins transition-opacity duration-1000 ${
              fadeIn ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Aboutme */}
            <motion.div
              layout
              className={
                layout === "projects"
                  ? "col-start-1 col-end-5 row-start-5 row-end-6 blur-xs md:col-start-1 md:col-end-4 md:row-start-3 md:row-end-5"
                  : /* For both "about" and "all" layouts */
                    "col-start-1 col-end-5 row-start-1 row-end-3 md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-3"
              }
            >
              <Aboutme openModal={openModal} screenSize={screenSize} />
            </motion.div>

            {/* DarkMode */}
            <motion.div
              layout
              className={
                layout === "projects"
                  ? "col-start-1 col-end-3 row-start-4 row-end-5 md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-3"
                  : "col-start-1 col-end-3 row-start-3 row-end-4 md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-2"
              }
            >
              <DarkMode />
            </motion.div>

            {/* Links */}
            <motion.div
              layout
              className={
                layout === "projects"
                  ? "col-start-3 col-end-5 row-start-4 row-end-5 blur-xs md:col-start-4 md:col-end-5 md:row-start-3 md:row-end-4"
                  : "col-start-3 col-end-5 row-start-3 row-end-4 md:col-start-3 md:col-end-4 md:row-start-3 md:row-end-4"
              }
            >
              <Links />
            </motion.div>

            {/* Spotify */}
            <motion.div
              layout
              className={
                layout === "projects"
                  ? "col-start-1 col-end-5 row-start-3 row-end-4 md:col-start-1 md:col-end-3 md:row-start-2 md:row-end-3"
                  : layout === "about"
                  ? "col-start-1 col-end-5 row-start-3 row-end-4 md:col-start-1 md:col-end-3 md:row-start-3 md:row-end-4 blur-xs"
                  : /* "all" layout */
                    "col-start-1 col-end-5 row-start-4 row-end-5 md:col-start-1 md:col-end-3 md:row-start-3 md:row-end-4"
              }
            >
              <Spotify />
            </motion.div>

            {/* Palette */}
            <motion.div
              layout
              className={
                layout === "projects"
                  ? "col-start-1 col-end-5 row-start-1 row-end-2 md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-3"
                  : layout === "about"
                  ? "col-start-1 col-end-5 row-start-4 row-end-5 md:col-start-4 md:col-end-5 md:row-start-2 md:row-end-4 blur-xs"
                  : "col-start-1 col-end-5 row-start-5 row-end-6 md:col-start-4 md:col-end-5 md:row-start-2 md:row-end-4"
              }
            >
              <Palette />
            </motion.div>

            {/* Description */}
            <motion.div
              layout
              className={
                layout === "projects"
                  ? "col-start-1 col-end-5 row-start-6 row-end-7 blur-xs md:col-start-4 md:col-end-5 md:row-start-4 md:row-end-5"
                  : layout === "about"
                  ? "col-start-1 col-end-5 row-start-5 row-end-6 md:col-start-1 md:col-end-2 md:row-start-4 md:row-end-5 blur-xs"
                  : "col-start-1 col-end-5 row-start-6 row-end-7 md:col-start-1 md:col-end-2 md:row-start-4 md:row-end-5"
              }
            >
              <Description screenSize={screenSize} />
            </motion.div>

            {/* DesignersHangout */}
            <motion.div
              layout
              className={
                layout === "projects"
                  ? "col-start-1 col-end-5 row-start-2 row-end-3 md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-2"
                  : layout === "about"
                  ? "col-start-1 col-end-5 row-start-6 row-end-7 md:col-start-2 md:col-end-5 md:row-start-4 md:row-end-5 blur-xs"
                  : "col-start-1 col-end-5 row-start-6 row-end-7 md:col-start-2 md:col-end-5 md:row-start-4 md:row-end-5"
              }
            >
              <DesignersHangout />
            </motion.div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
