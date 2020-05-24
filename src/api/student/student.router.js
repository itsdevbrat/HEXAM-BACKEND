'use strict';
const studentRouter = require('express').Router()
    , studentController = require('./student.controller')
    , path = require('path')
    , multer = require('multer');

let storage = multer.diskStorage({
    destination: path.join(__dirname, '/../../../public/uploads'),
    filename: (req, file, callback) => {
        callback(null, Date.now() + file.originalname);
    }
});

let upload = multer({ storage: storage })


studentRouter
    .get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../../../public/html/create_student.html'))
    })
    .post('/', upload.single('image'), async (req, res) => {
        try {
            const result = await studentController.insert({ name: req.body.name, email: req.body.email, filename: req.file.filename })
            res.json(result)
        } catch (error) {
            res.sendStatus(404)
        }
    })
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
            const result = await studentController.getReport({ email: req.params.email })
            res.json(result)
        } catch (error) {
            res.sendStatus(404)
        }
    })
    .put('/report/:testid', async (req, res) => {
        console.log(req.body)
        try {
            const result = await studentController.updateReport({ faceSuspicion: req.body.faceSuspicion, eyeSuspicion: req.body.eyeSuspicion, tabSwitches: req.body.tabSwitches, email: req.body.studentEmail, testId: req.params.testid })
            res.json(result)
        } catch (error) {
            res.sendStatus(404)
        }
    })
    .get('/:email', async (req, res) => {
        try {
            const result = await studentController.fetch({ email: req.params.email })
            res.json(result)
        } catch (error) {
            res.sendStatus(404)
        }
    })


module.exports = studentRouter