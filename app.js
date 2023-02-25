const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;
const cors = require('cors');
const morgan = require('morgan');
const contact = require('./routes/contact');
const path = require("path");
const app = express();

app.use(morgan('dev'));
app.use(
  cors({
    origin: '*',
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.use('/api', contact);



app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
