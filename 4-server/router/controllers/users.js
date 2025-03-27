import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the API!');
})

router.post('/', (req, res) => {
    res.send('Welcome to the Post API!');
})

export default router;
