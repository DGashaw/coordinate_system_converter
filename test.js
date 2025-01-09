import assert from 'assert';
import Cartesian from './cartesian.js';
import Polar from './polar.js';
import CoordinateSystemConverter from './index.js';
import round from './utility.js';

// The first argument of the Cartesian object is the x-coordinate value and the second argument is the y-coordinate value
const cartCoordinate = new Cartesian(3, 4);

// The first argument of the Polar object is the resultant vector value and the second value is the angle between the resultant vector and
// the positive x-axis measured in anti-clockwise direction. It's value falls between 0 >= angle <= 360
const polarCoordinate = new Polar(5, 53);

assert.strictEqual(cartCoordinate.xCoordinate, 3, 'The x-coordinate value of the cartesian object is equal to 3');
assert.strictEqual(cartCoordinate.yCoordinate, 4, 'The y-coordinate value of the cartesian object is equal to 4');
assert.strictEqual(cartCoordinate.toString(), 'Cartesian(3,4)', 'The string representation of the Cartesian object must be equal to Cartesian(3,4)');

cartCoordinate.xCoordinate = -4;

assert.strictEqual(cartCoordinate.toString(), 'Cartesian(-4,4)', 'The string representation of the Cartesian object must be equal to Cartesian(-4,4) after setting a new x-ccordinate value');

assert.strictEqual(polarCoordinate.resultant, 5, 'The resultant vector of the Polar object must have a value 5');
assert.strictEqual(polarCoordinate.angle, 53, 'The angle between the resultant vector and the positive x-axis have a value of 53');
assert.strictEqual(typeof (polarCoordinate.angle), 'number', 'The type of the angle of the Polar object must have a numeric value');
assert.strictEqual(`${polarCoordinate.toString()}`, 'Polar(5,53)', 'The string representation of polar coordinate object have a value of (5,53)');

cartCoordinate.xCoordinate = 3;

const polarCoordinateTwo = CoordinateSystemConverter.cartesianToPolar(cartCoordinate);
assert.strictEqual(round(polarCoordinateTwo.resultant, 2), 5, 'The resultant vector of the Polar object must have a value of 5');
assert.strictEqual(round(polarCoordinateTwo.angle, 2), 53, 'The angle between the resultant vector and the positive x-axis have a value of 53');

polarCoordinateTwo.resultant = round(polarCoordinateTwo.resultant, 2);
polarCoordinateTwo.angle = round(polarCoordinateTwo.angle, 2);

assert.strictEqual(polarCoordinateTwo.toString(), 'Polar(5,53)', 'The string represenation of the polarCoordinateTwo object is Polar(5,53)');

const cartesianCoordinateTwo = CoordinateSystemConverter.polarToCartesian(polarCoordinate);

assert.strictEqual(round(cartesianCoordinateTwo.xCoordinate, 1), 3, 'The x-coordinate value of the cartesianCoordinateTwo object have a value of 3');
assert.strictEqual(round(cartesianCoordinateTwo.yCoordinate, 1), 4, 'The y-coordinate value of the cartesianCoordinateTwo object have a value of 4');

console.log('All tests are passed');
