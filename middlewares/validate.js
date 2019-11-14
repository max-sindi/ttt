import * as yup from 'yup'

export default (validateRules, customValidateFunc) => (req, res, next) => {
  const schema = yup.object().shape(validateRules)
  schema.validate(req.body)
    .then(res => next())
    .catch((...err) => res.status(422).json(err)) // @ todo: disable at prod for secure reason
}