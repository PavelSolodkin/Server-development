const { Router } = require('express');
const path = require('path');

const router = Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../data/cards.json'));
});

module.exports = router;
