var getMinMax = function (arr,n){
        //code here
        arr.sort(function(a, b){return a - b})
        return [arr[0], arr[arr.length-1]]
    }

console.log(getMinMax([9999,1,100,890,1000,9,4,6,],8));