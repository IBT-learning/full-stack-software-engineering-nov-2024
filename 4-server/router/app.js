import express from 'express';
import booksRouter from './controllers/books.js'
import usersRouter from './controllers/users.js'
import authRouter from './controllers/auth.js'


const app = express();
const port = 4000;

app.use("/api", booksRouter);
app.use('/users',usersRouter);
app.use('/auth', authRouter);



// app.post('/auth/register', (req, res) => {
//     res.send('Welcome user');
// })
//
// app.post('/auth/login', (req, res) => {
//     res.send('Welcome you are signeed in!');
// })
//
// app.put('/users', (req, res) => {
//     res.send('Welcome to the PUT API!');
// })
//
// app.delete('/users', (req, res) => {
//     res.send('Welcome to the Delete API!');
// })


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})