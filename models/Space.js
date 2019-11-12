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

// replace all '_id' with 'id'
scheme.options.toJSON = {
  transform: function(doc, ret) {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
  }
}


export default mongoose.model('Space', scheme)