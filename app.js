const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const app = express();
const routes = require('./routes');

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

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
