import React from "react";
import { createNoiseMap } from "./util/noiseMap";
import { mapColors } from "./util/mapColors";
import ColoredMapDisplay from "./ColoredMapDisplay";

const NoiseMapDisplay = () => {
  const [width, setWidth] = React.useState<number>(75);
  const [height, setHeight] = React.useState<number>(75);
  const scale = 2;

  const noiseMapColors = [
    "rgb(255, 255, 255)",
    "rgb(209, 209, 209)",
    "rgb(173, 173, 173)",
    "rgb(134, 134, 134)",
    "rgb(110, 109, 109)",
    "rgb(83, 83, 83)",
    "rgb(61, 61, 61)",
    "rgb(46, 46, 46)",
    "rgb(27, 27, 27)",
  ];

  const noiseMap = createNoiseMap(width, height);

  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    if (canvasRef.current) {
      const canvas: HTMLCanvasElement = canvasRef.current;
      const context = canvas.getContext("2d");
      if (context) {
        for (let y = 0; y < height; y++) {
          for (let x = 0; x < width; x++) {
            context.fillStyle = mapColors(noiseMap[y][x], noiseMapColors);
            context.fillRect(x * scale, y * scale, scale, scale);
          }
        }
      }
    }
  }, [width, height]);

  const handleWidthChange = (event: any): void => {
    setWidth(event.target.value);
  };
  const handleHeightChange = (event: any): void => {
    setHeight(event.target.value);
  };

  const handleClick = (event: any): void => {
    // arbitrarily refresh the map
    setWidth(width + 1);
    setWidth(width - 1);
  };

  return (
    <div className="noiseMap">
      <canvas
        ref={canvasRef}
        width={width * scale}
        height={height * scale}
      ></canvas>
      <br />
      Width:
      <input
        value={width}
        onChange={handleWidthChange}
        type="range"
        name="width"
        min="0"
        max="200"
      />
      <br />
      Height:
      <input
        value={height}
        onChange={handleHeightChange}
        type="range"
        name="height"
        min="0"
        max="200"
      />
      <br />
      <button onClick={handleClick}>Generate Map</button>
      <br />
      <br />
      <ColoredMapDisplay noiseMap={noiseMap} width={width} height={height} />
    </div>
  );
};

export default NoiseMapDisplay;
