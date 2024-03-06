var trap = function(height) {
    let n = height.length;
    let water = 0;
    let left = new Array(n);
    let right = new Array(n);
    left[0] = height[0]; 
    for(let i = 1; i < n; i++){
        left[i] = Math.max(left[i-1], height[i]);      
    }
    console.log(left);
    right[n-1] = height[n-1];
    for(let i = n - 2; i >= 0  ; i--){
        right[i] = Math.max(right[i+1], height[i]);        
    }
    console.log(right);
  
    for(let i = 0; i < n; i++){
        water += (Math.min(left[i], right[i]) - height[i]);
    }
    return console.log(water);
};

trap([0,1,0,2,1,0,1,3,2,1,2,1]);