import React from "react";
import { createNoiseMap } from "./util/noiseMap";
import { Point3d } from "./util/Geometry";

const ProjectedMap = () => {
  const height = 5;
  const width = 5;
  const scale = 5;
  const depth = 5;

  const vertices: {x: number, y:number}[][] = [];
  for (let z = 0; z < depth; z++){
    let row = [];
    for(let x = 0; x < width; x++){
      row.push(Point3d(x, 1, z+0.1).project(10));
    }
    vertices.push(row);
  }

  console.log(vertices);

  const noiseMap = createNoiseMap(width, height);

  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  React.useEffect(() => {
    if (canvasRef.current) {
      const canvas: HTMLCanvasElement = canvasRef.current;
      const context = canvas.getContext("2d");
      if(context){
        context.fillStyle = "#000";
        for(let z = 0; z < depth; z++){
          for(let x = 0; x < width; x++){
            console.log(vertices[z][x].x, vertices[z][x].y);
            context.fillRect(vertices[z][x].x, vertices[z][x].y, 100, 100);
          }
        }
      }
    }
  }, [width, height]);

  return (
    <div className="projectedMapWrapper">
      <canvas ref={canvasRef} width={width} height={height}></canvas>
    </div>
  );
};

export default ProjectedMap;
