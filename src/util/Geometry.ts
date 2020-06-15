const Point2d = (x: number, y: number) => {
  return {
    x,
    y,
  };
};

export const Point3d = function (x: number, y: number, z: number) {
  const point = {
    x,
    y,
    z,
    // projection function
    // @PARAMS
    // focalLength <number> : how far away the camera is
    project: function (focalLength: number) {
      let r = focalLength / this.z;
      return Point2d(r*this.x, r*this.y);
    },
  };
  return point;
};
