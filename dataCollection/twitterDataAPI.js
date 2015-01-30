var Twit = require('twit');
var fs = require('fs');
var twit = new Twit({
	consumer_key : '9RZ3UpAvrxEhQmbqobBPU0Uod',
	consumer_secret : 'nUZD3fKNBAleiQGbcG01qWXitvaG4E0LordW3obqR9Lc0d9AAR',
	access_token : '2840974749-pDTgELcDb9dj7hkL1fCv7UQmOUvuIYLgGk6X71z',
	access_token_secret : 'aRx59QHtv9j6OSqbvawihtfSRWlPsJGbjAEpcUf8VoWTB'
});

var uk = [ '-9.23', '49.84', '2.69', '60.85' ];
var swiss = ['8','46','9','48'];
var cambridge = ['0.11','52.15','0.125','52.25'];
//var stream = twit.stream('statuses/filter', { locations: swiss });
var stream = twit.stream('statuses/filter', { locations: cambridge});
//var stream = twit.stream('statuses/filter', { locations: uk});
//var stream = twit.stream('statuses/filter', { track: "coding" });
var log = fs.createWriteStream('tweets.log');

stream.on('tweet', processTweet);

function processTweet(tweet) {
//	var regexp = /[\w'@#]+/g;
//	var words = tweet.text.match(regexp);
//	log.write(words);
    console.log(tweet.text);

    //var regexp = /[\w'@#]+/g;
    //var regexp = /.*/g;
   // var words = tweet.text.match(regexp);
    //console.log(words);


    var strTweet = JSON.stringify(tweet);
    log.write(strTweet);
};