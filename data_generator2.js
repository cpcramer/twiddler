/*
 * NOTE: This file generates fake tweet data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.html.
 */

 // set up data structures
window.streams = {};
streams.home = [];
streams.users = {};
streams.users.shawndrost = [];
streams.users.sharksforcheap = [];
streams.users.mracus = [];
streams.users.douglascalhoun = [];
window.users = Object.keys(streams.users);


var Tweets = function(){
  var obj = {};

  extend(obj, tweetMethods);

  return obj;
}

var tweetMethods = {
  // utility function for adding tweets to our data structures
  addTweet: function(newTweet){
    var username = newTweet.user;
    streams.users[username].push(newTweet);
    streams.home.push(newTweet);
  },

  // utility function
  randomElement: function(array){
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  },

  randomMessage: function(){
    return [randomElement(opening), randomElement(verbs), randomElement(objects), randomElement(nouns), randomElement(tags)].join(' ');
  },

  // generate random tweets on a random schedule
  generateRandomTweet: function(){
    var tweet = {};
    this.user = randomElement(users);
    this.message = randomMessage();
    this.created_at = new Date();
    addTweet(tweet);
  },

  // utility function for letting students add "write a tweet" functionality
  // (note: not used by the rest of this file.)
  writeTweet: function(message){
    if(!visitor){
      throw new Error('set the global visitor property!');
    }
    var tweet = {};
    this.user = visitor;
    this.message = message;
    addTweet(tweet);
  },
};

for(var i = 0; i < 10; i++){
  generateRandomTweet();
}

scheduleNextTweet = function(){
    generateRandomTweet();
    setTimeout(scheduleNextTweet, Math.random() * 1500);
};

scheduleNextTweet();

// random tweet generator
var opening = ['just', '', '', '', '', 'ask me how i', 'completely', 'nearly', 'productively', 'efficiently', 'last night i', 'the president', 'that wizard', 'a ninja', 'a seedy old man'],
var verbs = ['downloaded', 'interfaced', 'deployed', 'developed', 'built', 'invented', 'experienced', 'navigated', 'aided', 'enjoyed', 'engineered', 'installed', 'debugged', 'delegated', 'automated', 'formulated', 'systematized', 'overhauled', 'computed'];
var objects = ['my', 'your', 'the', 'a', 'my', 'an entire', 'this', 'that', 'the', 'the big', 'a new form of'];
var nouns = ['cat', 'koolaid', 'system', 'city', 'worm', 'cloud', 'potato', 'money', 'way of life', 'belief system', 'security system', 'bad decision', 'future', 'life', 'pony', 'mind'];
var tags = ['#techlife', '#burningman', '#sf', 'but only i know how', 'for real', '#sxsw', '#ballin', '#omg', '#yolo', '#magic', '', '', '', ''];

// test 

var myTweet = Tweets();
myTweet.generateRandomTweet();
console.log(myTweet);











