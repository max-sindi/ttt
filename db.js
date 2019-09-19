import mongoose from "mongoose"

mongoose.connect('mongodb+srv://minmax:minty-max@cluster0-dgqwh.mongodb.net/4friends?retryWrites=true&w=majority', {useNewUrlParser: true})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('Mongodb Connected successefully'))
