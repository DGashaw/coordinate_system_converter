import Cartesian from './cartesian.js';
import Polar from './polar.js';
import { radianToDegree, degreeToRadian } from './utility.js';

class CoordinateSystemConverter {
  static cartesianToPolar (cartesianObject) {
    if (!(cartesianObject instanceof Cartesian)) {
      throw new Error(`Error: ${cartesianObject} must be an object of Cartesian class`);
    }
    const resultant = Math.sqrt(Math.pow(cartesianObject.xCoordinate, 2) + Math.pow(cartesianObject.yCoordinate, 2));
    const radianAngle = Math.atan(cartesianObject.yCoordinate / cartesianObject.xCoordinate);
    const angle = radianToDegree(radianAngle);

    return new Polar(resultant, angle);
  }

  static polarToCartesian (polarObject) {
    if (!(polarObject instanceof Polar)) {
      throw new Error(`Error: ${polarObject} must be an object of Polar class`);
    }
    const radianAngle = degreeToRadian(polarObject.angle);
    const xCoordinate = Math.cos(radianAngle) * polarObject.resultant;
    const yCoordinate = Math.sin(radianAngle) * polarObject.resultant;

    return new Cartesian(xCoordinate, yCoordinate);
  }
}

export default CoordinateSystemConverter;
