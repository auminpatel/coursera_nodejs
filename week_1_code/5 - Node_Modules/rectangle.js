module.exports = (x,y,callback) => {
    if (x<=0  || y<=0) {
        setTimeout(()=> callback(new Error("Rectangle dimesnions must be greater then zero l = " + x + ", b = " + y), null), 2000)
    }
    else {
        setTimeout(()=> 
            callback(null, 
            {
                permiter :()  => (2*(x+y)),
                area : () => (x*y)
            }),
            2000)
    }
}





permiter = (x,y) => 2*(x+y);
area = (x,y) => x*y;

