const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")

const app = express()
const PORT = 8000

app.use(bodyParser.urlencoded({ extended: true }))

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.render("index")
})

app.post('/result', function(req, res) {
    console.log("POST DATA", req.body);

    // res.render('results')
    res.redirect('/')
})

app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
})
