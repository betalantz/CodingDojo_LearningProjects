const path = require("path")

const bikes = require("./../controllers/bikes_con.js")
const users = require("./../controllers/users_con.js")

module.exports = app => {
    
    app.get("*", (req, res) => res.sendFile(path.resolve("./client/dist/index.html")))
}