import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the API!');
})

router.post('/', (req, res) => {
    res.send('Welcome to the Post API!');
})

router.put('/', (req, res) => {
    res.send('Welcome to the PUT API!');
})

router.delete('/', (req, res) => {
    res.send('Welcome to the Delete API!');
})

export default router;