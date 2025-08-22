// Test script for Blog API
// Run this with: node test-api.js
// Make sure your server is running first: npm run dev

const baseURL = 'http://localhost:4000/api';

// Test users data
const testUsers = [
  {
    email: 'henry@soundmaster.com',
    password: 'password123',
    username: 'henryogun',
    displayName: 'Henry Ogun',
    bio: 'Full-stack developer and tech enthusiast',
    tagline: 'Building the future, one line of code at a time'
  },
  {
    email: 'ayo@soundmaster.com',
    password: 'password123',
    username: 'ayoogun',
    displayName: 'Ayo Ogun',
    bio: 'Creative designer and UI/UX specialist',
    tagline: 'Design is not just what it looks like - design is how it works'
  },
  {
    email: 'demmy@soundmaster.com',
    password: 'password123',
    username: 'demmytech',
    displayName: 'Demmy Tech',
    bio: 'Data scientist and AI researcher',
    tagline: 'Turning data into insights'
  },
  {
    email: 'kenny@soundmaster.com',
    password: 'password123',
    username: 'kennycoder',
    displayName: 'Kenny Coder',
    bio: 'Backend developer specializing in Node.js',
    tagline: 'Server-side solutions architect'
  },
  {
    email: 'jordan@soundmaster.com',
    password: 'password123',
    username: 'jordandev',
    displayName: 'Jordan Dev',
    bio: 'Mobile app developer and startup founder',
    tagline: 'Mobile-first mindset'
  }
];

// Sample blog posts
const samplePosts = [
  {
    title: 'Getting Started with Node.js',
    body: 'Node.js is a powerful JavaScript runtime built on Chrome\'s V8 JavaScript engine. It allows developers to use JavaScript on the server-side, creating scalable network applications. In this post, we\'ll explore the basics of Node.js and how to get started with building your first application. We\'ll cover installation, basic concepts, and create a simple HTTP server.',
    tags: ['nodejs', 'javascript', 'backend'],
    category: 'programming'
  },
  {
    title: 'The Future of Web Design',
    body: 'Web design is constantly evolving, with new trends and technologies emerging every year. From responsive design to progressive web apps, the landscape continues to change. In this article, we explore the latest trends in web design, including dark mode, minimalism, and interactive elements that engage users in meaningful ways.',
    tags: ['webdesign', 'ui', 'trends'],
    category: 'design'
  },
  {
    title: 'Machine Learning Basics',
    body: 'Machine learning is transforming industries and changing how we approach problem-solving. This comprehensive guide covers the fundamentals of machine learning, including supervised and unsupervised learning, neural networks, and practical applications. Whether you\'re a beginner or looking to refresh your knowledge, this post provides valuable insights.',
    tags: ['ml', 'ai', 'datascience'],
    category: 'technology'
  },
  {
    title: 'Building RESTful APIs',
    body: 'REST (Representational State Transfer) is an architectural style for designing networked applications. Building robust RESTful APIs is crucial for modern web development. This guide covers best practices, authentication, error handling, and documentation. We\'ll also explore tools and frameworks that make API development more efficient.',
    tags: ['api', 'rest', 'backend'],
    category: 'programming'
  },
  {
    title: 'Mobile App Development Trends',
    body: 'The mobile app industry continues to grow at an unprecedented pace. With new technologies like 5G, AR/VR, and cross-platform frameworks, developers have more options than ever. This post examines current trends in mobile development, popular frameworks, and predictions for the future of mobile applications.',
    tags: ['mobile', 'apps', 'development'],
    category: 'technology'
  }
];

// Store user tokens
const userTokens = {};
let postIds = [];

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
  
  try {
    const response = await fetch(`${baseURL}${endpoint}`, options);
    const data = await response.json();
    
    console.log(`${method} ${endpoint}:`, response.status, data.message || data.error || 'Success');
    return { status: response.status, data };
  } catch (error) {
    console.error(`Error with ${method} ${endpoint}:`, error.message);
    return { status: 500, data: { error: error.message } };
  }
}

// Test functions
async function registerUsers() {
  console.log('\n=== 1. REGISTERING USERS ===');
  
  for (const user of testUsers) {
    const result = await makeRequest('/auth/register', 'POST', user);
    if (result.data.token) {
      userTokens[user.username] = result.data.token;
      console.log(`✅ ${user.displayName} registered successfully`);
    } else {
      // Try login if user already exists
      const loginResult = await makeRequest('/auth/login', 'POST', {
        email: user.email,
        password: user.password
      });
      if (loginResult.data.token) {
        userTokens[user.username] = loginResult.data.token;
        console.log(`✅ ${user.displayName} logged in successfully`);
      }
    }
  }
}

