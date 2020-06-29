// Problem 2
  
  // find my limit:
  // - generate fibonacci sequence whose values
  // reach / exceed 4 million
  // - find index of the last value < 4 million.
  //  (that's the sequence length we're dealing with)
  
  // 2 options: 
  // generate array --> filter even values--> sum array
  // OR
  // check if value is even before appending array --> sum array X
  
  
  //Fibonacci sequence builder
  let fib = (len) => {
    let arr = [0,1]
    if (len == 0) {
      return arr[0];
    } else if (len == 1) {
      return arr[1];
    } else {
      for (x = 2; x < len; x++) {
        arr.push(arr[x - 1] + arr[x - 2]);
      };
      // return arr; // return array
      // return arr[len - 1]; // return last value in array
    }
  };
  
  
  // fib(35);
  
  // I thought I'd have to play around and add an extra line of code
  // to identify the index of the last value that is less than 
  // 4 million but it became pretty obvious comparing 
  // fib(34) - 3524578 and fib(35) - 5702887
  
  //  now I know the limit - time to rewrite to find its sum:
  
  let fib2 = (len) => {
    let arr = [0,1]
    for (x = 2; x < len; x++) {
      arr.push(arr[x - 1] + arr[x - 2]);
    };
    arr = arr.filter(x => x % 2 == 0);
    let tot = arr.reduce((x,y) => x + y, 0);
    return tot;
  };
  
  console.log(fib2(34));