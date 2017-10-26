const mongoose = require("mongoose")
const Bike = mongoose.model("Bike")

module.exports = {
    newBike: (req, res) => {
        let newBike = new Bike(req.body)
        newBike.save(err => {
            if (err){
                res.status(400).json(err)
                console.log("API saving new bike");
            } else {
                console.log("Added a new bike called", req.body.name)
                res.status(200).json("All OK");
            }
        })
    },
    getBikes: () => {},

}