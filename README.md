# Solving JS Algorithms

Solving JS Algorithms is a repository containing JavaScript algorithms and tests to test them.
I am using Node to run everything and Jest to test everything. Most questions for from Leetcode or various other publicly available internet resources.
The intended purpose it to improve the JavaScript algorithm solving and learing experience.

## Installation

To get started, Fork the repo or copy and paste the command below.

```git clone git@github.com:Fitzpa/sloving-js-algorithms.git```

or download the zip file above.

Once inside the project directory run 

```npm install```

## Usage

To run code you are writing you can run 

```node src/WhateverFolderContainsTheIndexFileYouWantToRun```

To have nodemon watch you changes and rerun your code as you're writing it you can change the *watch* script in the package.json file to the path of the file you want to watch and then run 
```npm watch```

To have Jest test all test files run 
```npm t```

or 

```npm test``

If a problem has not been solved it will not contain a '''solved.js''' file in it's folder. Each time a problem is solved with a solution or a faster solution, if one already exists, a '''solved.js''' file should be added or updated, the index.js file's solution should be removed and the '''index.test.js''' file should be commented out until it's next use.

## Future Plans
* To set up a Jest script to watch files
* Add many more questions
* Add many more tests

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors

* **Louie Fitzpatrick** - *Initial work* - [fitzpa](https://github.com/fitzpa)

## License
[MIT]

## Acknowledgments
* Hat tip Leetcode for some of the JavaScript questions