// Import required modules
const express = require('express');
const path = require('path');

// Create Express app
const app = express();
const PORT = 4000;

// Middleware to serve static files from the public directory
app.use(express.static('public'));

// Parse JSON bodies and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route: Home endpoint
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route: About endpoint
app.get('/about', (req, res) => {
    res.send('This is a dark/light mode app with cookie persistence, built with Express.js.');
});

// Route: Greet endpoint with URL parameter
app.get('/greet/:userName', (req, res) => {
    const { userName } = req.params;
    res.send(`Hello, ${userName}! Welcome to the theme switcher app.`);
});

// Route: Save preference as cookie
app.get('/api/preference', (req, res) => {
    try {
        // Get all query parameters
        const preferences = req.query;
        
        if (Object.keys(preferences).length === 0) {
            return res.status(400).json({ error: 'No preferences provided' });
        }
        
        // Set cookies for each preference
        Object.entries(preferences).forEach(([key, value]) => {
            // Set cookie with options
            res.cookie(key, value, {
                maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
                httpOnly: false, // Allow client-side access
                secure: false, // Set to true in production with HTTPS
                sameSite: 'lax'
            });
        });
        
        res.json({ 
            success: true, 
            message: 'Preferences saved',
            preferences: preferences
        });
        
    } catch (error) {
        console.error('Error saving preferences:', error);
        res.status(500).json({ error: 'Failed to save preferences' });
    }
});

// Route: Get current preferences (read cookies)
app.get('/api/preferences', (req, res) => {
    try {
        const preferences = {
            mode: req.cookies?.mode || 'light',
            customBg: req.cookies?.customBg || null,
            customText: req.cookies?.customText || null
        };
        
        res.json(preferences);
    } catch (error) {
        console.error('Error reading preferences:', error);
        res.status(500).json({ error: 'Failed to read preferences' });
    }
});

// Route: Reset all preferences (clear cookies)
app.get('/api/reset-preferences', (req, res) => {
    try {
        // Clear all theme-related cookies
        const cookiesToClear = ['mode', 'customBg', 'customText'];
        
        cookiesToClear.forEach(cookieName => {
            res.clearCookie(cookieName);
        });
        
        res.json({ 
            success: true, 
            message: 'All preferences reset successfully' 
        });
        
    } catch (error) {
        console.error('Error resetting preferences:', error);
        res.status(500).json({ error: 'Failed to reset preferences' });
    }
});

// Route: Alternative preference saving using URL parameters
app.get('/api/theme/:mode', (req, res) => {
    try {
        const { mode } = req.params;
        
        if (!['light', 'dark', 'custom'].includes(mode)) {
            return res.status(400).json({ error: 'Invalid mode. Use light, dark, or custom' });
        }
        
        res.cookie('mode', mode, {
            maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
            httpOnly: false,
            secure: false,
            sameSite: 'lax'
        });
        
        res.json({ 
            success: true, 
            message: `Theme set to ${mode}`,
            mode: mode
        });
        
    } catch (error) {
        console.error('Error setting theme:', error);
        res.status(500).json({ error: 'Failed to set theme' });
    }
});

// Route: Debug endpoint to see all cookies
app.get('/api/debug/cookies', (req, res) => {
    res.json({
        cookies: req.cookies || {},
        headers: req.headers.cookie || 'No cookies found'
    });
});

// Add cookie parser middleware (install with: npm install cookie-parser)
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({ error: 'Internal server error' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🌟 Theme Switcher Server is running on http://localhost:${PORT}`);
    console.log('📱 Visit the home page to use the dark/light mode app!');
    console.log('🍪 Cookies will persist your theme preferences');
    console.log('');
    console.log('Available endpoints:');
    console.log(`  🏠 GET  /                           - Home page with theme switcher`);
    console.log(`  ℹ️  GET  /about                      - About page`);
    console.log(`  👋 GET  /greet/:userName             - Personalized greeting`);
    console.log(`  💾 GET  /api/preference?key=value    - Save preference as cookie`);
    console.log(`  📖 GET  /api/preferences             - Read current preferences`);
    console.log(`  🔄 GET  /api/reset-preferences       - Reset all preferences`);
    console.log(`  🎨 GET  /api/theme/:mode             - Set theme mode (light/dark/custom)`);
    console.log(`  🐛 GET  /api/debug/cookies           - Debug: view all cookies`);
});