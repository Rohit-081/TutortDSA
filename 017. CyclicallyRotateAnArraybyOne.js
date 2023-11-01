var rotate = function(arr,n){
        arr.splice(0,0,arr[n-1]);
        let arr1 = arr.slice(0,n);
        return arr1;
}


console.log(rotate([1,2,3,4,5,6],6))