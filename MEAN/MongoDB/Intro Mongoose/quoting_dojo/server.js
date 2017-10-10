// Require the Express Module
const express = require('express');
// Create an Express App
const app = express();
// Require body-parser (to receive post data from clients)
const bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
const path = require('path');
// Require Monsgoose
const mongoose = require('mongoose')

const PORT = 8000
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './client/views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// The root route-render the add quote page
app.get('/', function(req, res) {
    res.render('index')
})
// Skip to show -- we want to get all of the quotes from the database and then render the show view passing it all of the quotes
app.get('/quotes', function(req, res) {
    Quote.find({}, function(err, quotes) {
      // This is the method that finds all of the quotes from the database
      // Notice how the first parameter is the options for what to find and the second is the
      //   callback function that has an error (if any) and all of the quotes
      // Keep in mind that everything you want to do AFTER you get the quotes from the database must
      //   happen inside of this callback for it to be synchronous 
      // Make sure you handle the case when there is an error, as well as the case when there is no error
      if(err){
          console.log("You done messed up, son!");
      } else {
          console.log("Sending users to show.ejs")
          res.render('show', {quotes})
      }
    })
  })
// Add Quote Request 
app.post('/quotes', function(req, res) {
    console.log("POST DATA", req.body);
    // create a new Quote with the name and quote corresponding to those from req.body
    var quote = new Quote({name: req.body.name, quote: req.body.quote, date: new Date});
    // Try to save that new quote to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    quote.save(function(err) {
      // if there is an error console.log that something went wrong!
      if(err) {
        console.log('something went wrong');
      } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a user!');
        res.redirect('/quotes');
      }
    })
  })
  
// Setting our Server to Listen on Port: 8000
app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
})
// This is how we connect to the mongodb database using mongoose -- "quoting_dojo" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/quoting_dojo', {useMongoClient: true});

var QuoteSchema = new mongoose.Schema({
    name: String,
    quote: String,
    date: Date
   })
   mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'Quote'
   var Quote = mongoose.model('Quote') // We are retrieving this Schema from our Models, named 'Quote'
   
// Use native promises
mongoose.Promise = global.Promise;
