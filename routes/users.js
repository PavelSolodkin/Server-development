const { Router } = require('express');
const path = require('path');
const contents = require('../data/users.json');

const router = Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../data/users.json'));
});

router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  // eslint-disable-next-line no-underscore-dangle
  const user = contents.find((item) => item._id === id);
  if (!user) {
    res.status(404).send({
      message: 'Нет пользователя с таким id',
    });
    return;
  }
  res.send(user);
});

module.exports = router;
