import validateRules from './validateRules'
import validate from './middlewares/validate'
import languages from './utils/languages'
import countries from './utils/countries'
import {handleAdminRegister} from './controllers/auth'
import {fetchPricingPlans} from './controllers/pricing'

const router = require('express-promise-router')()


module.exports = (app) => {
  router.get('/', (req, res) => res.json({successfulLifecheck: true}))

  router.get('/api/', function(req, res) {
    res.status(200).json({ok: true, message: 'Successful life-check'})
  })

  router.get('/api/pricing/', fetchPricingPlans)
  router.get('/api/languages/', (req, res) => console.log('languages', languages) || res.json(languages))
  router.get('/api/countries/', (req, res) => res.json(countries))



  /* AUTH */
  router.post(
    '/api/auth/register/admin',
    validate(validateRules.auth.register.admin),
    handleAdminRegister
  );
  router.post(
    '/api/auth/register/moderator',
    validate(validateRules.auth.register.moderator)
  );
  router.post(
    '/api/auth/register/donator',
    validate(validateRules.auth.register.donator)
  );


  /* USE ROUTER */
  app.use('/', router)
}
