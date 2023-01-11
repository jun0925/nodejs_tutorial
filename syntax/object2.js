var f = function () {
    console.log(1+1);
    console.log(1+2);
}

// console.log(f); // [Function: f] 

//  배열에 안에 함수 넣기
var a = [f];
a[0]();

var o = {
    func: f
}
o.func();