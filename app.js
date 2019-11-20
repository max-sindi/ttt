import './db'
require('dotenv').config()
const connect = require('connect')
const vhost = require('vhost')
const express = require('express')
const cors = require('cors')()
const cookieParser = require('cookie-parser')()

const morgan = require('morgan')('dev', {
  skip: (req, res) => req.path === '/json' // skip nodejs debug inspector spam
})

const isProd = process.env.NODE_ENV === 'production'

const subdomainApp = express()
const app = express()

subdomainApp.get('', (req, res) => {
  console.log('request', req.vhost)
  res.json('Dragabannnn harosh!!!')
})

function main() {
  app.use( express.static(require('path').join(__dirname, 'public')) )
  app.use(morgan) // logger
  app.use(express.json())
  app.use(express.urlencoded({extended: false}))
  app.use(cookieParser)
  app.use(cors) // @TODO: do we need cors in prod?

  // before api-declaring errorHandler
  app.use((err, request, response, next) => {
    console.log('Error before api declaring: ', err.message)
  })

  // subdomains for future
  app.use(vhost('*.localhost', subdomainApp)) // @TODO: dynamically declare localhost or prod domain?

  require('./routes')(app)

  app.use((err, request, response, next) => {
    console.log('Error in response:', err)
    response.json(err)
  })

  console.log('🚀 server ran at port 8000')
}


main()

module.exports = app