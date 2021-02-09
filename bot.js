const Twit = require("twit")
const fs = require("fs")

console.log("bot running!")

var T = new Twit({
    consumer_key:         'CNVWCpptNn3ysseDYmTJLNPC1',
    consumer_secret:      'VacNgSEWS9olTpqSPFPeau9XyRl3Kti3gmNWyTkyk9gcDKOXhY',
    access_token:         '1359219804276727814-oX8GBXhZp8YfR0TDA1CZRgS53RmC8X',
    access_token_secret:  'rtHTupX3ikC1qt7zpVJccXSSGrXI6lQhNejWUPpYMh3tj'
  });


/* var b64content = fs.readFileSync('img.jpg', { encoding: 'base64' })

// first we must post the media to Twitter
T.post('media/upload', { media_data: b64content }, function (err, data, response) {
  // now we can assign alt text to the media, for use by screen readers and
  // other text-based presentations and interpreters
  var mediaIdStr = data.media_id_string
  var altText = "I realy hope therse an image here!"
  var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }

  T.post('media/metadata/create', meta_params, function (err, data, response) {
    if (!err) {
      // now we can reference the media and post a tweet (media will attach to the tweet)
      var params = { status: 'You\'r daily dose of fun Facts!', media_ids: [mediaIdStr] }

      T.post('statuses/update', params, function (err, data, response) {
        console.log(data)
      })
    }
  })
}) */
var param = { status: JSON.stringify(fs.readFileSync("fact.txt","utf-8"))}
console.log(param)
T.post('statuses/update', param , function(err, data, response) {
    console.log(data)
  })