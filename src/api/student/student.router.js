'use strict';
const studentRouter = require('express').Router();

studentRouter
    .get('/', (req, res) => { 
        res.json({
            msg: "Hello"
        })
    })
    .get('/report/:id', (req, res) => {
        res.json({
            msg:"report"
        })
    })


module.exports = studentRouter