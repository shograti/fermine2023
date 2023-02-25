const express = require('express');
const router = express.Router();
const { contact, apply, shortlist } = require('../controllers/contact');
const upload = require ('../services/upload')

router.post('/contact', contact);
router.post('/apply', apply);
router.post('/upload', upload.single('file'), (req, res, next) => {
  const file = req.file;
  try {
    res.status(200).json(file.filename);
  } catch (error) {
    console.log(error);
  }
});

router.post('/shortlist', shortlist)
module.exports = router;
