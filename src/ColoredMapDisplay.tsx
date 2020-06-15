import React from "react";
import { mapColors } from "./util/mapColors";

interface IColoredMapDisplay {
  noiseMap: number[][];
  width: number;
  height: number;
}

const ColoredMapDisplay = (props: IColoredMapDisplay) => {
  const scale = 7;
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  const mapDisplayColors = [
    "rgb(221, 219, 216)",
    "rgb(70, 52, 30)",
    "rgb(87, 67, 43)",
    "rgb(103, 143, 77)",
    "rgb(142, 176, 121)",
    "rgb(231, 220, 174)",
    "rgb(64, 163, 172)",
    "rgb(51, 140, 156)",
    "rgb(32, 112, 126)",
    "rgb(36, 99, 135)",
    "rgb(25, 88, 124)",
    "rgb(9, 61, 91)",
    "rgb(6, 44, 66)",
  ];

  React.useEffect(() => {
    if (canvasRef.current) {
      const canvas: HTMLCanvasElement = canvasRef.current;
      const context = canvas.getContext("2d");
      if (context) {
        for (let y = 0; y < props.height; y++) {
          for (let x = 0; x < props.width; x++) {
            context.fillStyle = mapColors(
              props.noiseMap[y][x],
              mapDisplayColors
            );
            context.fillRect(x * scale, y * scale, scale, scale);
          }
        }
      }
    }
  }, [props.width, props.height]);

  return (
    <div className="map">
      <canvas
        ref={canvasRef}
        width={props.width * scale}
        height={props.height * scale}
      ></canvas>
    </div>
  );
};

export default ColoredMapDisplay;
