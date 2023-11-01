	const repeatedNumber = function(A){
        var xor = 0
        for (var i = 0; i < A.length; i++) {
            xor ^= i + 1
            xor ^= A[i]
        }
        
        var matchBit = 1
        while (!(xor & matchBit)) matchBit <<= 1
        
        var x = 0, y = 0
        for (var i = 0; i < A.length; i++) {
            var n = i + 1
        
            if (A[i] & matchBit) x ^= A[i]
            else y^= A[i]
            
            if (n & matchBit) x ^= n
            else y ^= n
        }
        
        var dup = 0, missing = 0
        for (var i = 0; i < A.length; i++) {
            if (A[i] == x) {
                dup = x
                missing = y
                break
            }
            else if (A[i] == y) {
                dup = y
                missing = x
                break
            }
        }
        
        return console.log([dup, missing]);


	};

    repeatedNumber([3,1,2,5,3]);
