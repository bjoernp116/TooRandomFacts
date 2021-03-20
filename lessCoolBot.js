const https = require("https")
const fs = require("fs")
const Twit = require("twit")
const bw = require("bad-words")
const config = require("./config")
var filter = new bw;

funFact()
setInterval(funFact, 1000*60*60*12)
function funFact(){
    https.get('https://uselessfacts.jsph.pl/random.json?language=en', (resp) => {
    let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        let json = filter.clean(JSON.parse(data).text);
        
        console.log(JSON.parse(data).text);


        T.post('statuses/update', {status: json} , function(err, data, response) {
            console.log(data)
        })


    });

    }).on("error", (err) => {
    console.log("Error: " + err.message);
    });


    console.log("bot running!")

    var T = new Twit(config);





}
