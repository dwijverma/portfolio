import React, { use, useState, useEffect } from "react";
import "./ColorPalette.css";
import { IoMdClose } from "react-icons/io";

const ColorPalette = ({ isPaletteOpen, setIsPaletteOpen, colors }) => {
  const [numberOfColors, setNumberOfColors] = useState(2);
  const [selectedScheme, setSelectedScheme] = useState("complementary");
  const handleChange = (e) => {
    setSelectedScheme(e.target.value);
  };

  const renderColorBoxes = (colorArr) => {
    return colorArr.map((c) => (
      <div
        className="color-box"
        style={{
          backgroundColor: c,
        }}
      >
        {c}
      </div>
    ));
  };

  function copyColors(colorArr) {
    const colorCodes = colorArr.join(", ");
    navigator.clipboard
      .writeText(colorCodes)
      .then(() => {
        alert("Color codes copied to clipboard: " + colorCodes);
      })
      .catch((err) => {
        console.error("Failed to copy colors: ", err);
      });
  }

  useEffect(() => {
    if (
      (numberOfColors < 3 && selectedScheme === "splitComplementary") ||
      (numberOfColors < 3 && selectedScheme === "analogous") ||
      (numberOfColors < 3 && selectedScheme === "triad")
    ) {
      setSelectedScheme("complementary");
    }

    if (
      (numberOfColors < 4 && selectedScheme === "square") ||
      (numberOfColors < 4 && selectedScheme === "compound")
    ) {
      setSelectedScheme("complementary");
    }
  }, [numberOfColors, selectedScheme]);

  return (
    <div className={`color-palette ${isPaletteOpen ? "active" : ""}`}>
      <button
        className="close-btn"
        onClick={() => {
          setIsPaletteOpen(false);
        }}
      >
        <IoMdClose />
      </button>

      <div className="controls">
        <label htmlFor="no-of-colors">Colors:</label>
        <div className="sub-controls">
          <input
            type="number"
            id="no-of-colors"
            min="2"
            max="5"
            value={numberOfColors}
            onChange={(e) => setNumberOfColors(e.target.value)}
          />
          <select
            className="select-scheme"
            value={selectedScheme}
            onChange={handleChange}
          >
            <option value="complementary">Complementary</option>
            <option value="monochromatic">Monochromatic</option>
            <option value="shades">Shades</option>
            <option
              value="splitComplementary"
              disabled={numberOfColors >= 3 ? false : true}
            >
              Split-Complementary
            </option>
            <option
              value="analogous"
              disabled={numberOfColors >= 3 ? false : true}
            >
              Analogous
            </option>
            <option value="triad" disabled={numberOfColors >= 3 ? false : true}>
              Triad
            </option>
            <option
              value="square"
              disabled={numberOfColors >= 4 ? false : true}
            >
              Square
            </option>
            <option
              value="compound"
              disabled={numberOfColors >= 4 ? false : true}
            >
              Compound
            </option>
          </select>
        </div>
      </div>

      <div className="color-boxes">
        {colors &&
          renderColorBoxes(colors[selectedScheme].slice(0, numberOfColors))}
      </div>
      <button
        className="copy-colors"
        onClick={() => {
          copyColors(colors[selectedScheme].slice(0, numberOfColors));
        }}
      >
        Copy Colors
      </button>
    </div>
  );
};

export default ColorPalette;
