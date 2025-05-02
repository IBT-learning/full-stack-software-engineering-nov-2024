document.addEventListener('DOMContentLoaded', function() {

    const postsContainer = document.getElementById('posts-container');
    const userFilter = document.getElementById('user-filter');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const pagination = document.getElementById('pagination');
    
    // THE GLOBAL VARIABLES 
    let allPosts = [];
    let allUsers = [];
    let currentPage = 1;
    const postsPerPage = 6;
    let filteredPosts = [];
    
  
    async function initBlog() {
        await fetchAllPosts();
        await fetchAllUsers();
        populateUserFilter();
        displayPosts();
        setupEventListeners();
    }
    
    // FETCHING POSTS FROM API 
    async function fetchAllPosts() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) throw new Error('Failed to fetch posts');
            allPosts = await response.json();
            filteredPosts = [...allPosts];
        } catch (error) {
            console.error('Error fetching posts:', error);
            postsContainer.innerHTML = `
                <div class="error-message">
                    <i class="fas fa-exclamation-triangle"></i>
                    <p>Failed to load posts. Please try again later.</p>
                </div>
            `;
        }
    }
    
   
    async function fetchAllUsers() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) throw new Error('Failed to fetch users');
            allUsers = await response.json();
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }
    
  
    function populateUserFilter() {
        allUsers.forEach(user => {
            const option = document.createElement('option');
            option.value = user.id;
            option.textContent = user.name;
            userFilter.appendChild(option);
        });
    }
    

    function displayPosts() {
   
        postsContainer.innerHTML = '';
        
        
        const startIndex = (currentPage - 1) * postsPerPage;
        const endIndex = startIndex + postsPerPage;
        const postsToShow = filteredPosts.slice(startIndex, endIndex);
        
        if (postsToShow.length === 0) {
            postsContainer.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <p>No posts found matching your criteria.</p>
                </div>
            `;
            pagination.innerHTML = '';
            return;
        }
        

        postsToShow.forEach(post => {
            const user = allUsers.find(u => u.id === post.userId) || { name: 'Unknown', username: 'unknown' };
            const randomImageId = Math.floor(Math.random() * 1000);
            
            const postCard = document.createElement('div');
            postCard.className = 'post-card';
            postCard.innerHTML = `
                <div class="post-image" style="background-image: url('https://picsum.photos/id/${randomImageId}/800/600')"></div>
                <div class="post-content">
                    <h3 class="post-title">${post.title}</h3>
                    <p class="post-excerpt">${post.body}</p>
                    <a href="#" class="read-more">Read More</a>
                    <div class="post-meta">
                        <span class="post-author">
                            <i class="fas fa-user"></i>
                            ${user.name}
                        </span>
                        <span class="post-date">
                            <i class="far fa-calendar-alt"></i>
                            ${new Date().toLocaleDateString()}
                        </span>
                    </div>
                </div>
            `;
            
            postsContainer.appendChild(postCard);
        });
        
  
        updatePagination();
    }
    

    function updatePagination() {
        const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
        
    
        pagination.innerHTML = '';
        
        if (totalPages <= 1) return;
        
        
        const prevBtn = document.createElement('button');
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevBtn.disabled = currentPage === 1;
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                displayPosts();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
        pagination.appendChild(prevBtn);
        

        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.textContent = i;
            if (i === currentPage) {
                pageBtn.classList.add('active');
            }
            pageBtn.addEventListener('click', () => {
                currentPage = i;
                displayPosts();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            pagination.appendChild(pageBtn);
        }
        
        // THE BUTTON FOR THE NEXT NEWS
        const nextBtn = document.createElement('button');
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                displayPosts();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
        pagination.appendChild(nextBtn);
    }
    

    function filterPostsByUser(userId) {
        if (userId === 'all') {
            filteredPosts = [...allPosts];
        } else {
            filteredPosts = allPosts.filter(post => post.userId === parseInt(userId));
        }
        currentPage = 1;
        displayPosts();
    }

    function searchPosts(keyword) {
        keyword = keyword.toLowerCase().trim();
        
        if (!keyword) {
            filteredPosts = [...allPosts];
        } else {
            filteredPosts = allPosts.filter(post => 
                post.title.toLowerCase().includes(keyword) || 
                post.body.toLowerCase().includes(keyword)
            );
        }
        
        currentPage = 1;
        displayPosts();
    }
    

    function setupEventListeners() {
       
        userFilter.addEventListener('change', (e) => {
            filterPostsByUser(e.target.value);
        });
        
        // I PUT A SEARCH FEATURE HERE 
        searchBtn.addEventListener('click', () => {
            searchPosts(searchInput.value);
        });
        
       
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                searchPosts(searchInput.value);
            }
        });
    }
    
    
    initBlog();
});