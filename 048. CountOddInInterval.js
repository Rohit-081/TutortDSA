var countOdds = function(low, high) {
    count = 0;
    for(let i = low; i<=high; i++){
        if(i%2 !== 0){
            count++;
        }
    }
    return console.log(count);
};

countOdds(3,7);