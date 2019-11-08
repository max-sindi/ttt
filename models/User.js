import * as mongoose from "mongoose"
const {ObjectId} = mongoose.Schema.Types


const scheme = new mongoose.Schema({
  address:          {type: String, min: 2, max: 50},
  cardEndingDate:   {tyle: String},
  email:            {type: String},
  phone:            {type: String},
  moderators:       {type: [ObjectId], ref: 'User'},
  spaces:           {type: [ObjectId], ref: 'Space'},
  role:             {type: String},
  name:             {type: String},
  organization:     {type: String},
  country:          {type: String},
  avatar:           {type: String},
  payment:          {type: Object},


  // country: allRules.country.required(),
  // language: allRules.language.required(),
  // organization: allRules.organization.required(),
  // fullName: allRules.fullName.required(),
  // phone: allRules.phone.required(),
  // email: allRules.email.required(),
  // password: allRules.password.required(),
  // nameOnCard: allRules.nameOnCard.required(),
  // cardNumber: allRules.cardNumber.required(),
  // cvc: allRules.cvc.required(),
  // cardEndingDate: allRules.cardEndingDate.required(),
  // billingCountry: allRules.country.required(),
  // billingAddress: allRules.address.required(),
  // billingCity: allRules.city.required(),
  // bollingZipCode: allRules.zipCode.required(),
})

export default mongoose.model('User', scheme)