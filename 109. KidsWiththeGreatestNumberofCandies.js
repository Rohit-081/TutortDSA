var kidsWithCandies = function (candies, extraCandies) {
  //     let result = [];
  //     let max = 0;
  //     for(let i = 0; i < candies.length; i++){
  //        if(candies[i] > max){
  //          max = candies[i]
  //        }
  //     }
  //     for(let i = 0; i < candies.length; i++){
  //         candies[i] += extraCandies;
  //         if(candies[i] >= max){
  //           result.push(true)
  //         }else {
  //           result.push(false)
  //         }
  //     }
  //   return result;

  const maxCandies = Math.max(...candies);
  return candies.map((candie) => candie + extraCandies >= maxCandies);
};
