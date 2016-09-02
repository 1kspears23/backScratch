const express = require('express');
const Task = require('../../models/task');

const router = express.Router(); // eslint-disable-line new-cap

router.get('/', (req, res, next) => {
  Task.getAllTasks()
    .then(tasks => {
      res.json(tasks);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  const newTask = req.body;
  Task.createTask(newTask)
    .then((createdTask) => {
      res.json(createdTask);
    })
    .catch(next);
});

// router.get('/:userid?userid=id', (req, res, next) => {
//   const userId = req.query.userid;
//   res.send(userId);
// });

router.get('/:id', (req, res, next) => {
  const id = req.params.id;

  res.json({ id });
});

router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  res.json({ id });
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  Task.deleteTaskById(id)
    .then(() => {
      res.send('task deleted');
    })
    .catch(next);
});

module.exports = router;
