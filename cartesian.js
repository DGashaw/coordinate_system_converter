class Cartesian {
  #xCoordinate;
  #yCoordinate;
  constructor (x, y) {
    if (typeof (x) !== 'number' || typeof (y) !== 'number') {
      throw new Error(`Invalid coordinate value; Type of ${x} and ${y} must have a numerical value`);
    }

    this.#xCoordinate = x;
    this.#yCoordinate = y;
    this[Symbol.toStringTag] = 'Cartesian';
  }

  get xCoordinate () {
    return this.#xCoordinate;
  }

  set xCoordinate (x) {
    if (typeof (x) !== 'number') {
      throw new Error(`Invalid coordinate value; Type of ${x} must have a numerical value`);
    }
    this.#xCoordinate = x;
  }

  get yCoordinate () {
    return this.#yCoordinate;
  }

  set yCoordinate (y) {
    if (typeof (y) !== 'number') {
      throw new Error(`Invalid coordinate value; Type of ${y} must have a numerical value`);
    }
    this.#yCoordinate = y;
  }

  toString () {
    return (`Cartesian(${this.#xCoordinate},${this.#yCoordinate})`);
  }
}

export default Cartesian;
