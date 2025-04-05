import express from 'express';

const app = express();

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});

app.get('/', (req, res) => {
    res.send('<h1>Welcome to My Page</h1>');
});

app.get('/about', (req, res) => {
    res.send('I am a junior web developer based in Nairobi, Kenya.');
});

app.get('/greet/:userName', (req, res) => {
    const { userName } = req.params;
    res.send(`<h1>Hello, ${userName}!</h1>`);
});

app.get('/favorite', (req, res) => {
    const fave = req.query.fave;
    if (fave) {
        res.send(`My favorite thing is ${fave}`);
    } else {
        res.send('My favorite thing is cycling.');
    }
});
