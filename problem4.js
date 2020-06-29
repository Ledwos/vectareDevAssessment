// Problem 4
  
// plan:
// enter number
// is it divisible by x?
// if true x++
// else y++

// found awesome maths formula! below it's written for n = 20
//  formula is product of all prime numbers below n,
//  each prime number is set to the highest power to which the value
//  remains below n.
// f(20) = (2** 4) * (3** 2) * 5 * 7 * 11 * 13 * 17 * 19
// f(20) = 16 * 9  * 5 * 7 * 11 * 13 * 17 * 19
// f(20) = 232792560 <-- target value

// now to make it a function
// find all prime numbers less than n
// for each one have two arrays - prime / power
// each time a prime is found - prime.push(n) / power.push(1);
// then find largest power for each prime that doesn't exceed n
// then write equation that multiplies like in the formula
// return tot value.

  // using the prime function built in part 5 allows me to generate the arrays;

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
  
  // const smallest = (n) => {
  //   let prime = [];
  //   let power = [];
  //   for (z = 2; z < n; z++) {
  //     if (primo(z)) {
  //       prime.push(z);
  //       power.push(1);
  //     }
  //   }
  //   console.log(prime);
  //   console.log(power);
  // };

//   console.log(smallest(10));

  // now find largest power for each prime value;

  const smallest = (n) => {
    let prime = [];
    let power = [];
    let answer= 1;
    for (z = 2; z < n; z++) {
      if (primo(z)) {
        prime.push(z);
        power.push(1);
      }
    };
    
    for (b = 0; b < prime.length; b++){
      for (a = 1; a < 10; a++) {
        if (prime[b] ** a >= n) {
          power[b] = (a - 1);
          break
        }
      }
    };
    // console.log(prime);
    // console.log(power);
    for (c = 0; c < prime.length; c++) {
      answer *= (prime[c] ** power[c]);
    };
    return answer;
  };

//   console.time('smallest');
  console.log(smallest(20));
//   console.timeEnd('smallest'); 

  // second for loop- a < 10 chosen though not really necessary as any 
  // prime value to the power 10 that is below 20 is easily bigger than 20
  // smallest(10) - 2520 ✔
  // smallest(20) - 232792560 ✔