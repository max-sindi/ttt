import * as usersController from "./controllers/user"
// import sendResponse from './middlewares/sendResponse'
// import checkToken from "./middlewares/checkToken"
import * as authController from './controllers/auth'


const checkToken = (a, b, n) => n()

const router = require('express-promise-router')()

module.exports = (app) => {
  router.get('/api/', function(req, res, next) {
    res.status(200).json({ok: true, message: 'Successful life-check'})
  })

  /* AUTH */
  router.post('/api/auth/login', authController.login)


  /* USERS */
  router.get('/api/account', checkToken, usersController.getMany)
  router.get('/api/account/:id', checkToken, usersController.getById)
  router.post('/api/account/', checkToken, usersController.create)
  router.put('/api/account/:id', checkToken, usersController.update)
  router.delete('/api/account/:id', checkToken, usersController.destroy)


  /* USE ROUTER */
  app.use('/', router)
}
