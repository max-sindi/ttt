import * as mongoose from "mongoose"
const {ObjectId} = mongoose.Schema.Types

const scheme = new mongoose.Schema({
  name:             { type: String },
  pictures:         { type: [String] },
  cover:            { type: String },
  video:            { type: String },
  title:            { type: String },
  description:      { type: String },
  blog:             { type: ObjectId},
  contactInfo:      { type: Object },
  testimonials:     { type: [ObjectId], ref: 'Comment'},
  template:         { type: String },
})

export default mongoose.model('Space', scheme)