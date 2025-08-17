import express from 'express';
import mongoose from 'mongoose';
import recipeRoutes from './routes/recipes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection string - replace 'recipes' with your actual database name
const MONGODB_URI = 'mongodb://localhost:27017/recipes';

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Routes
app.use('/recipes', recipeRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Recipe CRUD API!',
    endpoints: {
      'GET /recipes': 'Get all recipes',
      'GET /recipes/:id': 'Get a recipe by ID',
      'POST /recipes': 'Create a new recipe',
      'PUT /recipes/:id': 'Update a recipe by ID',
      'DELETE /recipes/:id': 'Delete a recipe by ID'
    },
    example_recipe: {
      title: 'Chocolate Chip Cookies',
      author: 'Henry Ogun',
      instructions: 'Mix ingredients and bake for 12 minutes at 375°F',
      ingredients: ['2 cups flour', '1 cup butter', '1 cup chocolate chips'],
      servings: 24,
      cookTime: '15 minutes',
      difficulty: 'easy',
      category: 'Dessert'
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    availableRoutes: [
      'GET /',
      'GET /recipes',
      'GET /recipes/:id',
      'POST /recipes',
      'PUT /recipes/:id',
      'DELETE /recipes/:id'
    ]
  });
});

// Global error handler
app.use((error, req, res, next) => {
  console.error('Global error handler:', error);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
  });
});

// Connect to MongoDB
async function connectToDatabase() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB successfully!');
    console.log(`📊 Database: ${mongoose.connection.name}`);
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error.message);
    process.exit(1);
  }
}

// Handle MongoDB connection events
mongoose.connection.on('disconnected', () => {
  console.log('⚠️  MongoDB disconnected');
});

mongoose.connection.on('error', (error) => {
  console.error('❌ MongoDB connection error:', error);
});

// Start server
async function startServer() {
  await connectToDatabase();
  
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📚 API Documentation available at http://localhost:${PORT}`);
  });
}

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down gracefully...');
  await mongoose.connection.close();
  console.log('📊 Database connection closed');
  process.exit(0);
});

// Start the application
startServer().catch(error => {
  console.error('Failed to start server:', error);
  process.exit(1);
});