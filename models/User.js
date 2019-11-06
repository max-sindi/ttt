import * as mongoose from "mongoose"
const {ObjectId} = mongoose.Schema.Types


const scheme = new mongoose.Schema({
  email:            { type: String },
  phone:            { type: String },
  moderators:       { type: [ObjectId], ref: 'User' },
  spaces:           { type: [ObjectId], ref: 'Space' },
  role:             { type: String },
  name:             { type: String },
  organization:     { type: String },
  country:          { type: String },
  avatar:           { type: String },
  payment:          { type: Object },
})

export default mongoose.model('User', scheme)