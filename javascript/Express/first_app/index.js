const express = require('express');
const app = express();  // to exexcute the express


// app.use((req, res) => {
//     console.log('we got a new request');
//     // res.send('Hello, we got your request. This is the response from the server.');
//     res.send({
//         color: "red",
//         number: 123,
//     })
// });

// route for home page
app.get('/', (req, res) => {
    res.send('Hello, this is the home page!!!');
});

app.get('/r/:subreddit', (req, res) => {
    const {subreddit}= req.params;
    res.send(`Welcome to the ${subreddit} subreddit`);
});
app.get('/r/:subreddit/:postId', (req, res) => {
    const {subreddit, postId}= req.params;
    res.send(`Viewing Post Id: ${postId} on the ${subreddit}subreddit`);
});

// routing
app.get('/cats',(req,res) =>{
    res.send('Meow');
});
// adding another route
app.get('/dogs',(req,res) =>{
    res.send('Woof');
});


app.get('/search',(req,res) =>{
    console.log(req.query);
    res.send('hi')
})

// route with post
app.post('/cats',(req,res) =>{
    res.send('Post request to /cats received');
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
