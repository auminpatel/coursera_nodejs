var rect = require("./rectangle.js")

function solveRect (l,b) {
    console.log(`Solving Rectangle for length l = ${l} and breadth b = ${b}`);
    if (l<=0  || b<=0) {
    console.log(`Values should be greater than 0`);
    }
    else {
        console.log(`The area for l = ${l} and b=${b} id ${rect.area(l,b)}`),
        console.log(`The permiter for l = ${l} and b=${b} id ${rect.permiter(l,b)}`)
    }
}


solveRect(1,4);
solveRect(3,9);
solveRect(0,1);
solveRect(-3,3);