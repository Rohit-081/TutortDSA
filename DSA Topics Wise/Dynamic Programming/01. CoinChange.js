/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // Initialize an array to store the fewest number of coins needed for each amount from 0 to amount
 let dp = new Array(amount + 1).fill(Infinity);
 
 // Base case: 0 coins needed for amount 0
 dp[0] = 0;
 
 // Iterate over each amount from 1 to amount
 for (let i = 1; i <= amount; i++) {
     // Try each coin denomination
     for (let coin of coins) {
         // Check if the current coin denomination can be used to make up the current amount
         if (i - coin >= 0) {
             dp[i] = Math.min(dp[i], dp[i - coin] + 1);
         }
     }
 }
 
 // If dp[amount] is still Infinity, it means the amount cannot be made up by any combination of coins
 return dp[amount] === Infinity ? -1 : dp[amount];
};