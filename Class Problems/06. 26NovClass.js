var subarraySum = function(nums, k) {
    let count = 0;
    for(let i = 0; i < nums.length; i++){
    let sum = 0;
    for(let j = i; j < nums.length; j++){
      sum += nums[j];
      if(sum == k){
        count++;
      }
    } 
  }
  return count;
};


console.log(subarraySum([1,2,1,2,4], 3))

function wiggleSort(nums) {
   let flag = true
   for(let i = 0; i < nums.length; i++){
       if(flag){
            if(nums[i] <= nums[i+1]){
              let temp = nums[i];
              nums[i] = nums[i+1];
              nums[i + 1] = temp;
            }
       }
       else {
            if(nums[i] >= nums[i+1]){
              let temp = nums[i];
              nums[i] = nums[i+1];
              nums[i + 1] = temp;
              
            }
        }
     flag = !flag;
    }
  return nums;
}
  
console.log(wiggleSort([3, 5, 2, 1, 6, 4]));


var kidsWithCandies = function(nums, extraCandies) {
    let result = []; 
    let max = 0;
    for(let i = 0; i < nums.length; i++){
       if(nums[i] > max){
         max = nums[i]
       }
    }
    for(let i = 0; i < nums.length; i++){
        nums[i] += extraCandies;
    }
  for(let i = 0; i < nums.length; i++){
        if(nums[i] >= max){
          result.push(true)
        }else {
          result.push(false)
        }
    }
  return result;
};


console.log(kidsWithCandies([2,3,5,1,3], 3))


var decompressRLElist = function(nums) {
    let result = []; 
    for(let i = 0; i < nums.length; i++){
      if(i%2 != 0){
        for(let j = 0; j < nums[i - 1]; j++){
          result.push(nums[i]);
        }
      }
    }
  return result;
};

console.log(decompressRLElist([1,2,3,4]))
