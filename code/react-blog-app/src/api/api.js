const API_BASE = "http://localhost:5000/api";

// Retrieve JWT from localStorage
function getToken() {
  return localStorage.getItem('token'); // Should be set after login
}

export async function getPosts() {
  const token = getToken();

  if (!token) {
    throw new Error('Not authenticated');
  }
  
  const res = await fetch(`${API_BASE}/posts`, {
    headers: { Authorization: `Bearer ${token}` }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  
  return res.json();
}


// User login, stores JWT in localStorage
export async function loginUser(email, password) {
  const res = await fetch(`${API_BASE}/users/login`, {
    method:'POST',
    headers:{ "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  if (!res.ok) {
    throw new Error('Login failed');
  }
  
  const { token } = await res.json();
  localStorage.setItem('token', token);
  return token;
}

// Create a new post (protected)
export async function createPost(title, content, tags = []) {
  const token = getToken();

  if (!token) {
    throw new Error('Not authenticated');
  }
  
  const res = await fetch(`${API_BASE}/posts`, {
    method:'POST',
    headers:{ 
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({ title, content, tags })
  });

  if (!res.ok) {
    throw new Error('Failed to create post');
  }
  
  return res.json();
}

// Update a post (protected)
export async function updatePost(id, title, content, tags = []) {
  const token = getToken();

  if (!token) {
    throw new Error('Not authenticated');
  }
  
  const res = await fetch(`${API_BASE}/posts/${id}`, {
    method:'PUT',
    headers:{ 
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({ title, content, tags })
  });

  if (!res.ok) {
    throw new Error('Failed to update post');
  }
  
  return res.json();
}

// Delete a post (protected)
export async function deletePost(id) {
  const token = getToken();

  if (!token) {
    throw new Error('Not authenticated');
  }
  
  const res = await fetch(`${API_BASE}/posts/${id}`, {
    method:'DELETE',
    headers:{ "Authorization": `Bearer ${token}` }
  });

  if (!res.ok) {
    throw new Error('Failed to delete post');
  }
  
  return res.json();
}


// User registration
export async function registerUser(username, email, password) {
  const res = await fetch(`${API_BASE}/users/register`, {  
    method:'POST',
    headers:{ "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password })
  });

  if (!res.ok) {
    // Handle bad requests gracefully
    const error = await res.json();
    throw new Error(error?.message || 'Registration failed');
  }
  
  return res.json();
}


export async function getMyProfile() {
  const token = getToken();

  if (!token) {
    throw new Error('Not authenticated');
  }

  const res = await fetch(`${API_BASE}/users/profile`, {
    headers: { Authorization: `Bearer ${token}` }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch profile');
  }

  return res.json();
}


export async function getPublicProfile(id) {
  const res = await fetch(`${API_BASE}/users/public/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch public profile');
  }
  
  return res.json();
}

export async function updateProfile(data) {
  const token = getToken();

  if (!token) {
    throw new Error('Not authenticated');
  }
  
  const res = await fetch(`${API_BASE}/users/me`, {
    method:'PUT',
    headers:{ 
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Failed to update profile');
  }
  
  return res.json();
}