async function createPosts() {
  console.log('\n=== 2. CREATING BLOG POSTS ===');
  
  const usernames = Object.keys(userTokens);
  
  for (let i = 0; i < samplePosts.length; i++) {
    const post = { ...samplePosts[i] }; // Create a copy
    const username = usernames[i % usernames.length]; // Rotate through users
    const token = userTokens[username];
    
    // Add timestamp to title to make it unique
    const timestamp = Date.now();
    post.title = `${post.title} - ${timestamp}`;
    
    if (token) {
      const result = await makeRequest('/posts', 'POST', post, token);
      if (result.data.post) {
        postIds.push(result.data.post._id);
        console.log(`✅ "${samplePosts[i].title}" created by ${username}`);
      } else {
        console.log(`❌ Failed to create "${samplePosts[i].title}" by ${username}`);
      }
    }
  }
}

async function testGetPosts() {
  console.log('\n=== 3. TESTING GET POSTS ===');
  
  // Get all posts
  const allPosts = await makeRequest('/posts');
  console.log(`📚 Found ${allPosts.data.posts?.length || 0} posts`);
  
  // Get single post
  if (postIds.length > 0) {
    const singlePost = await makeRequest(`/posts/${postIds[0]}`);
    console.log(`📖 Single post: "${singlePost.data.title || 'Not found'}"`);
  }
}

async function testUserProfiles() {
  console.log('\n=== 4. TESTING USER PROFILES ===');
  
  for (const username of Object.keys(userTokens)) {
    const token = userTokens[username];
    
    // Update profile
    await makeRequest('/users/profile', 'PUT', {
      bio: `Updated bio for ${username}`,
      location: 'Lagos, Nigeria'
    }, token);
    
    console.log(`✅ Profile updated for ${username}`);
  }
}

async function testPostOperations() {
  console.log('\n=== 5. TESTING POST OPERATIONS ===');
  
  if (postIds.length > 0 && userTokens.henryogun) {
    const postId = postIds[0];
    const token = userTokens.henryogun;
    
    // Update post
    await makeRequest(`/posts/${postId}`, 'PUT', {
      title: 'Updated: Getting Started with Node.js',
      tags: ['nodejs', 'javascript', 'backend', 'updated']
    }, token);
    
    console.log('✅ Post updated successfully');
  }
}

async function showApiEndpoints() {
  console.log('\n=== 📋 AVAILABLE API ENDPOINTS ===');
  console.log('🔐 Authentication:');
  console.log('  POST /api/auth/register - Register new user');
  console.log('  POST /api/auth/login - Login user');
  console.log('');
  console.log('👤 Users:');
  console.log('  GET /api/users/:userId - Get user profile');
  console.log('  PUT /api/users/profile - Update profile (auth required)');
  console.log('  DELETE /api/users/account - Delete account (auth required)');
  console.log('');
  console.log('📝 Posts:');
  console.log('  GET /api/posts - Get all posts (with pagination)');
  console.log('  GET /api/posts/:id - Get single post');
  console.log('  GET /api/posts/user/:userId - Get posts by user');
  console.log('  POST /api/posts - Create post (auth required)');
  console.log('  PUT /api/posts/:id - Update post (owner only)');
  console.log('  DELETE /api/posts/:id - Delete post (owner only)');
  console.log('');
  console.log('🏥 Health:');
  console.log('  GET /health - Health check');
}

// Main test function
async function runTests() {
  console.log('🚀 STARTING BLOG API TESTS');
  console.log('Make sure your server is running on http://localhost:4000');
  console.log('===============================================');

  try {
    await registerUsers();
    await createPosts();
    await testGetPosts();
    await testUserProfiles();
    await testPostOperations();
    await showApiEndpoints();
    
    console.log('\n🎉 ALL TESTS COMPLETED SUCCESSFULLY!');
    console.log('\n💡 TIP: You can now use these accounts to test your API:');
    for (const user of testUsers) {
      console.log(`   ${user.displayName}: ${user.email} / ${user.password}`);
    }
    
  } catch (error) {
    console.error('❌ Test error:', error.message);
  }
}

// Run the tests
runTests();