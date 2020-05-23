'use strict';
const apiRouter = require('express').Router()
    , studentRouter = require('./student/student.router')
    , teacherRouter = require('./teacher/teacher.router')
    , testRouter = require('./test/test.router');

apiRouter.use('/student', studentRouter);
apiRouter.use('/teacher', teacherRouter);
apiRouter.use('/test', testRouter);

apiRouter.use('*', (req, res) => {
    res.status(404)
    res.send("Resource not found")
})

module.exports = apiRouter;