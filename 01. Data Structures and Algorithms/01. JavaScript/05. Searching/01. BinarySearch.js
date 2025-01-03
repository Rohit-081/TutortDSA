// Given a sorted array of size N and an integer K, find the position at which K is present in the array using binary search.
// Input:
// N = 5
// arr[] = {1 2 3 4 5} 
// K = 4
// Output: 3
// Explanation: 4 appears at index 3.


function binarysearch(arr, n, k) {
      let low=0;
      let high=n-1;
      let flag=0;
     while(low<=high){
        let mid=Math.floor(low+(high-low)/2)
        if(arr[mid]==k){
            flag=1
            return console.log(mid);
        }
        else if(arr[mid]<k){
            low=mid+1
        }
        else{
            high=mid-1
        }
     }
     if(flag==0){
        return console.log(-1);
     }
}
    



binarysearch([1,2,3,4,5],5,5)