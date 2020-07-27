// ONCE THIS IS SOLVED RENAME TO SOLVED.JS

// Given an array of integers arr, replace each element with its rank.

// The rank represents how large the element is. The rank has the following rules:

//     Rank is an integer starting from 1.
//     The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
//     Rank should be as small as possible.
const arr = [40, 10, 20, 30];
const arrayRankTransform = function (arr) {
  const sorted = arr.slice().sort(function (a, b) { return a - b })
  const ranks = [];
  let previousRank = null;
  let previousValue = null;
  console.log(`The sorted array: ${sorted}`)
  arr.forEach((item, index) => {
    for (let i = 0; i < sorted.length; i++) {
      console.log(i)
      if (sorted[i] !== item) {
        continue;
      }
      else if (sorted[i] === previousValue) {
        ranks.push(previousRank);
        console.log(`case 2 ------- ${ranks}`)
        break;
      }
      else if (index === 0 && sorted[i] === item && sorted[i] !== previousValue) {
        ranks.push(i);
        previousRank = i;
        console.log(i)
        previousValue = sorted[i];
        console.log(`case 3 ------- ${ranks} -- previousValue: ${previousValue} -- previousRank: ${previousRank} -- sorted[i]: ${sorted[i]}`)
        break;
      }
      else if (sorted[i] === item && sorted[i] !== previousValue) {
        ranks.push(i + 1);
        previousRank = i + 1;
        console.log(i + 1)
        previousValue = sorted[i];
        console.log(`case 4 ------- ${ranks} -- previousValue: ${previousValue} -- previousRank: ${previousRank} -- sorted[i]: ${sorted[i]}`)
        break;
      }
    }
  });
  console.log(`ranks ${ranks}`);
  return ranks
};

// arrayRankTransform(arr);
// arrayRankTransform([100, 100, 100]);
arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12]);
console.log([37, 12, 28, 9, 100, 56, 80, 5, 12].sort(function (a, b) { return a - b }))

module.exports = arrayRankTransform;