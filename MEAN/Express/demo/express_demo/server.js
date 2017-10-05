const express = require("express")
const path = require("path")

const app = express()

const PORT = 8000 //this setting optional

app.set("views", path.join(__dirname, "./client/views")) //handles diff path separators from diff platorms/OS
app.set("view engine", "ejs")

app.get("/", (request, response) => {
    console.log("GET request at '/'");
    let my_name = "Jack"
    let cool_numbers = [13, 3, 42, 22/7, 227]
    response.render("index", {name: my_name, nums: cool_numbers})
})
app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
