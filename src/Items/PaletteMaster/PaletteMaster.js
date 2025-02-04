// eyedropper  tool is imorted from the EyeDropper() class
//on button click use the .open() method on eyedropper and .then() ti assign the result
//create a function which will take color and numOfColors as argument and generate colorSchemes for the same
// then a function which will create HTML for the colorSchemes passed to it

export function colorSchemes(hex, numColors) {
  if (numColors < 2 || numColors > 6) {
    throw new Error("Number of colors should be between 2 and 5.");
  }

  const parseHex = (hex) => {
    const match = hex.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
    return match
      ? [parseInt(match[1], 16), parseInt(match[2], 16), parseInt(match[3], 16)]
      : null;
  };

  const rgbToHex = (r, g, b) => {
    const toHex = (v) => v.toString(16).padStart(2, "0");
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  const rgbToHsl = (r, g, b) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h,
      s,
      l = (max + min) / 2;

    if (max === min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
    return [h * 360, s, l];
  };

  const hslToRgb = (h, s, l) => {
    let r, g, b;
    h /= 360;
    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  };

  const rotateHue = (h, degree) => (h + degree + 360) % 360;

  const generateColors = (baseHsl, scheme) => {
    const [h, s, l] = baseHsl;
    const colors = [];

    if (scheme === "analogous") {
      const offset = 30;
      for (let i = 0; i < numColors; i++) {
        colors.push([
          rotateHue(h, (i - Math.floor(numColors / 2)) * offset),
          s,
          l,
        ]);
      }
    } else if (scheme === "monochromatic") {
      const step = 1 / numColors;
      for (let i = 0; i < numColors; i++) {
        let newL = l - (step * i) /* prettier-ignore */
        let newS = s - (step * i) /* prettier-ignore */
        if (newL < 0.1) {
          let diff = 0.1 - (newL) /* prettier-ignore */
          newL = 0.1 + diff;
        }
        if (newS < 0.1) {
          let diff = 0.1 - (newS) /* prettier-ignore */
          newS = 0.1 + diff;
        }
        colors.push([h, newS, newL]);
      }
    } else if (scheme === "triad") {
      if (numColors == 3) {
        const offset = 120;
        for (let i = 0; i < 3; i++) {
          colors.push([rotateHue(h, i * offset), s, l]);
        }
      } else if (numColors == 4) {
        const offset = 120;
        for (let i = 0; i < 3; i++) {
          colors.push([rotateHue(h, i * offset), s, l]);
        }
        const step3 = 0.33;
        let newL3 = l - (step3) /* prettier-ignore */
        let newS3 = s - (step3) /* prettier-ignore */

        if (newL3 < 0.1) {
          let diff = 0.1 - (newL3) /* prettier-ignore */
          newL3 = 0.1 + diff;
        }
        if (newS3 < 0.1) {
          let diff = 0.1 - (newS3) /* prettier-ignore */
          newS3 = 0.1 + diff;
        }
        colors.push([h, newS3, newL3]);
      } else if (numColors == 5) {
        const offset = 120;
        for (let i = 0; i < 3; i++) {
          colors.push([rotateHue(h, i * offset), s, l]);
        }
        const step3 = 0.33;
        let newL3 = l - (step3) /* prettier-ignore */
        let newS3 = s - (step3) /* prettier-ignore */

        if (newL3 < 0.1) {
          let diff = 0.1 - (newL3) /* prettier-ignore */
          newL3 = 0.1 + diff;
        }
        if (newS3 < 0.1) {
          let diff = 0.1 - (newS3) /* prettier-ignore */
          newS3 = 0.1 + diff;
        }
        colors.push([h, newS3, newL3]);
        colors.push([rotateHue(h, 120), newS3, newL3]);
      }
    } else if (scheme === "complementary") {
      // if (numColors === 2) {
      colors.push([h, s, l]);
      colors.push([rotateHue(h, 180), s, l]);

      if (numColors == 3) {
        const step3 = 0.33;
        let newL3 = l - (step3) /* prettier-ignore */
        let newS3 = s - (step3) /* prettier-ignore */

        if (newL3 < 0.1) {
          let diff = 0.1 - (newL3) /* prettier-ignore */
          newL3 = 0.1 + diff;
        }
        if (newS3 < 0.1) {
          let diff = 0.1 - (newS3) /* prettier-ignore */
          newS3 = 0.1 + diff;
        }
        colors.push([h, newS3, newL3]);
      } else if (numColors == 4) {
        const step3 = 0.33;
        let newL3 = l - (step3) /* prettier-ignore */
        let newS3 = s - (step3) /* prettier-ignore */

        if (newL3 < 0.1) {
          let diff = 0.1 - (newL3) /* prettier-ignore */
          newL3 = 0.1 + diff;
        }
        if (newS3 < 0.1) {
          let diff = 0.1 - (newS3) /* prettier-ignore */
          newS3 = 0.1 + diff;
        }
        colors.push([h, newS3, newL3]);

        const step4 = 0.5;
        let newL4 = l - (step4) /* prettier-ignore */
        let newS4 = s - (step4) /* prettier-ignore */

        if (newL4 < 0.1) {
          let diff = 0.1 - (newL4) /* prettier-ignore */
          newL4 = 0.1 + diff;
        }
        if (newS4 < 0.1) {
          let diff = 0.1 - (newS4) /* prettier-ignore */
          newS4 = 0.1 + diff;
        }
        colors.push([rotateHue(h, 180), newS4, newL4]);
      } else if (numColors == 5) {
        const step3 = 0.25;
        let newL3 = l - (step3) /* prettier-ignore */
        let newS3 = s - (step3) /* prettier-ignore */

        if (newL3 < 0.1) {
          let diff = 0.1 - (newL3) /* prettier-ignore */
          newL3 = 0.1 + diff;
        }
        if (newS3 < 0.1) {
          let diff = 0.1 - (newS3) /* prettier-ignore */
          newS3 = 0.1 + diff;
        }
        colors.push([h, newS3, newL3]);

        const step4 = 0.33;
        let newL4 = l - (step4) /* prettier-ignore */
        let newS4 = s - (step4) /* prettier-ignore */

        if (newL4 < 0.1) {
          let diff = 0.1 - (newL4) /* prettier-ignore */
          newL4 = 0.1 + diff;
        }
        if (newS4 < 0.1) {
          let diff = 0.1 - (newS4) /* prettier-ignore */
          newS4 = 0.1 + diff;
        }
        colors.push([rotateHue(h, 180), newS4, newL4]);

        const step5 = 0.5;
        let newL5 = l - (step5) /* prettier-ignore */
        let newS5 = s - (step5) /* prettier-ignore */

        if (newL5 < 0.1) {
          let diff = 0.1 - (newL5) /* prettier-ignore */
          newL5 = 0.1 + diff;
        }
        if (newS5 < 0.1) {
          let diff = 0.1 - (newS5) /* prettier-ignore */
          newS5 = 0.1 + diff;
        }
        colors.push([h, newS5, newL5]);
      }
    } else if (scheme === "splitComplementary") {
      if (numColors == 3) {
        const offset = 150;
        colors.push([h, s, l]);
        colors.push([rotateHue(h, offset), s, l]);
        colors.push([rotateHue(h, -offset), s, l]);
      } else if (numColors == 4) {
        const offset = 150;
        colors.push([h, s, l]);
        colors.push([rotateHue(h, offset), s, l]);
        colors.push([rotateHue(h, -offset), s, l]);
        const step5 = 0.5;
        let newL5 = l - (step5) /* prettier-ignore */
        let newS5 = s - (step5) /* prettier-ignore */

        if (newL5 < 0.1) {
          let diff = 0.1 - (newL5) /* prettier-ignore */
          newL5 = 0.1 + diff;
        }
        if (newS5 < 0.1) {
          let diff = 0.1 - (newS5) /* prettier-ignore */
          newS5 = 0.1 + diff;
        }
        colors.push([h, newS5, newL5]);
      } else if (numColors == 5) {
        const offset = 150;
        colors.push([h, s, l]);
        colors.push([rotateHue(h, offset), s, l]);
        colors.push([rotateHue(h, -offset), s, l]);
        const step5 = 0.5;
        let newL5 = l - (step5) /* prettier-ignore */
        let newS5 = s - (step5) /* prettier-ignore */

        if (newL5 < 0.1) {
          let diff = 0.1 - (newL5) /* prettier-ignore */
          newL5 = 0.1 + diff;
        }
        if (newS5 < 0.1) {
          let diff = 0.1 - (newS5) /* prettier-ignore */
          newS5 = 0.1 + diff;
        }
        colors.push([h, newS5, newL5]);
        colors.push([rotateHue(h, offset), newS5, newL5]);
      }
    } else if (scheme === "square") {
      if (numColors == 4) {
        const offset = 90;
        for (let i = 0; i < numColors; i++) {
          colors.push([rotateHue(h, i * offset), s, l]);
        }
      } else if (numColors == 5) {
        const offset = 90;
        for (let i = 0; i < 4; i++) {
          colors.push([rotateHue(h, i * offset), s, l]);
        }
        let step = 0.33;
        let newS = s - (step) /*prettier-ignore*/
        let newL = l - (step) /*prettier-ignore*/
        if (newS < 0.1) {
          let diff = 0.1 - (newS); /*prettier-ignore*/
          newS = 0.1 + diff;
        }
        if (newL < 0.1) {
          let diff = 0.1 - (newL); /*prettier-ignore*/
          newL = 0.1 + diff;
        }
        colors.push([h, newS, newL]);
      }
    } else if (scheme === "compound") {
      if (numColors == 4) {
        colors.push([h, s, l]);
        colors.push([rotateHue(h, 180), s, l]);
        colors.push([rotateHue(h, 30), s, l]);
        colors.push([rotateHue(h, 150), s, l]);
      }
      if (numColors == 5) {
        colors.push([h, s, l]);
        colors.push([rotateHue(h, 180), s, l]);
        colors.push([rotateHue(h, 30), s, l]);
        colors.push([rotateHue(h, 150), s, l]);
        let step = 0.33;
        let newS = s - (step) /*prettier-ignore*/
        let newL = l - (step) /*prettier-ignore*/
        if (newS < 0.1) {
          let diff = 0.1 - (newS); /*prettier-ignore*/
          newS = 0.1 + diff;
        }
        if (newL < 0.1) {
          let diff = 0.1 - (newL); /*prettier-ignore*/
          newL = 0.1 + diff;
        }
        colors.push([h, newS, newL]);
      }
    } else if (scheme === "shades") {
      let step = 0.3;
      if (numColors == 2) {
        step = 0.3;
      } else if (numColors == 3) {
        step = 0.25;
      } else if (numColors == 4) {
        step = 0.1;
      } else if (numColors == 5) {
        step = 0.15;
      }
      for (let i = 0; i < numColors; i++) {
        let newL = l - (step * i) /*prettier-ignore*/
        if (newL < 0.1) {
          let diff = 0.1 - (newL) /*prettier-ignore*/
          newL = 0.1 + diff;
        }
        colors.push([h, s, newL]);
      }
    }

    return colors.map((c) => rgbToHex(...hslToRgb(...c)));
  };

  try {
    const baseRgb = parseHex(hex);
    if (!baseRgb) {
      throw new Error("Invalid hex color");
    }
    const baseHsl = rgbToHsl(...baseRgb);
    console.log("base hsl is: ", baseHsl);
    return {
      analogous: generateColors(baseHsl, "analogous"),
      monochromatic: generateColors(baseHsl, "monochromatic"),
      triad: generateColors(baseHsl, "triad"),
      complementary: generateColors(baseHsl, "complementary"),
      splitComplementary: generateColors(baseHsl, "splitComplementary"),
      square: generateColors(baseHsl, "square"),
      compound: generateColors(baseHsl, "compound"),
      shades: generateColors(baseHsl, "shades"),
    };
  } catch (error) {
    console.log(error);
  }
}
