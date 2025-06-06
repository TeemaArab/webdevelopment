const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'))

app.get('/', (req, res) => {
  res.render('home.ejs');
});

app.get('/cats',(req, res) => {
  const cats = ['Milo', 'Otis', 'Garfield'];
  res.render('cats', { cats });
});

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  res.render('subreddit', { subreddit });
});

app.get('/rand', (req, res) => {
  const number = Math.floor(Math.random() * 10) + 1;
 res.render('random',{rand:number})
});



app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});