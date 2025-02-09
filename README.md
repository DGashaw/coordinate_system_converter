# **Coordinate System Converter**  
An npm package that converts rectangular(cartesian) coordinate system to polar coordinate system and vice versa.  

# **Usage Examples**  
```js
import Cartesian from './cartesian.js';
import Polar from './polar.js';
import CoordinateSystemConverter from './index.js';

try{
    const cartesianObj = new Cartesian(3,4);
    console.log(`x-coordinate: ${cartesianObj.xCoordinate}`); // x-coordinate: 3
    console.log(`y-coordinate: ${cartesianObj.yCoordinate}`); // y: coordinate: 4
    console.log(`cartesianObj: ${cartesianObj.toString()}`); // cartesianObj: Cartesian(3,4);

    const polarObj = CoordinateSystemConverter.cartesianToPolar(cartesianObj);
    console.log(`Resultant vector: ${(polarObj.resultant).toFixed(1)}`) // Resultant vector: 5.0
    console.log(`Polar angle: ${(polarObj.angle).toFixed(2)}`) // Resultant vector: 53.13
    console.log(`polarObj: ${polarObj.toString()}`) // Polar(5,53.13010235415598)

    polarObj.angle = Number.parseFloat((polarObj.angle).toFixed(2));
    console.log(`polarObj: ${polarObj.toString()}`) // Polar(5,53.13)
}
catch(error){
    console.log(`Error: ${error.message}`);
}

try{
    const polarObjTwo = new Polar(2,30); // define a Polar coordinate system with resultant = 2, and the angle = 60(measured in degree)
    const cartesianObjTwo = CoordinateSystemConverter.polarToCartesian(polarObjTwo)

    console.log(`x-coordinate: ${(cartesianObjTwo.xCoordinate).toFixed()}`); // x-coordinate: 2
    console.log(`y-coordinate: ${(cartesianObjTwo.yCoordinate).toFixed()}`); // y-coordinate: 1
    console.log(`cartesianObjTwo: ${cartesianObjTwo.toString()}`) // Cartesian(1.7320508075688774,0.9999999999999999)
    
    cartesianObjTwo.xCoordinate = Math.round(cartesianObjTwo.xCoordinate);
    cartesianObjTwo.yCoordinate = Math.round(cartesianObjTwo.yCoordinate);

    console.log(`cartesianObjTwo: ${cartesianObjTwo.toString()}`) // Cartesian(2,1)
    

}
catch(error){
    console.log(`Error: ${error.message}`);
}

```

# **Running Tests**  
 To run tests and ensure the module is working as expected,
navigate to the module's root directory and execute:
```sh
$ npm run test
```
# **License**  
This project is licensed under the MIT License.

