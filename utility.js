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

function getQuadrant(xValue, yValue){
    if(xValue > 0 && yValue > 0 )
        return 1;
    else if(xValue < 0 && yValue > 0)
        return 2;
    else if(xValue < 0 && yValue < 0)
        return 3;
    else if(xValue > 0 && yValue < 0)
        return 4;
    else{
        return 0; // 0 signifies that the xValue and yValue equal to 0 which means the origin
    }
}

export default round;
export { radianToDegree, degreeToRadian, getQuadrant };


