// Problem 6

// step 1 - generate grid;

// const grid = (len) => {
//     let arr = new Array(len);
//     for (n = 0; n < len; n++) {
//       arr[n] = new Array(len).fill(0);
//     };
//     // set start / finish points;
//     arr[0][0] = 1;
//     arr[len - 1][len - 1] = 2;
//     return arr;
//   };
  
// console.log(grid(5));
// using grid 5 size for now for visual purposes 
// (10-20 array size doesn't return a nice grid in console);
// Looking at the grid, only down / right moves are permitted 
// and the problem asks to count the number of routes that 
// go from 1 - 2 (top-left -> bottom-right). No matter what path 
// is chosen, one must go the exact same number of times to 
// the right and down to reach their destination. 
// With this in mind the function becomes:

let factorial = (num) => {
    let nu = 1;
    for (x = 1; x <= num; x++) {
        nu *= x;
    };
    return nu;
};

// console.log(factorial(5));

// const gridMath = (n) => {
//     // count no. of steps taken to go from 1-2
//     let totSteps = (2 * n);
//     // because the grid is always square the
//     // no. of steps down = no. of steps right therefore
//     let rightSteps = (totSteps / 2);
//     // now we can use nCr formula to find the number of paths
//     let totFact = factorial(totSteps);
//     let rightFact = factorial(rightSteps);
//     let sumFact = factorial((totSteps - rightSteps));
//     let paths = (totFact) / (rightFact * sumFact);
//     return paths;
// };

// console.log(gridMath(2));

// simplify the code:

const gridMath = (n) => {
    // count no. of steps taken to go from 1-2
    let totSteps = (2 * n);
    // now we can use nCr formula to find the number of paths
    let totFact = factorial(totSteps);
    let rightFact = factorial(n);
    let sumFact = factorial((totSteps / 2));

    let paths = (totFact) / (rightFact * sumFact);
    return paths;
};

console.log(gridMath(20));

// just noticed the problem text calls the example a 2x2 grid however what
// it's actually dealing with is a 3x3 grid with regards to the corners.
// Therefore generating the 5x5 grid with the earlier function it would
// be technically incorrect to call it that as in context to the squares
// generated, the corners (0's in my case) would connect to a 4x4 square grid. nice
// 2x2 - 6 ✔
// 20 x 20 - 137846528820 