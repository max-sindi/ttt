import * as mongoose from "mongoose"

const scheme = new mongoose.Schema({
  name:         {type: String, required: true},
  maxSpaces:    {type: Number, required: false}, // if undefined so 'unlimited'
  maxFriends:   {type: Number, required: false}, // if undefined so 'unlimited'
  cost:         {type: Number, required: true},
  isBestseller: {type: Boolean, required: false },
})

export default mongoose.model('Price', scheme)