const mongoose = require('mongoose')
const Note = mongoose.model('Note')

// const notes = [{note: 'Hello, world!', createdAt: new Date()}, {note: 'Sweeeet!', createdAt: new Date()}]

module.exports = {
    get_all: (req, res) => {
        Note.find({})
            .then(notes => res.json(notes))
            .catch(err => {
                console.log('Note.find error', err);
                res.status(500).json(err)
            })
    },

    create: (req, res) => {
        let new_note = new Note(req.body)
        new_note.save()
            .then(() => {
                res.json(true)
            })
            .catch(err => {
                console.log('Note.create error', err);
                res.status(500).json(err)
            })

        // notes.push({note: req.body.noteText, createdAt: new Date()})
        // res.json(true)
    }
}