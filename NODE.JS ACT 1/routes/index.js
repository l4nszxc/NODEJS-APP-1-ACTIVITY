const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'HERNANDEZ, Lans Lorence N.' });
});

module.exports = router;
