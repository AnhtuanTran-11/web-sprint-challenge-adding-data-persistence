// build your `/api/tasks` router here
const router = require('express').Router()

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