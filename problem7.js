// Problem 7

// initial idea:
// read row
// read row below (rb)
// find largest value in rb
// neighbouring? if not find next largest value in rb
// repeat
// problem - the largest values aren't necessarily going to be grouped together :/
// e.g. what if smallest value is linked to a larger value next.

// let a = [[3], [7, 4], [2, 4, 6], [8, 5, 8, 3]];
// let b = [];

// const grid = (len) => {
//     let arr = new Array(len.length);
//     for (n = 0; n < len.length; n++) {
//       arr[n].push([]);
//     };
//     // set start / finish points;
//     return arr;
// }; 

// const maximus = (ar) => {
//   let b = [];
//   //match array length
//   for (n = 0; n < ar.length; n++) {
//     b.push([]);
//   };
//   // set b[0][0] to match a[0][0]
//   b[0].push(a[0][0]);
//   // now for loop awaay!
//   // for (y = 0; y < b.length; y++) {
//   //   for (x = 0; x < b[y].length; x++) {
//   //     b[y+1].push((b[y][x] + ar[y+1][x]));
//   //     b[y+1].push((b[y][x] + ar[y+1][x+1]));
//   //   }
//   // };

//   return b;
// };

// console.log(maximus(a));

// const grid = (len) => {
//     let arr = new Array(len);
//     for (n = 0; n < len; n++) {
//       arr[n] = new Array();
//     };
//   return arr;
// };

// const maximus = (ar) => {
//     let b = grid(ar.length);
//     b[0].push([ar[0][0]]);
//     for (y = 0; y < ar.length; y++) {
//       for (x = 0; x < b[y].length; x++) {
//         b[y+1].push(b[y][x] + ar[y+1][x]);
//         b[y+1].push((b[y][x] + ar[y+1][x+1]));
//       };
//     };
  
//     return b;
//   };
  
//   console.log(maximus(a));

//  this idea is flawed, every time I try to sum each array it expands which 
// created errors.

//  But why count down when you can count up. Each line stays the same 
// length this way... silly

// let a = [[3], [7, 4], [2, 4, 6], [8, 5, 8, 3]];
let a = [[3, 0, 0, 0], [7, 4, 0, 0], [2, 4, 6, 0], [8, 5, 8, 3]];


// let maximus = (ar) => {
//     // let b = 0;
//     for (y = (ar.length - 1) ; y >= 0; --y) {
//       for (x = 0; x < ar[y].length; x++) {
//         //   adding 0 to each array to prevent addition error
//         //   ar[y+1].push(0);
//           if ((ar[y][x] + ar[y+1][x]) > (ar[y][x+1] + ar[y+1][x])) {
//               ar[y+1][x] += (ar[y][x] + ar[y+1][x]);
//           } else {
//             ar[y+1][x] += (ar[y][x+1] + ar[y+1][x]);
//           };
//       };
//     };
//     return ar;
// };

// console.log(maximus(a));

//  why check the sum of each when you just picking the largest value will work

let maximus = (ar) => {
    // let b = 0;
    for (y = (ar.length - 1) ; y >= 0; --y) {
      for (x = 0; x < ar[y].length; x++) {
        //   adding 0 to each array to prevent addition error
          ar[y+1].push(0);
          if (ar[y][x] > ar[y][x+1]) {
              ar[y+1][x] += ar[y][x];
          } else {
            ar[y+1][x] += ar[y][x+1];
          };
      };
    };
    return ar;
};

console.log(maximus(a));

// couldn't sort this one in the alotted time but I hope you understand
// the logic.

