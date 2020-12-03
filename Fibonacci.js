//memoization
//js object key is fn args and value is returned from the function

//time complexity is O(2^n) and space complexity is O(n)
const fib_old=(n)=>{
  
  if(n<= 2) 
    return 1;
  else{
    return fib(n-1)+fib(n-2);
     
  }   
};

//time complexity is O(2^n) and space complexity is O(n)
const fib=(n,memo={})=>{
  if(n in memo)
    return memo[n];
  if(n<= 2) 
    return 1;
  else{
    memo[n] = fib(n-1,memo)+fib(n-2,memo);
    return memo[n];
  }   
};

//console.log(fib(50)); // O(n) complexity
console.log(fib_old(50)); //O(2^n) complexity