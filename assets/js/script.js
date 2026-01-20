document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Dark mode toggle functionality
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

    // Initial state of the theme
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

    // Hide header controls when scrolling down
    const headerControls = document.querySelector('.header-controls');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        // If the scroll is greater than 50px, hide the controls
        if (window.scrollY > 50) { 
            headerControls.classList.add('header-hidden');
        } 
        // If the scroll is less than 50px, show the controls
        else { 
            headerControls.classList.remove('header-hidden');
        }
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

    // Generic Markdown page loader (for About, CV, Work)
    const pageContentDiv = document.getElementById('page-content');
    if (pageContentDiv) {
        loadGenericPageContent(pageContentDiv);
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

// Function to display blog posts in the table
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

// Function to format the date of the blog posts
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Functions that convert Markdown to HTML (loadIndividualBlogPost and loadGenericPageContent

// Function to load and display an individual blog post
async function loadIndividualBlogPost(targetElement) {
    const urlParams = new URLSearchParams(window.location.search);
    const postFileName = urlParams.get('post');

    // If a post file name is provided, load the post
    if (postFileName) {
        try {
            // Fetch the post from the posts directory
            const response = await fetch(`posts/${postFileName}`);
            
            // If the response is not ok, throw an error
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // Extract the Markdown text from the response
            const markdownText = await response.text();

            // Create a new showdown converter with tables enabled to support markdown tables
            const converter = new showdown.Converter({ tables: true });

            // Convert Markdown to HTML and display it in the target element (the blog post content div)
            targetElement.innerHTML = converter.makeHtml(markdownText);

            // Extract title (#) from Markdown and set document title
            const titleMatch = markdownText.match(/^#\s+(.+)$/m);
            
            // If the title is found, change the document title to the title of the post
            if (titleMatch && titleMatch[1]) {
                document.title = titleMatch[1] + ' - Blog';
            }
        } catch (error) {
            // If there is an error, display a message
            console.error('Error fetching or parsing markdown:', error);
            targetElement.innerHTML = '<p>Error loading blog post.</p>';
        }
    } else {
        // If no post file name is provided, display a message
        targetElement.innerHTML = '<p>No blog post specified.</p>';
    }
}

// Function to load and display Markdown content for generic pages (About, CV, Work)
async function loadGenericPageContent(targetElement) {
    // Get the language from the URL (?lang=es or ?lang=en). Default is 'en'.
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'en';
    
    const path = window.location.pathname;
    let markdownFilePath = '';

    // Determine the file path based on the section and the language selected
    if (path.endsWith('about.html')) {
        markdownFilePath = `about/content/about-${lang}.md`;
    } else if (path.includes('/about/')) {
        markdownFilePath = `content/about-${lang}.md`;
    } else if (path.includes('/cv/')) {
        markdownFilePath = `content/cv-${lang}.md`;
    } else if (path.includes('/work/')) {
        markdownFilePath = `content/work-${lang}.md`;
    }

    if (markdownFilePath) {
        try {
            const response = await fetch(markdownFilePath);
            
            // If the file in the chosen language does not exist, try to load the English version by default
            if (!response.ok && lang !== 'en') {
                console.warn(`Translation '${lang}' not found, trying to load English version...`);
                const fallbackPath = markdownFilePath.replace(`-${lang}.md`, '-en.md');
                const fallbackResponse = await fetch(fallbackPath);
                if (!fallbackResponse.ok) throw new Error(`Could not load content.`);
                
                const markdownText = await fallbackResponse.text();
                renderMarkdownPage(markdownText, targetElement);
            } else if (!response.ok) {
                throw new Error(`Error loading file: ${response.status}`);
            } else {
                const markdownText = await response.text();
                renderMarkdownPage(markdownText, targetElement);
            }
        } catch (error) {
            console.error('Error loading generic page:', error);
            targetElement.innerHTML = '<p>Error loading content. Please check if the markdown file exists.</p>';
        }
    }
}

// Auxiliary function to render the Markdown and update the title (to avoid repeating code)
function renderMarkdownPage(markdownText, targetElement) {
    const converter = new showdown.Converter({ tables: true });
    targetElement.innerHTML = converter.makeHtml(markdownText);

    // Update the tab title with the first H1 (#) of the Markdown
    const titleMatch = markdownText.match(/^#\s+(.+)$/m);
    if (titleMatch && titleMatch[1]) {
        document.title = titleMatch[1];
    }
}
