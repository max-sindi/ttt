import mongoose from "mongoose"

mongoose.connect('mongodb://localhost/4friends', {useNewUrlParser: true})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('Mongodb Connected successefully'))
