// We assume that we have solutions of smaller problems we solve big problems. We keep breaking until we reach a
// case where we can't break.

// I/P: 4
// O/P: 24
// 4*3*2*1

// int fact(int n){
// 	if(n == 0)
// 		return 1;
// 	else
// 		return n*fact(n-1);
// }

// Tail Recursive -- The function calls at last.
// 1. Meaning of parameters and return value must be same for

// Write a reccursive function to print numbers from n to 1 for a given n.
// I/P: n = 5
// O/P: 5 4 3 2 1
// I/P: n = 3
// O/P: 3 2 1

// void fun(){
//	if(n===0);
//	return;
//	cout<< n <<"";
//	fun(n-1);
//}

// Write a reccursive function to print numbers from 1 to n for a given n.
// I/P: n = 5
// O/P: 1 2 3 4 5
// I/P: n = 3
// O/P: 1 2 3

// void fun(){
//	if(n<=0);
//	return;
// fun(n-1);
//	cout<< n <<"";
//}

// Tail Recursion
// void fun()

//Re- write factorial as tail Recursion.
//int fact(int n, int val = 1){
//	if(n == 0)
// 		return val;
// 	return fact(n-1, n*val);
//}

// Write a recursive function to check if a string palindromes.
// I/P: str = "aabaa"
// O/P: Yes
// I/P: str = "geeks"
// O/P: No

// Initially s = 0; e = n-1;
// bool isPal(string str, int s, int e){
//	if(s == e) return true;
//  if(s>e) return true;
//  if(str[s] != str[e])
// 		return false;
// 	return isPal(str, s+1, e-1);
//}

// Josephus Problem
// Given n people in a circle, every k-th person is killed in iteration. Find the survivor.
// I/P: n = 7, k = 3;
// O/P: 4
// I/P: n = 8, k = 2;
// O/P: 1

// int jos(){
// 	return (jos(n-1,k)+k)%n;
//}

// Write  a recursive function to find sum of digits in a number
// I/P: n = 253
// O/P: 10
// I/P: n = 9987
// O/P: 33

// int fun(int n){
// if(n<10)
//		return n;
//	return fun(n/10)+n%10;
//}

// Given a rope of length n, you need to find maximum number of pieces you can make such that length of
// every piece is in set {a,b,c} for given three values a, b and c.
// I/P: n = 5, a = 2, b = 5, c = 1
// O/P: 5
// I/P: n = 23, a = 12, b = 9, c = 11
// O/P: 2
// I/P: n = 5, a = 4, b = 2, c = 6
// O/P: -1

// Steps for Recursion
// 1. Find the base case
// 2. Find the relation between the problem and subproblems.
// 3. Generalize the relation.

// function printHello(n){
// 		if(n == 0)
// 			return;
// 		console.log("Hello");
// 		printHello(n-1);
// }
// printHello(5);

// Find the sum of N natural numbers using recursion

function sum(n) {
  if (n == 1) {
    return 1;
  }
  return n + sum(n - 1);
}

console.log(sum(5));
