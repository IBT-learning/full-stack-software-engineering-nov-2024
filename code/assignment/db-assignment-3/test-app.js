// test-app.js
import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();
const JWT_SECRET = 'secret123';
const PORT = 4002;

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

app.get('/generate-test-token', (req, res) => {
    const payload = { test: 'data' };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
    console.log("Minimal Test Token:", token);
    res.json({ token });
});

app.get('/protected', authMiddleware, (req, res) => {
    res.json({ message: 'Protected route accessed', user: req.user });
});

app.listen(PORT, () => {
    console.log(`Minimal test server running on port ${PORT}`);
});