const express = require('express');
const path = require('path');
const cards = require('./routes/cards');
const users = require('./routes/users');

const { PORT = 3000 } = process.env;

const app = express();

const noUrl = (req, res, next) => {
  if (!res.headersSent) {
    res.status(404).send({
      message: 'Запрашиваемый ресурс не найден',
    });
  }
  next();
};

app.use(express.static(path.join(__dirname, 'public')));
app.use('/cards', cards);
app.use('/users', users);
app.use(noUrl);
app.listen(PORT);
