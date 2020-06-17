const router = require('express').Router();
const path = require('path');
const fsPromises = require('fs').promises;

const cardsArray = path.join(__dirname, '../data/cards.json');
const getCards = async () => JSON.parse(await fsPromises.readFile(cardsArray, { encoding: 'utf8' }));

router.get('/', async (req, res, next) => {
  try {
    res.send(await getCards());
  } catch (err) {
    res.status(500).send({
      message: 'Произошла ошибка при загрузке карточек',
      error: err.toString(),
    });
  }
  next();
});

module.exports = router;
