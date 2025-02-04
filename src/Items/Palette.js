import { useState } from "react";
import { FaDownload } from "react-icons/fa"; // Importing FontAwesome download icon
import useEyeDropper from "use-eye-dropper";
import ColorPalette from "./PaletteMaster/ColorPalette";
import { colorSchemes } from "./PaletteMaster/PaletteMaster";
import "./Palette.css";

const Palette = () => {
  const { open, close, isSupported } = useEyeDropper();
  const [currentText, setCurrentText] = useState("Try it out");
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [colors, setColors] = useState(null);

  const isDesktopDevice = () => {
    return !/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  };

  const openPicker = async () => {
    if (!isDesktopDevice()) {
      alert(
        "Chrome Extensions are only available on desktop devices. Try it out on your desktop!"
      );
      return;
    }
    try {
      const result = await open();
      const color = result.sRGBHex;
      const colorschemes = colorSchemes(color, 5);
      setColors(colorschemes);
      console.log(colorschemes);
      setIsPaletteOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRedirect = () => {
    window.open(
      "https://chromewebstore.google.com/detail/palette-master/mfaifldkpmbopicpiojeogdljmonpimo?authuser=0&hl=en",
      "_blank"
    ); // Replace with actual Chrome Web Store link
  };

  const handleEnter = () => {
    setTimeout(() => setCurrentText("Download Extension"), 100);
  };

  const handleLeave = () => {
    setTimeout(() => setCurrentText("Try it now"), 100);
  };

  return (
    <div className="special-border eyedropper overflow-hidden relative flex flex-col gap-5 md:gap-10 p-5 py-7 justify-center items-center w-full h-full">
      <h1 className="text-2xl text-center md:text-3xl font-bold z-10">
        Palette Master
      </h1>
      <p className="text-center text-sm md:text-base z-10">
        Discover beautiful color inspiration on any webpage. With Palette
        Master, pick any color and instantly generate a variety of stunning
        color schemes, ready to use in your designs.
      </p>
      {isDesktopDevice() ? (
        <button
          className={`cursor-pointer tool-button border-2 rounded-full p-3 text-xs md:text-base w-25 md:w-30 z-10 
         hover:bg-gray-800 dark:hover:border-gray-200 dark:hover:bg-gray-200 hover:border-gray-800 hover:text-white
          dark:hover:text-black transition-colors duration-500 ${
            currentText === "Download Extension" ? "md:w-50" : ""
          }`}
          onClick={openPicker}
        >
          <span className="tool-button-text">{currentText}</span>
          <div
            className="bookmark"
            onClick={handleRedirect}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <FaDownload /> {/* Download Icon */}
          </div>
        </button>
      ) : (
        <button
          className={`cursor-pointer border-2 rounded-full p-3 text-xs md:text-base w-35 z-10 transition-colors duration-500 `}
          onClick={handleRedirect}
        >
          Download Extension
        </button>
      )}
      <ColorPalette
        isPaletteOpen={isPaletteOpen}
        setIsPaletteOpen={setIsPaletteOpen}
        colors={colors}
      />
    </div>
  );
};

export default Palette;
