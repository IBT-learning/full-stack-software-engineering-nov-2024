// IMPORTANT: Replace jsonplaceholder URLs with your local server URLs
// Instead of 'https://jsonplaceholder.typicode.com/posts' use '/posts'
// Instead of 'https://jsonplaceholder.typicode.com/users' use '/users'

// Global variables
let allPosts = [];
let allUsers = [];

// DOM elements
const postsView = document.getElementById('posts-view');
const createView = document.getElementById('create-view');
const allPostsBtn = document.getElementById('all-posts-btn');
const createPostBtn = document.getElementById('create-post-btn');
const postsContainer = document.getElementById('posts-container');
const userFilter = document.getElementById('user-filter');
const createPostForm = document.getElementById('create-post-form');
const postUserSelect = document.getElementById('post-user');
const postModal = document.getElementById('post-modal');
const modalContent = document.getElementById('modal-content');
const closeModal = document.querySelector('.close');

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    loadInitialData();
    setupEventListeners();
});

// Event listeners
function setupEventListeners() {
    allPostsBtn.addEventListener('click', () => showView('posts'));
    createPostBtn.addEventListener('click', () => showView('create'));
    userFilter.addEventListener('change', handleFilterChange);
    createPostForm.addEventListener('submit', handleCreatePost);
    closeModal.addEventListener('click', closePostModal);
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === postModal) {
            closePostModal();
        }
    });
}

// Load initial data from your server (replacing jsonplaceholder)
async function loadInitialData() {
    try {
        showLoading();
        
        // Fetch from your local server instead of jsonplaceholder
        const [postsResponse, usersResponse] = await Promise.all([
            fetch('/posts'),  // Your local endpoint
            fetch('/users')   // Your local endpoint
        ]);
        
        if (!postsResponse.ok || !usersResponse.ok) {
            throw new Error('Failed to fetch data');
        }
        
        allPosts = await postsResponse.json();
        allUsers = await usersResponse.json();
        
        populateUserFilter();
        populateUserSelect();
        displayPosts(allPosts);
        
    } catch (error) {
        console.error('Error loading data:', error);
        showError('Failed to load blog data. Please make sure your server is running.');
    }
}

// Display functions
function showView(viewName) {
    // Hide all views
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });
    
    // Remove active class from buttons
    document.querySelectorAll('nav button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected view and mark button as active
    if (viewName === 'posts') {
        postsView.classList.add('active');
        allPostsBtn.classList.add('active');
    } else if (viewName === 'create') {
        createView.classList.add('active');
        createPostBtn.classList.add('active');
    }
}

function displayPosts(posts) {
    if (posts.length === 0) {
        postsContainer.innerHTML = '<div class="loading">No posts found.</div>';
        return;
    }
    
    postsContainer.innerHTML = posts.map(post => {
        const user = allUsers.find(u => u.id === post.userId);
        const userName = user ? user.name : 'Unknown Author';
        
        // Create excerpt (first 150 characters)
        const excerpt = post.body.length > 150 ? 
            post.body.substring(0, 150) + '...' : 
            post.body;
        
        return `
            <article class="post-card" onclick="showPostDetails(${post.id})">
                ${post.image ? `<img src="${post.image}" alt="${post.title}" class="post-image" onerror="this.style.display='none'">` : ''}
                <h2 class="post-title">${post.title}</h2>
                <p class="post-author">By ${userName}</p>
                <p class="post-excerpt">${excerpt}</p>
            </article>
        `;
    }).join('');
}

function showPostDetails(postId) {
    const post = allPosts.find(p => p.id === postId);
    const user = allUsers.find(u => u.id === post.userId);
    const userName = user ? user.name : 'Unknown Author';
    
    modalContent.innerHTML = `
        <h2>${post.title}</h2>
        <p style="color: #7f8c8d; margin-bottom: 1rem;">By ${userName}</p>
        ${post.image ? `<img src="${post.image}" alt="${post.title}" style="width: 100%; max-height: 300px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;" onerror="this.style.display='none'">` : ''}
        <div class="post-full">${post.body}</div>
    `;
    
    postModal.classList.add('active');
}

function closePostModal() {
    postModal.classList.remove('active');
}

function populateUserFilter() {
    userFilter.innerHTML = '<option value="">All Authors</option>';
    allUsers.forEach(user => {
        userFilter.innerHTML += `<option value="${user.id}">${user.name}</option>`;
    });
}

function populateUserSelect() {
    postUserSelect.innerHTML = '<option value="">Select Author</option>';
    allUsers.forEach(user => {
        postUserSelect.innerHTML += `<option value="${user.id}">${user.name}</option>`;
    });
}

function handleFilterChange() {
    const selectedUserId = userFilter.value;
    
    if (selectedUserId === '') {
        displayPosts(allPosts);
    } else {
        const filteredPosts = allPosts.filter(post => post.userId == selectedUserId);
        displayPosts(filteredPosts);
    }
}

// Create post functionality
async function handleCreatePost(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const postData = {
        userId: parseInt(formData.get('userId') || document.getElementById('post-user').value),
        title: formData.get('title') || document.getElementById('post-title').value,
        body: formData.get('body') || document.getElementById('post-body').value,
        image: formData.get('image') || document.getElementById('post-image').value
    };
    
    // Validate
    if (!postData.userId || !postData.title || !postData.body) {
        showMessage('Please fill in all required fields.', 'error');
        return;
    }
    
    try {
        // Send to your local server instead of jsonplaceholder
        const response = await fetch('/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });
        
        if (!response.ok) {
            throw new Error('Failed to create post');
        }
        
        const newPost = await response.json();
        
        // Add new post to the beginning of the array
        allPosts.unshift(newPost);
        
        // Reset form
        createPostForm.reset();
        
        // Show success message
        showMessage('Post created successfully!', 'success');
        
        // Switch back to posts view
        setTimeout(() => {
            showView('posts');
            displayPosts(allPosts);
        }, 1500);
        
    } catch (error) {
        console.error('Error creating post:', error);
        showMessage('Failed to create post. Please try again.', 'error');
    }
}

// Utility functions
function showLoading() {
    postsContainer.innerHTML = '<div class="loading">Loading posts...</div>';
}

function showError(message) {
    postsContainer.innerHTML = `<div class="loading" style="color: #e74c3c;">${message}</div>`;
}

function showMessage(message, type) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    // Insert at the top of the current view
    const activeView = document.querySelector('.view.active');
    activeView.insertBefore(messageDiv, activeView.firstChild);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// Optional: Auto-refresh posts every 30 seconds
setInterval(async () => {
    try {
        const response = await fetch('/posts');
        if (response.ok) {
            const updatedPosts = await response.json();
            if (updatedPosts.length !== allPosts.length) {
                allPosts = updatedPosts;
                // Only refresh display if we're on posts view and no filter is active
                if (postsView.classList.contains('active') && userFilter.value === '') {
                    displayPosts(allPosts);
                }
            }
        }
    } catch (error) {
        console.log('Auto-refresh failed:', error);
    }
}, 30000);