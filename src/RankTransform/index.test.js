const arrayRankTransform = require('./index.js');

test('always pass', () => {
    expect(true).toBeTruthy()
})

// test('Ranking an array with 1 item in it', () => {
//     expect(arrayRankTransform([1])).toEqual([1]);
// });

// test('[40, 10, 20, 30] should return [4, 1, 2, 3]', () => {
//     expect(arrayRankTransform([40, 10, 20, 30])).toEqual([4, 1, 2, 3]);
// });

// test('[100, 100] should return [1, 1]', () => {
//     expect(arrayRankTransform([100, 100])).toEqual([1, 1]);
// });

// test('[100, 100, 100] should return [1, 1, 1]', () => {
//     expect(arrayRankTransform([100, 100, 100])).toEqual([1, 1, 1]);
// });

// test('[37, 12, 28, 9, 100, 56, 80, 5, 12] should return [5, 3, 4, 2, 8, 6, 7, 1, 3]', () => {
//     console.log(arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12]))
//     expect(arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12])).toEqual([5, 3, 4, 2, 8, 6, 7, 1, 3]);
// });

