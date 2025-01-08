class Polar {
  #angle;
  #resultant;
  constructor (resultantValue, angleValue) {
    if (typeof (angleValue) !== 'number' || typeof (resultantValue) !== 'number') {
      throw new Error('Invalid polar coordinate value', `Type of ${angleValue} and ${resultantValue} must have a numerical value`);
    }

    if (angleValue > 360 && angleValue < -360) {
      throw new Error('Invalid angle value', `${angleValue} must have a value between, -360 <= angle <= 360 `);
    }
    this.#angle = angleValue;
    this.#resultant = resultantValue;
    this[Symbol.toStringTag] = 'Polar';
  }

  get angle () {
    return this.#angle;
  }

  set angle (angleValue) {
    if (typeof (angleValue) !== 'number') {
      throw new Error('Invalid polar coordinate value', `Type of ${angleValue} must have a numerical value`);
    }
    if (angleValue > 360 && angleValue < -360) {
      throw new Error('Invalid angle value', `${angleValue} must have a value between, -360 <= angle <= 360 `);
    }
    this.#angle = angleValue;
  }

  get resultant () {
    return this.#resultant;
  }

  set resultant (resultantValue) {
    if (typeof (resultantValue) !== 'number') {
      throw new Error('Invalid polar coordinate value', `Type of ${resultantValue} must have a numerical value`);
    }
    this.#resultant = resultantValue;
  }

  toString () {
    return (`(${this.#resultant},${this.#angle})`);
  }
}

export default Polar;
