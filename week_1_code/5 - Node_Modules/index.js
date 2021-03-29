
var rect = require("./rectangle.js")

function solveRect (l,b) {
    console.log(`Solving Rectangle for length l = ${l} and breadth b = ${b}`);
    rect(l,b, (err,rectangle) => {
        if(err){
            console.log("ERROR: ",err.message);
        }

        else {
            console.log(`the area of the rectangle of dimensions l = ${l} and breadth b = ${b} is ${rectangle.area()}`);
            console.log(`the permiter of the rectangle of dimensions l = ${l} and breadth b = ${b} is ${rectangle.permiter()}`)
        }
    })
    console.log("this statment is after the call to rectangle")
}


solveRect(1,4);
solveRect(3,9);
solveRect(0,1);
solveRect(-3,3);