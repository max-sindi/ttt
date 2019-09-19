import mongoose from 'mongoose'
const {Schema, model} = mongoose

const userSchema = new Schema({
  email: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
  // password: see below
})
// adds password field
userSchema.plugin(require('mongoose-bcrypt'))

// add id same as _id
userSchema.virtual('id').get(function() {return this._id})
userSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ref) => {
    delete ref.password
  }
})

const Account = model('Account', userSchema)

export default Account
