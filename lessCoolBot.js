https = require("https")
fs = require("fs")



https.get('https://uselessfacts.jsph.pl/random.json?language=en', (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    let json = JSON.parse(data).text;
    console.log(JSON.parse(data).text);
    fs.writeFile('fact.txt', json , function(err) {})
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
