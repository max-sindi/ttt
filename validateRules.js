import languages from './utils/languages'
import {string, boolean} from 'yup'


const allRules = {
  address:        string().trim().min(2).max(50),
  country:        string().trim().min(2).max(30).matches(/^[a-z\-]{2,30}$/i),
  city:           string().trim().min(2).max(50).matches(/^[a-z\-]{2,30}$/i),
  zipCode:        string().trim().length(5).matches(/^[a-z]{5}$/),
  organization:   string().trim().min(2).max(30).matches(/^[a-z0-9]{2,30}$/i),
  fullName:       string().trim().min(2).max(30).matches(/^[a-z0-9]{2,30}$/i),
  phone:          string().trim().length(11).matches(/^[0-9]{11}$/),
  email:          string().trim().email(),
  password:       string().trim().min(4).max(24).matches(/^[.]{4,24}$/),
  nameOnCard:     string().trim().min(2).max(30).matches(/^[a-z\-]{2,30}$/i),
  cardNumber:     string().trim().length(16).matches(/^[0-9]{16}$/), // TODO: spaces ?
  cvc:            string().trim().length(3).matches(/^[0-9]{3}$/),
  cardEndingDate: string().trim().length(5).matches(/^[0-9]{2}[\-][0-9]{2}$/),
  language:       string().trim().oneOf(Object.keys(languages)), // TODO: or mixed
  paymentAmount:  string().trim().oneOf(['40', '60']),
  agreement:      boolean(),
}

const adminRegister = {
  country: allRules.country.required(),
  language: allRules.language.required(),
  organization: allRules.organization.required(),
  fullName: allRules.fullName.required(),
  phone: allRules.phone.required(),
  email: allRules.email.required(),
  password: allRules.password.required(),
  nameOnCard: allRules.nameOnCard.required(),
  cardNumber: allRules.cardNumber.required(),
  cvc: allRules.cvc.required(),
  cardEndingDate: allRules.cardEndingDate.required(),
  billingCountry: allRules.country.required(),
  billingAddress: allRules.address.required(),
  billingCity: allRules.city.required(),
  bollingZipCode: allRules.zipCode.required(),
  // pricePlan // @TODO
}
const moderatorRegister = {
  country: allRules.country,
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