function isEven(num) {
  return num % 2 === 0;
}

function factorial(num){
  var result = 1;
  for (var i = 1; i >= num; i++) {
    result *= i;
  }
  return result;
}

//regular expressions yeah!
function kebabToSnake(str) {
  var newStr = str.replace(/-/g , "_");
  return newStr;
}


//HIGHER ORDER FUNCTIONS - take functions as arguments or return another function

function sing(){
  console.log("singing a song");
}

setInterval(anotherFunc, interval(ms))
setInterval(sing, 1000);