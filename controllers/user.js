import User from "../models/User"
import yup from 'yup'

const scheme = yup.object().keys({
  email:            yup.string().email(),
  phone:            yup.string(),
  moderators:       yup.array(),
  role:             yup.string(),
  spaces:           yup.array(),
  name:             yup.string(),
  organization:     yup.string(),
  country:          yup.string(),
  avatar:           yup.string(),
  payment:          yup.string(),
})

export const create = async (request, response) => {

}