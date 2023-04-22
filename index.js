const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

// Refactoring & calling the function:
fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(description);
  }
});


// Or could use modularity this way:
// const myFunction = function(error, description) {
//   console.log(error);
//   console.log(description);
// };

// fetchBreedDescription('russ', myFunction);