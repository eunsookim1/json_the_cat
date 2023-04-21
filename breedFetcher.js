const request = require('request');

const name = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${name}`;

request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error);
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("breed is not found");
    return;
  }
  console.log(data[0].description);
  
});

// command line app that retrieves description of a specific breed if found in the list of cat breeds.