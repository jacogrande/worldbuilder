import { PerlinNoise } from "./noise.js";

// function that creates a perlin noise map
// @PARAMS:
// width : a number representing how many tiles wide the map will be
// height : a number representing how many tiles long the map will be
export const createNoiseMap = (width: number, height: number): number[][] => {
  const perlin = new PerlinNoise();
  const noiseMap: number[][] = [];

  for (let y = 0; y < height; y++) {
    let row: number[] = [];
    for (let x = 0; x < width; x++) {
      row.push(perlin.noise(x / 20, y / 20, 0));
    }
    noiseMap.push(row);
  }

  return noiseMap;
};
