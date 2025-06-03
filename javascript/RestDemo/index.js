const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
  { username: 'Todd', comment: 'This is my first comment!' },
  { username: 'Skyler', comment: 'I love tacos!' },
  { username: 'Walter', comment: 'I am the one who knocks!' },
  { username: 'Jesse', comment: 'Yeah science!' }
]

app.get('/comments', (req, res) => {
  res.render('comments/index', { comments });
});

app.get('/comments/new', (req, res) => {
  res.render('comments/new');
});

app.post('/comments', (req, res) => {
  const {username, comment} = req.body;
  comments.push({ username, comment });
  res.send('It worked!');
})

/////////////////////////////////////
app.get('/tacos', (req, res) => {
  res.send('GET /tacos response');
});



app.post('/tacos', (req, res) => {
    console.log(req.body);
  res.send('POST /tacos response');
});



 app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});