// require express
const express = require("express");
const session = require("express-session")
// path module -- try to figure out where and why we use this
const path = require("path");
// create the express app
const app = express();

app.use(session({secret: 'codingdojorocks'}))

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', function(req, res) {
    if (!req.session.counter) {
        req.session.counter = 0
    }
    req.session.counter += 1
    res.render("index", {counter: req.session.counter});
})
app.get('/by_2', function(req, res) {
    req.session.counter += 1
    res.redirect("/");
})
app.get('/reset', function(req, res) {
    req.session.counter =0
    res.redirect("/");
})

// tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});