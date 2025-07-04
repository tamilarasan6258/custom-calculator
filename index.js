
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

function mod(a,b){
  return a%b;
}
function pow(a,b){
  return a**b;
}


function sqrt(number) {
  if (number < 0) {
    throw new Error("Cannot calculate square root of a negative number.");
  }
  return Math.sqrt(number);
}



module.exports = {
  add,sub,mul,div,mod,pow,sqrt
};