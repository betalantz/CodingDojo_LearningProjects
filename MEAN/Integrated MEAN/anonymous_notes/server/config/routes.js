const path = require("path")

const notes = require("./../controllers/notes.js")

module.exports = app => {
    app.get('/get_all', notes.get_all)
    app.post('/add', notes.create)
    app.get("*", (req, res) => res.sendFile(path.resolve("./client/dist/index.html")))
}