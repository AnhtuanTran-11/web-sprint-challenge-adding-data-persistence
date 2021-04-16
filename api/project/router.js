const router = require('express').Router();
const Project = require('./model');

router.get('/', (req, res, next) => {
  Project.getProjects()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  const project = req.body
  Project.add(project)
  .then(project => {
    res.status(201).json(project)
  })
  .catch(next)
})

router.use('/', (req, res) => {
  res.json({ api: 'Up and running in project' });
});

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    customMessage: 'Something went wrong in projects router',
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;