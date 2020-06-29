
  // Problem 5
  
  // fxn to check if it's prime
  const primo = (num) => {
    let verdict = true;
    for (x = 2; x < num; x++) {
      // console.log(`${num} / ${x}`)
      if (num % x === 0) {
        verdict = false;
        break
        // ^no need to check further if proven not prime
      }
    };
    return verdict
  };
  
//   console.log(primo(11));
  
  //now use prime check to find nth prime number
  const findPrime = (nth) => {
    let n = 0;
    let val = 0;
    for (y = 2; n <= (nth - 1); y++) {
      if (primo(y)) {
        val = y; 
        n +=1;
      }
    }
    return val;
  };
  
//   console.time('prime 10001');
  console.log(findPrime(10001));
//   console.timeEnd('prime 10001');
  
// originally both primo / findPrime used x in their for loops
// which caused errors so now findPrime uses y variable instead.
// expected values:
// 10th - 29 ✔
// 100th - 541 ✔
// 1000th - 7919 ✔
// 10001th - 104743 ✔ avg. runtime: 2948.7838ms | 2.95s
  
  // try sieve method ?