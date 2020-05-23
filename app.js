'use strict';

const express = require('express')
    , bodyParser = require('body-parser')
    , dotenv = require('dotenv')
    , morgan = require('morgan')
    , helmet = require('helmet')
    , apiRouter = require('./src/api/index');

dotenv.config()

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', express.static('public'))

app.use(morgan('tiny'))

app.use(helmet())

app.use('/api', apiRouter)
app.use('*', (req, res) => {
    res.sendStatus(404)
})

app.listen(process.env.PORT, (err) => { 
    if (!err)
        console.log('success');
})