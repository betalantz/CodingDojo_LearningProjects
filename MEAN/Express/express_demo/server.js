const express = require("express")
const path = require("path")

const app = express()

const PORT = 8000 //this setting optional

app.set("views", path.join(__dirname, "./client/views")) //handles diff path separators from diff platorms/OS
app.set("view engine", "ejs")

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
