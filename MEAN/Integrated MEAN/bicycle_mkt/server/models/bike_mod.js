const mongoose = require("mongoose")

const Schema = mongoose.Schema

const BikeSchema = new mongoose.Schema({
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    name: {type: String, required: true},
    desc: {type: String, required: true},
    city: {type: String, required: true},
    img: {type: String, required: true},
    price: {type: Number, required: true},
}, {timestamps: true})

mongoose.model("Bike", BikeSchema)

