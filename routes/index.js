const express = require('express');
const router = express.Router();
const { contact, apply, shortlist, handleUpload } = require('../controllers');
const upload = require('../services/upload');

router.post('/contact', contact);
router.post('/apply', apply);
router.post('/upload', upload.single('file'), handleUpload);
router.post('/shortlist', shortlist);

module.exports = router;
