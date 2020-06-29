 // Problem 3

  // check products of all numbers between 100 and 999
  // check if palindrome- arr[x] == arr[x].splice().reverse() ?
  
  const pal = () => {
    let start = 100;
    let fin = 999;
    let palNum = 0;
    let val = 0;
    for (x = start; x <= fin; x++) {
      for (y = start; y <= fin; y++ ) {
        val = x * y;
        let ival = val.toString().split('').reverse().join('');
        // ^ there must be a nicer way to reverse a string...
        if (val == ival) {
          palNum = val;
        };
      };
    };
    return palNum;
  };
  
//   console.log(pal());
  
  // returns 580085, checked online and the largest possible is 906609?
  
  
  const pal2 = () => {
    let start = 100;
    let fin = 999;
    let palNum = 0;
    // let val = 0;
    for (x = start; x <= fin; x++) {
      for (y = start; y <= fin; y++ ) {
        let val = x * y;
        let ival = val.toString().split('').reverse().join('');
        // ^ there must be a nicer way to reverse a string...
        if (val == ival) {
          // need to check if val is larger than most recent palNum
          palNum > val ? null: palNum = val;
        };
      };
    };
    return palNum;
  };
  
  console.log(pal2());
  
  // now we get 906609, initially assumed each consequent product
  // would be larger than the previous which is not true.