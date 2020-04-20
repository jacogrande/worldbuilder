export const mapColors = (noiseValue: number, colors: string[]): string => {
  // add a small number so that the max value isn't out of the array bounds
  const period: number = 2 / colors.length + 0.000001;
  const colorIndex = Math.floor(noiseValue / period);

  return colors[colorIndex];
};
