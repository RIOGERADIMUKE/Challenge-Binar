const express = require('express');
const path = require('path')

const app = express()

// PORT with the default 3000
const PORT = process.env.PORT || 2005;

// Path in PUBLIC Directory
app.use(express.static(path.join(__dirname, 'public')));

// Set View Engine
app.set('view engine', 'ejs');

// GET Index
app.get('/', (req, res) => {
  res.render('index');
});

// Update Index
app.get('/create', (req, res) => {
  res.render('create');
});

// Update Index
app.get('/edit', (req, res) => {
  res.render('edit');
});


// Listening to PORT
app.listen(PORT, () => {
    console.log(`Server nyala di http://localhost:${PORT}`);
  });