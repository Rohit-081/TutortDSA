var check = function(A,B,N){
    let map = new Map();
    let count = 0;
    for(let i = 0; i < N; i++) {
            if (map.get(A[i]) == null)
                map.set(A[i], 1);
            else {
                count = map.get(A[i]);
                count++;
                map.set(A[i], count);
            }
    }
    for (let i = 0; i < N; i++) {
            if (!map.has(B[i]))
                return false;
  
            // If an element of B[] appears more
            // times than it appears in A[]
            if (map.get(B[i]) == 0)
                return false;
  
            count = map.get(B[i]);
            --count;
            map.set(B[i], count);
        }
        return true;
}

console.log(check([1,2,3,4,5],[5,4,2,3,1],5))