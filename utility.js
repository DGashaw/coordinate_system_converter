function round (value, prescion) {
  const factor = Math.pow(10, prescion);
  return Math.round((value * factor) / factor);
}

function radianToDegree (radianValue) {
  return (radianValue * 180) / Math.PI;
}
function degreeToRadian (degreeValue) {
  return (Math.PI * degreeValue) / 180;
}

export default round;
export { radianToDegree, degreeToRadian };
