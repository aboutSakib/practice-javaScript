//a ||b

//and operator
//true and true=true
//true and false=false
//false and true=false
//false and false =false

//a||b
//true or true =true
//true or false =true
//false or true =true
//false or false=false

var a = 20;
var b = 30;
var c = 60;
var d = 8;

if ((a > b) & (c > d)) {
  console.log("a is getter than b and c is getter than d");
} else {
  console.log("at list one condition is false");
}

var a = 50;
var b = 60;
var c = 80;
var d = 20;

if ((a > b) || (c > d)) {
  console.log("a is getter than b or c is getter than d");
} else {
  console.log("at list one condition is false");
}
