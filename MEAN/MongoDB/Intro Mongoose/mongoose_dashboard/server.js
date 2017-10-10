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
// Display all the crows
app.get('/', function(req, res) {
    Crow.find({}, function(err, crows) {
        if(err){
            console.log("You done messed up index, son!");
        } else {
            console.log("Sending crows to index")
            res.render('index', {crows})
        }
    })
})
// Display form for adding a crow
app.get('/crows/new', function(req, res) {
    res.render('new')
})
// Display info on one crow
app.get('/crows/:id', function(req, res) {
    Crow.findOne({_id: req.params.id}, function(err, crow) {
      if(err){
          console.log("Can't show just one");
      } else {
          console.log("Sending crow to show_one.ejs")
          res.render('show_one', {crow})
      }
    })
})
// Add crow Request 
app.post('/crows', function(req, res) {
    console.log("POST DATA", req.body);
    var crow = new Crow({
        name: req.body.name, 
        age: req.body.age, 
        tree: req.body.tree});
    crow.save(function(err) {
      if(err) {
        console.log('something went wrong with add');
      } else { 
        console.log('successfully added a user!');
        res.redirect('/');
      }
    })
  })
// Show form to edit a crow
app.get('/crows/edit/:id', function(req, res) {
    Crow.findOne({_id: req.params.id}, function(err, crow) {
        if(err){
            console.log("You done messed up edit, son!");
        } else {
            console.log("Sending crow to edit.ejs")
            res.render('edit', {crow})
        }
    })
})
// Update from the edit form
app.post('/crows/:id', function(req, res) {
    Crow.findOne({_id: req.params.id}, function(err, crow) {
        crow.name = req.body.name
        crow.age = req.body.age
        crow.tree = req.body.tree
        crow.save(function(err) {
            if(err) {
              console.log('something went wrong with update');
            } else { 
              console.log('successfully updated a crow!');
              res.redirect('/');
            }
        })
    })    
})
// Delete a crow by ID
app.post('/crows/destroy/:id', function(req, res) {
    Crow.remove({_id: req.params.id}, function(err){
        if(err) {
            console.log('naw, no joy, boy!');
        } else {
            console.log('successfully deleted a crow');
            res.redirect('/')
        }
    })
})
app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
})

mongoose.connect('mongodb://localhost/crow_dashboard', {useMongoClient: true});

var CrowSchema = new mongoose.Schema({
    name: String,
    age: Number,
    tree: String
   })
   mongoose.model('Crow', CrowSchema); // We are setting this Schema in our Models as 'crow'
   var Crow = mongoose.model('Crow') // We are retrieving this Schema from our Models, named 'crow'
   
// Use native promises
mongoose.Promise = global.Promise;
