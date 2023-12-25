let a  = "devang"
let b = "dev"
let c = "dvg"


function checkSubString(str1,str2){
  if(str1.indexOf(str2) >= 0){
    return true;
  }
  return false;
}

console.log(checkSubString(a,b));
console.log(checkSubString(a,c));