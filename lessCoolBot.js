const https = require("https")
const fs = require("fs")
const Twit = require("twit")

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
        let json = JSON.parse(data).text;
        console.log(JSON.parse(data).text);


        T.post('statuses/update', {status: json} , function(err, data, response) {
            console.log(data)
        })


    });

    }).on("error", (err) => {
    console.log("Error: " + err.message);
    });


    console.log("bot running!")

    var T = new Twit({
        consumer_key:         'CNVWCpptNn3ysseDYmTJLNPC1',
        consumer_secret:      'VacNgSEWS9olTpqSPFPeau9XyRl3Kti3gmNWyTkyk9gcDKOXhY',
        access_token:         '1359219804276727814-oX8GBXhZp8YfR0TDA1CZRgS53RmC8X',
        access_token_secret:  'rtHTupX3ikC1qt7zpVJccXSSGrXI6lQhNejWUPpYMh3tj'
    });





}