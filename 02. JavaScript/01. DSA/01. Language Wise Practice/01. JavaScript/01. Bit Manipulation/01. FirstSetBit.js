const getFirstSetBit = (n) => {
  if(n === 0){
    return 0;
  }
  let position = 1;
  while(n>0){
    if((n&1) === 1){
      return position;
    }
    n = n >> 1;
    position++;
  }
};

const inputs = [18, 20, 3365, 15, 0];

inputs.forEach((num) => {
  console.log(`First set bit of ${num} is at position: ${getFirstSetBit(num)}`)
})