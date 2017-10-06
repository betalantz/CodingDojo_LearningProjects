const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")

const app = express()
const PORT = 8000

app.use(bodyParser.urlencoded({ extended: true })) // maybe this isn't necessary here?
app.use(express.static(path.join(__dirname, "./client/views")))
app.use(express.static(path.join(__dirname, "./node_modules")))

app.set('views', path.join(__dirname, './client/views'))
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.render("index")
})


const server = app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
})
const io = require("socket.io").listen(server)

io.sockets.on("connection", socket => {
    console.log("New connection", socket.id);

    socket.on("posting_form", (newData) => {
        console.log(newData);
        let lucky = Math.floor(Math.random() * 1000) + 1
        io.emit("updated_message", newData)
        io.emit("random_number", lucky)
    })
})