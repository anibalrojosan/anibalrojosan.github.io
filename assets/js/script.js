document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const enableDarkMode = () => {
        body.classList.add('dark-mode');
        themeToggle.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    };

    const disableDarkMode = () => {
        body.classList.remove('dark-mode');
        themeToggle.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
    };

    // Initial state
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        disableDarkMode();
    } else {
        enableDarkMode(); // Default to dark mode if no preference or 'dark'
    }

    // Toggle function
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    // Scroll-based header visibility
    const headerControls = document.querySelector('.header-controls');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY && window.scrollY > 1) { // Scrolling down and past a certain threshold
            headerControls.classList.add('header-hidden');
        } else if (window.scrollY < lastScrollY || window.scrollY < 50) { // Scrolling up or near the top
            headerControls.classList.remove('header-hidden');
        }
        lastScrollY = window.scrollY;
    });

    // Blog posts listing functionality (for blog/index.html)
    const blogPostsList = document.getElementById('blog-posts-list');
    if (blogPostsList) {
        loadBlogPosts();
    }

    // Individual blog post loader (for blog/post.html)
    const blogPostContentDiv = document.getElementById('blog-post-content');
    if (blogPostContentDiv) {
        loadIndividualBlogPost(blogPostContentDiv);
    }
});

// Function to load and display blog posts from posts.json
async function loadBlogPosts() {
    try {
        const response = await fetch('./posts.json'); // Fetch the JSON manifest
        if (!response.ok) {
            throw new Error(`Failed to fetch blog posts list: ${response.status}`);
        }

        const posts = await response.json(); // Parse the JSON response
        
        // Sort posts by date (newest first)
        posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        // Display posts in table
        displayBlogPosts(posts);
        
    } catch (error) {
        console.error('Error loading blog posts:', error);
        blogPostsList.innerHTML = '<tr><td colspan="2">Error loading blog posts</td></tr>';
    }
}

function displayBlogPosts(posts) {
    const tableBody = document.getElementById('blog-posts-list');
    tableBody.innerHTML = '';
    
    posts.forEach(post => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${formatDate(post.date)}</td>
            <td><a href="${post.url}">${post.title}</a></td>
        `;
        tableBody.appendChild(row);
    });
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Function to load and display an individual blog post
async function loadIndividualBlogPost(targetElement) {
    const urlParams = new URLSearchParams(window.location.search);
    const postFileName = urlParams.get('post');

    if (postFileName) {
        try {
            const response = await fetch(`posts/${postFileName}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const markdownText = await response.text();
            const converter = new showdown.Converter();
            targetElement.innerHTML = converter.makeHtml(markdownText);

            // Extract title from Markdown and set document title
            const titleMatch = markdownText.match(/^#\s+(.+)$/m);
            if (titleMatch && titleMatch[1]) {
                document.title = titleMatch[1] + ' - Blog'; // Append ' - Blog' for context
            }
        } catch (error) {
            console.error('Error fetching or parsing markdown:', error);
            targetElement.innerHTML = '<p>Error loading blog post.</p>';
        }
    } else {
        targetElement.innerHTML = '<p>No blog post specified.</p>';
    }
}
