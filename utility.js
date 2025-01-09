import Cartesian from './cartesian.js';
import Polar from './polar.js';

function radianToDegree (radianValue) {
  return (radianValue * 180) / Math.PI;
}
function degreeToRadian (degreeValue) {
  return (Math.PI * degreeValue) / 180;
}

function getQuadrant (coordinateObject) {
  if (coordinateObject instanceof Cartesian) {
    const xValue = coordinateObject.xCoordinate;
    const yValue = coordinateObject.yCoordinate;

    if (xValue > 0 && yValue > 0) { return 1; } else if (xValue < 0 && yValue > 0) { return 2; } else if (xValue < 0 && yValue < 0) { return 3; } else if (xValue > 0 && yValue < 0) { return 4; } else {
      return 0; // 0 signifies that the xValue and yValue equal to 0 which means the origin
    }
  } else if (coordinateObject instanceof Polar) {
    const angle = coordinateObject.angle;
    if (angle >= 0 && angle <= 90) { return 1; } else if (angle > 90 && angle <= 180) { return 2; } else if (angle > 180 && angle <= 270) { return 3; } else if (angle > 270 && angle <= 360) { return 4; } else {
      throw new Error(`Inavlid angle value for the Polar coordinate object; ${angle} value must be between 0 and 360`);
    }
  } else {
    throw new Error('Invalid object. The coordinateObject passed as a parameter must be an instance of the Polar or Cartesian class');
  }
}

export default getQuadrant;
export { radianToDegree, degreeToRadian };
