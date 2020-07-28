// Write a program to count the number of days between two dates.

// The two dates are given as strings, their format is YYYY-MM-DD as shown in the examples.



// Example 1:

// Input: date1 = "2019-06-29", date2 = "2019-06-30"
// Output: 1
// Example 2:

// Input: date1 = "2020-01-15", date2 = "2019-12-31"
// Output: 15


// Constraints:

// The given dates are valid dates between the years 1971 and 2100.

//   @param {string} date1
//   @param {string} date2
//   @return {number}
let date1 = "2020-01-15"
let date2 = "2019-12-31"

var daysBetweenDates = function (date1, date2) {
    const firstDate = new Date(date1)
    const secondDate = new Date(date2)

    let diffInTime = 0;
    if (firstDate.getTime() < secondDate.getTime()) {
        diffInTime = secondDate.getTime() - firstDate.getTime()
    } else if (firstDate.getTime() > secondDate.getTime()) {
        diffInTime = firstDate.getTime() - secondDate.getTime()
    } else {
        diffInTime = 0
    }

    const diffInDays = diffInTime / (1000 * 3600 * 24)

    return diffInDays
};

console.log(daysBetweenDates(date1, date2))