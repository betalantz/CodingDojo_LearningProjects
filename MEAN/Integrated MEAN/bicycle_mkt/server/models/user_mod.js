const mongoose = require("mongoose")

const Schema = mongoose.Schema

const UserSchema = mongoose.Schema({
    firstName: {type: String, required: true}, 
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    pass: {type: String, required: true},
    bikes: [{type: Schema.Types.ObjectId, ref: 'Bike'}]
}, {timestamps: true})

mongoose.model("User", UserSchema)

// created dummy user
// const User = mongoose.model("User")
// let newUser = new User
// newUser.firstName = "Mark"
// newUser.lastName = "Jones"
// newUser.email = "mark@jones.com"
// newUser.pass = "admin"
// newUser.save(err => {
//     console.log("New user created. Errors?", err);
// })