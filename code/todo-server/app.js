// Import required modules
const express = require('express');
const path = require('path');
const fs = require('fs');

// Create Express app
const app = express();
const PORT = 4000;

// Middleware to serve static files from the public directory
app.use(express.static('public'));

// Parse JSON bodies
app.use(express.json());

// Route: Home endpoint
app.get('/', (req, res) => {
    res.send('<h1>Welcome to My To-Do List Server!</h1>');
});

// Route: About endpoint
app.get('/about', (req, res) => {
    res.send('This is a custom to-do list server built with Express.js for learning purposes.');
});

// Route: Greet endpoint with URL parameter
app.get('/greet/:userName', (req, res) => {
    const { userName } = req.params;
    res.send(`Hello, ${userName}! Welcome to the to-do list app.`);
});

// Route: Favorite endpoint with query strings
app.get('/favorite', (req, res) => {
    const queryParams = req.query;
    
    if (Object.keys(queryParams).length === 0) {
        res.send('Please provide your favorites using query parameters!');
        return;
    }
    
    // Handle multiple query parameters
    const favorites = [];
    for (const [key, value] of Object.entries(queryParams)) {
        favorites.push(`My favorite ${key} is ${value}`);
    }
    
    res.send(favorites.join('. ') + '.');
});

// Route: API endpoint to serve todos
app.get('/api/todos', (req, res) => {
    try {
        // Read the JSON file
        const todosPath = path.join(__dirname, 'public', 'todos.json');
        const todosData = fs.readFileSync(todosPath, 'utf8');
        const todos = JSON.parse(todosData);
        
        // Check if userId query parameter is provided
        const userId = req.query.userId;
        
        if (userId) {
            // Filter todos by userId
            const userTodos = todos.filter(todo => todo.userId == userId);
            res.json(userTodos);
        } else {
            // Return all todos if no userId specified
            res.json(todos);
        }
        
    } catch (error) {
        console.error('Error reading todos:', error);
        res.status(500).json({ error: 'Failed to load todos' });
    }
});

// Optional: PUT endpoint to update todo completion status
app.put('/api/todos/:id', (req, res) => {
    try {
        const todoId = parseInt(req.params.id);
        const { completed } = req.body;
        
        // Read current todos
        const todosPath = path.join(__dirname, 'public', 'todos.json');
        const todosData = fs.readFileSync(todosPath, 'utf8');
        const todos = JSON.parse(todosData);
        
        // Find and update the todo
        const todoIndex = todos.findIndex(todo => todo.id === todoId);
        
        if (todoIndex === -1) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        
        todos[todoIndex].completed = completed;
        
        // Write back to file
        fs.writeFileSync(todosPath, JSON.stringify(todos, null, 2));
        
        res.json(todos[todoIndex]);
        
    } catch (error) {
        console.error('Error updating todo:', error);
        res.status(500).json({ error: 'Failed to update todo' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Visit the home page to see your to-do list!');
});