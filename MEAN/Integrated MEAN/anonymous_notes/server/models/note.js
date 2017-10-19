const mongoose = require("mongoose")

const NoteSchema = mongoose.Schema({
	note: String,
}, {timestamps: true})

mongoose.model("Note", NoteSchema)