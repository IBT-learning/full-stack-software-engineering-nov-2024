// Test script to demonstrate API usage
// Run this with Node.js after starting your server

const baseURL = 'http://localhost:5000/api';

// Store tokens for different users
let henryToken = '';
let otherUserToken = '';
let recipeId = '';

// Test User Data
const henryUser = {
  name: 'Henry Ogun',
  email: 'henry@soundmaster.com',
  password: 'password123'
};

const otherUser = {
  name: 'Ayo Ogun',
  email: 'ayo@soundmaster.com',
  password: 'password456'
};

// Helper function for API calls
async function makeRequest(endpoint, method = 'GET', body = null, token = null) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  if (body) {
    options.body = JSON.stringify(body);
  }
  
  if (token) {
    options.headers['Authorization'] = `Bearer ${token}`;
  }
  
  const response = await fetch(`${baseURL}${endpoint}`, options);
  const data = await response.json();
  
  console.log(`${method} ${endpoint}:`, data);
  return data;
}

// Run tests
async function runTests() {
  try {
    console.log('=== STARTING API TESTS ===\n');
    
    // 1. Register Henry (or login if already exists)
    console.log('1. Registering Henry Ogun...');
    const henryReg = await makeRequest('/users/register', 'POST', henryUser);
    if (henryReg.token) {
      henryToken = henryReg.token;
    } else {
      // If registration fails, try login
      console.log('Registration failed, trying login...');
      const loginData = await makeRequest('/users/login', 'POST', {
        email: henryUser.email,
        password: henryUser.password
      });
      henryToken = loginData.token;
    }
    
    // 2. Register another user (or login if already exists)
    console.log('\n2. Registering Ayo Ogun...');
    const otherReg = await makeRequest('/users/register', 'POST', otherUser);
    if (otherReg.token) {
      otherUserToken = otherReg.token;
    } else {
      // If registration fails, try login
      console.log('Registration failed, trying login...');
      const loginData = await makeRequest('/users/login', 'POST', {
        email: otherUser.email,
        password: otherUser.password
      });
      otherUserToken = loginData.token;
    }
    
    // 3. Login test for Henry (already done above if needed)
    console.log('\n3. Testing login for Henry...');
    const loginData = await makeRequest('/users/login', 'POST', {
      email: henryUser.email,
      password: henryUser.password
    });
    
    // 4. Henry creates a recipe
    console.log('\n4. Henry creating a recipe...');
    const henryRecipe = await makeRequest('/recipes', 'POST', {
      title: 'Nigerian Jollof Rice',
      ingredients: ['Rice', 'Tomatoes', 'Onions', 'Pepper', 'Chicken stock'],
      instructions: 'Blend tomatoes and pepper. Fry with onions. Add rice and stock. Cook until tender.',
      prepTime: 20,
      cookTime: 40,
      servings: 6,
      category: 'main'
    }, henryToken);
    recipeId = henryRecipe.recipe._id;
    
    // 5. Ayo creates a recipe
    console.log('\n5. Ayo creating a recipe...');
    await makeRequest('/recipes', 'POST', {
      title: 'Chocolate Cake',
      ingredients: ['Flour', 'Sugar', 'Cocoa', 'Eggs', 'Butter'],
      instructions: 'Mix dry ingredients. Add wet ingredients. Bake at 350°F for 30 minutes.',
      prepTime: 15,
      cookTime: 30,
      servings: 8,
      category: 'dessert'
    }, otherUserToken);
    
    // 6. Get all recipes (public access)
    console.log('\n6. Getting all recipes (public access)...');
    await makeRequest('/recipes');
    
    // 7. Henry tries to update his own recipe (should succeed)
    console.log('\n7. Henry updating his own recipe...');
    await makeRequest(`/recipes/${recipeId}`, 'PUT', {
      title: 'Nigerian Jollof Rice - Updated',
      servings: 8
    }, henryToken);
    
    // 8. Ayo tries to update Henry's recipe (should fail with 403)
    console.log('\n8. Ayo trying to update Henry\'s recipe (should fail)...');
    await makeRequest(`/recipes/${recipeId}`, 'PUT', {
      title: 'Hacked Recipe'
    }, otherUserToken);
    
    // 9. Get Henry's recipes
    console.log('\n9. Getting all recipes created by Henry...');
    await makeRequest('/recipes/my-recipes', 'GET', null, henryToken);
    
    // 10. Try to create recipe without authentication (should fail)
    console.log('\n10. Trying to create recipe without authentication (should fail)...');
    await makeRequest('/recipes', 'POST', {
      title: 'Unauthorized Recipe',
      ingredients: ['Nothing'],
      instructions: 'This should not work'
    });
    
    console.log('\n=== TESTS COMPLETED ===');
    
  } catch (error) {
    console.error('Test error:', error);
  }
}

// Run the tests
runTests();