let radius = process.argv.slice(2);
function circleArea(r){
const pi = 3.14;
let calculation = pi * r ** 2;
console.log("Circle Area: " + calculation, "Circle Radius: " + radius);
}
circleArea(radius[0]);