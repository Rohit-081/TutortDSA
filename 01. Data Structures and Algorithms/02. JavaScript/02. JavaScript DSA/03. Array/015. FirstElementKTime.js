var firstElementKTime = function(arr,n,k){
    let map = new Map();
        let count = 0;
        for(let i = 0; i < n; i++){
            if(map.get(arr[i]) == null){
                map.set(arr[i],1);
            }
            else{
                count = map.get(arr[i]);
                count++;
                map.set(arr[i], count);
            }
            if(map.get(arr[i]) === k){
                return arr[i];
            }
        }
        return -1;
}

console.log(firstElementKTime([1,7,6,4,6,8,7],7,3));