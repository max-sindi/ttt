import languages from './utils/languages'
import {string} from 'yup'

// regexp quick guide:
// \d means digits
// ^ at start and $ at end means that we test string on the full match
const validateRules = {
  address:        string().trim().min(2).max(50),
  cardEndingDate: string().trim().length(5).matches(/^\d{2}\/\d{2}$/), // 12/34
  cardNumber:     string().trim().length(16).matches(/^\d{16}$/), // TODO: spaces ?
  city:           string().trim().min(2).max(30).matches(/^[a-z\-]{2,30}$/i),
  country:        string().trim().min(2).max(30).matches(/^[a-z\-]{2,30}$/i),
  cvc:            string().trim().length(3).matches(/^\d{3}$/), // 3 digits
  email:          string().trim().email(),
  fullName:       string().trim().min(2).max(30).matches(/^[a-z0-9]{2,30}$/i),
  language:       string().trim().oneOf(Object.keys(languages)), // TODO: or mixed
  nameOnCard:     string().trim().min(2).max(30).matches(/^[a-z\-]{2,30}$/i),
  organization:   string().trim().min(2).max(30).matches(/^[a-z0-9]{2,30}$/i),
  password:       string().trim().min(4).max(30).matches(/^.{4,24}$/),
  paymentAmount:  string().trim().oneOf(['40', '60']),
  phone:          string().trim().length(11).matches(/^\d{11}$/),
  zipCode:        string().trim().length(5).matches(/^[a-z]{5}$/),
}

const adminRegister = {
  country: validateRules.country.required(),
  language: validateRules.language.required(),
  organization: validateRules.organization.required(),
  fullName: validateRules.fullName.required(),
  phone: validateRules.phone.required(),
  email: validateRules.email.required(),
  password: validateRules.password.required(),
  nameOnCard: validateRules.nameOnCard.required(),
  cardNumber: validateRules.cardNumber.required(),
  cvc: validateRules.cvc.required(),
  cardEndingDate: validateRules.cardEndingDate.required(),
  billingCountry: validateRules.country.required(),
  billingAddress: validateRules.address.required(),
  billingCity: validateRules.city.required(),
  bollingZipCode: validateRules.zipCode.required(),
  // pricePlan // @TODO
}
const moderatorRegister = {
  country: validateRules.country,
}

const donatorRegister = {}


export default {
  auth: {
    register: {
      admin: adminRegister,
      moderator: moderatorRegister,
      donator: donatorRegister,
    }
  }
}