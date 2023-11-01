var nextPermutation = function(nums) {

    if(nums.length === 1){
        return console.log(nums);
    }
            
    var idx1 = -1;
    for(let i = nums.length-2; i >= 0; i--){
        if(nums[i] < nums[i+1]){
            idx1 = i;
            break;
        }
    }

    if(idx1 === -1){
        let arr = nums.reverse();
        return console.log(arr);
    } else {
        for(let j = nums.length-1; j >= 0; j--){
            if(nums[j] > nums[idx1]){
                let temp = nums[j];
                nums[j] = nums[idx1];
                nums[idx1] = temp;
                break;
            }
        }
    }
    
    let start = idx1+1;
    let end = nums.length - 1;
    while(start < end){
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
    return console.log(nums);
};

nextPermutation([1,2,3]);
nextPermutation([1,3,2]);
nextPermutation([3,2,1]);
nextPermutation([4,1,5,3,2]);