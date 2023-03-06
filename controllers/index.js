const {
  sendEmail,
  sendAppliance,
  sendShortlist,
} = require('../services/email');
const fs = require('fs');
const path = require('path');

exports.handleUpload = (req, res) => {
  if (req.file.mimetype !== 'application/pdf') {
    fs.unlinkSync(path.join(__dirname, '..', req.file.path));
    return res.status(400).json({ error: 'File type not supported' });
  }
  res.json(req.file.filename );
};

exports.contact = async (req, res) => {
  try {
    const { email, subject, message } = req.body;
    console.log(req.body);

    await sendEmail(email, message, subject);

    res.status(200).json({
      message,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.apply = async (req, res) => {
  try {
    const { email, subject, message, attachment } = req.body;

    await sendAppliance(email, message, subject, attachment);

    res.status(200).json({
      message,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.shortlist = async (req, res) => {
  try {
    const { email, message } = req.body;

    await sendShortlist(email, message);

    res.status(200).json({
      message,
    });
  } catch (error) {
    console.log(error.message);
  }
};
