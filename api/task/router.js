// build your `/api/tasks` router here
const router = require('express').Router()
const Task = require('./model')

router.get('/', (req, res, next) => {
    Task.getTasks()
      .then((tasks) => {
        res.status(200).json(tasks);
      })
      .catch(next);
  });

router.use('/', (req, res) => {
    res.json({ api: "Up and running in tasks" })
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'Something went wrong in tasks router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router