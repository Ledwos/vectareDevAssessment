// Problem 1

const sum35 = (num) => {
    let tot = 0;
    for (x = 0; x < num; x++) {
      if (x % 3 == 0 | x % 5 == 0) {
        tot += x;
      }
    };
    return tot;
  };
  
  //Refactor - can I use a ternary? yes
  const nu_sum35 = (num) => {
    let tot = 0;
    for (x = 0; x < num; x++) {
      x % 3 == 0 | x % 5 == 0 ? tot += x : null;
    };
    return tot;
  };
  
  // console.time('nu sum 1000');
  console.log(nu_sum35(1000));
  // console.timeEnd('nu sum 1000')