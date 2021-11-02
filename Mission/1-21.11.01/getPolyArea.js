const getArea = (shape, ...size) => {};

const circleArea = (size) => {
  return pi * size * size;
};

const rectArea = (height, width) => {
  return height * width;
};

const trapezArea = (top, bottom, height) => {
  return ((top + bottom) * height) / 2;
};

const circleAreaSum = (start, end) => {
  for (var i = start; i < end; i++) {
    AreaSum += pi * i * i;
  }
  return AreaSum;
};
