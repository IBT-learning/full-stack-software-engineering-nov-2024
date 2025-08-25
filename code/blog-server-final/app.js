const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 4000;

// Middleware to serve static files (your existing HTML, CSS, JS)
app.use(express.static('public'));

// Middleware to parse JSON bodies
app.use(express.json());

// Helper function to read JSON files
function readJSONFile(filename) {
    try {
        const filePath = path.join(__dirname, 'public', filename);
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error reading ${filename}:`, error);
        return null;
    }
}

// API ENDPOINTS - Replace jsonplaceholder endpoints

// GET /posts - Get all posts
app.get('/posts', (req, res) => {
    try {
        const posts = readJSONFile('posts.json');
        if (!posts) {
            return res.status(500).json({ error: 'Failed to load posts' });
        }
        
        // Support query parameters like jsonplaceholder
        const { userId } = req.query;
        
        let filteredPosts = posts;
        if (userId) {
            filteredPosts = posts.filter(post => post.userId == userId);
        }
        
        res.json(filteredPosts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
});

// GET /posts/:id - Get specific post by ID
app.get('/posts/:id', (req, res) => {
    try {
        const posts = readJSONFile('posts.json');
        if (!posts) {
            return res.status(500).json({ error: 'Failed to load posts' });
        }
        
        const postId = parseInt(req.params.id);
        const post = posts.find(p => p.id === postId);
        
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        
        res.json(post);
    } catch (error) {
        console.error('Error fetching post:', error);
        res.status(500).json({ error: 'Failed to fetch post' });
    }
});

// GET /users - Get all users
app.get('/users', (req, res) => {
    try {
        const users = readJSONFile('users.json');
        if (!users) {
            return res.status(500).json({ error: 'Failed to load users' });
        }
        
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

// GET /users/:id - Get specific user by ID
app.get('/users/:id', (req, res) => {
    try {
        const users = readJSONFile('users.json');
        if (!users) {
            return res.status(500).json({ error: 'Failed to load users' });
        }
        
        const userId = parseInt(req.params.id);
        const user = users.find(u => u.id === userId);
        
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        
        res.json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ error: 'Failed to fetch user' });
    }
});

// POST /posts - Create new post (optional extra feature)
app.post('/posts', (req, res) => {
    try {
        const posts = readJSONFile('posts.json');
        if (!posts) {
            return res.status(500).json({ error: 'Failed to load posts' });
        }
        
        const { userId, title, body, image } = req.body;
        
        // Validate required fields
        if (!userId || !title || !body) {
            return res.status(400).json({ error: 'userId, title, and body are required' });
        }
        
        // Create new post with auto-incrementing ID
        const newPost = {
            id: Math.max(...posts.map(p => p.id)) + 1,
            userId: parseInt(userId),
            title,
            body,
            image: image || null
        };
        
        posts.push(newPost);
        
        // Write back to file
        const filePath = path.join(__dirname, 'public', 'posts.json');
        fs.writeFileSync(filePath, JSON.stringify(posts, null, 2));
        
        res.status(201).json(newPost);
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ error: 'Failed to create post' });
    }
});

// Root route - serves your main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: 'Blog server is running',
        timestamp: new Date().toISOString()
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({ error: 'Internal server error' });
});

// 404 handler for API routes
app.use('/api', (req, res) => {
    res.status(404).json({ error: 'API endpoint not found' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Blog Server running on http://localhost:${PORT}`);
    console.log('📁 Serving static files from the "public" directory');
    console.log('📝 API endpoints available:');
    console.log('   GET  /posts           - Get all posts');
    console.log('   GET  /posts/:id       - Get post by ID');
    console.log('   GET  /posts?userId=1  - Get posts by user');
    console.log('   GET  /users           - Get all users');
    console.log('   GET  /users/:id       - Get user by ID');
    console.log('   POST /posts           - Create new post');
    console.log('   GET  /health          - Health check');
    console.log('');
    console.log('🌐 Visit http://localhost:4000/ to see your blog!');
});