'use strict';
const studentRouter = require('express').Router()
    , studentController = require('./student.controller');

studentRouter
    .get('/all', async (req, res) => { 
        try {
            const result = await studentController.getAll()
            res.json(result)
        } catch (error) {
            res.sendStatus(404)
        }
    })
    .get('/report/:email', async (req, res) => {
        try {
            const result = await studentController.getReport({email: req.params.email})
            res.json(result)
        } catch (error) {
            res.sendStatus(404)
        }
    })


module.exports = studentRouter