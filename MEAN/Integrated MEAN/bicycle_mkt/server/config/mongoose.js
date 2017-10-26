const mongoose = require("mongoose")
const fs = require("fs")
const path = require("path")

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/bikes201710", {useMongoClient: true})

const models_path = path.join(__dirname, "./../models")

fs.readdirSync(models_path).forEach(file => {
	if(file.toLowerCase().includes(".js")){
		require(path.join(models_path, file))
	}
})

const User = mongoose.model("User")
const Bike = mongoose.model("Bike")
// User.findOne({}, (err, user) => {
//     let newBike = new Bike
//     newBike.name = "Cruiser"
//     newBike.desc = "Very comfortable!"
//     newBike.city = "Portland, OR"
//     newBike.price = "125"
//     newBike.img = "http://fake"
//     newBike._user = user._id
//     newBike.save(err => {
//         console.log("New bike created. Errors?", err);
//     })
// })
// User.findOne({}, (err, user) => {
//     Bike.findOne({}, (err, bike) => {
//         console.log("We found the bike", err);
//         user.bikes.push(bike)
//         user.save((err2) => {
//             console.log("Bike added to user", err2);
//         })
//     })
    
// })
// User.findById("59f14a04bf7fd9c6f300ae00").populate('bikes').exec(showUser)

// function showUser(err, user){
//     console.log("Here's the user. Any err?", err)
//     for (let bike of user.bikes){
//         console.log(`We have a bike called ${bike.name}, with id of ${bike.id}`);
//     }
// }