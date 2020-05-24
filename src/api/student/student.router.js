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
    .put('/report/:testid', async (req, res) => {
        console.log(req.body)
        try {
            const result = await studentController.updateReport({ faceSuspicion: req.body.faceSuspicion, eyeSuspicion: req.body.eyeSuspicion, tabSwitches: req.body.tabSwitches, email: req.body.studentEmail, testId : req.params.testid })
            res.json(result)
        } catch (error) {
            res.sendStatus(404)
        }
    })


module.exports = studentRouter