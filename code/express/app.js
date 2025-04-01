import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
// Define __dirname manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/todos', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'data.json'));
});


app.get('/todos', (req, res) => {
    fs.readFile(path.join(__dirname, 'public', 'data.json'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to read data' });
            return;
        }
        let todos = JSON.parse(data);
        if (req.query.userId) {
            todos = todos.filter(todo => todo.userId == req.query.userId);
        }
        res.json(todos);
    });
});
app.use(express.json());

app.put('/todos/:id', (req, res) => {
    fs.readFile(path.join(__dirname, 'public', 'data.json'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to read data' });
            return;
        }
        let todos = JSON.parse(data);
        let todo = todos.find(t => t.id == req.params.id);
        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }

        todo.completed = !todo.completed; // Toggle completed status

        fs.writeFile(path.join(__dirname, 'public', 'data.json'), JSON.stringify(todos, null, 2), err => {
            if (err) {
                res.status(500).json({ error: 'Failed to update data' });
                return;
            }
            res.json(todo);
        });
    });
});





const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
