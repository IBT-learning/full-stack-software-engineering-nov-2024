import express from 'express';

const router = express.Router();

router.get('/login', (req, res) => {
    res.send('you hit the get endpoint');
})

router.post('/register', (req, res) => {
    res.send('you hit the post endpoint');
})


export default router;