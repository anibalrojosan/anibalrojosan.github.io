document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // --- THEME MANAGEMENT ---
    const enableDarkMode = () => {
        body.classList.add('dark-mode');
        if (themeToggle) themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    };

    const disableDarkMode = () => {
        body.classList.remove('dark-mode');
        if (themeToggle) themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    };

    // Initial state of the theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        disableDarkMode();
    } else {
        enableDarkMode(); // Default to dark mode
    }

    // Toggle function
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (body.classList.contains('dark-mode')) {
                disableDarkMode();
            } else {
                enableDarkMode();
            }
        });
    }

    // --- HEADER CONTROLS VISIBILITY ---
    const headerControls = document.querySelector('.header-controls');
    if (headerControls) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) { 
                headerControls.classList.add('header-hidden');
            } else { 
                headerControls.classList.remove('header-hidden');
            }
        });
    }

    // --- CONTENT LOADING ---
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

    // Generic Markdown page loader (for About, CV, Work, Home)
    const pageContentDiv = document.getElementById('page-content');
    if (pageContentDiv) {
        loadGenericPageContent(pageContentDiv);
    }

    // --- TRANSLATION INITIALIZATION ---
    translatePage();
    highlightActiveLanguage();

    // --- BACK TO TOP BUTTON ---
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = 'flex';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// --- TRANSLATION LOGIC ---
function translatePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'en';
    const dict = translations[lang];

    if (dict) {
        for (const id in dict) {
            const element = document.getElementById(id);
            if (element) {
                element.innerHTML = dict[id];
            }
        }
    }
}

function highlightActiveLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const currentLang = urlParams.get('lang') || 'en';
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.id === `lang-${currentLang}`) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// --- BLOG FUNCTIONALITY ---
async function loadBlogPosts() {
    const urlParams = new URLSearchParams(window.location.search);
    const currentLang = urlParams.get('lang') || 'en';
    highlightActiveLanguage();

    try {
        const response = await fetch('./posts.json');
        if (!response.ok) throw new Error(`Failed to fetch blog posts list: ${response.status}`);

        let posts = await response.json();
        posts = posts.filter(post => post.lang === currentLang);
        posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        displayBlogPosts(posts);
    } catch (error) {
        console.error('Error loading blog posts:', error);
        const blogPostsList = document.getElementById('blog-posts-list');
        if (blogPostsList) {
            blogPostsList.innerHTML = '<tr><td colspan="2">Error loading blog posts</td></tr>';
        }
    }
}

function displayBlogPosts(posts) {
    const tableBody = document.getElementById('blog-posts-list');
    if (tableBody) {
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
}

function formatDate(dateString) {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'en';
    const locale = lang === 'es' ? 'es-ES' : 'en-US';

    const date = new Date(dateString);
    return date.toLocaleDateString(locale, {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// --- MARKDOWN RENDERING ---
async function loadIndividualBlogPost(targetElement) {
    const urlParams = new URLSearchParams(window.location.search);
    const postFileName = urlParams.get('post');

    if (postFileName) {
        try {
            const response = await fetch(`posts/${postFileName}`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            
            const markdownText = await response.text();
            renderMarkdownPage(markdownText, targetElement);
            
            const titleMatch = markdownText.match(/^#\s+(.+)$/m);
            if (titleMatch && titleMatch[1]) {
                document.title = titleMatch[1] + ' - Blog';
            }
        } catch (error) {
            console.error('Error fetching or parsing markdown:', error);
            targetElement.innerHTML = '<p>Error loading blog post.</p>';
        }
    } else {
        targetElement.innerHTML = '<p>No blog post specified.</p>';
    }
}

async function loadGenericPageContent(targetElement) {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'en';
    const path = window.location.pathname;
    let markdownFilePath = '';

    if (path.includes('/cv/')) {
        markdownFilePath = `content/cv-${lang}.md`;
    } else if (path.includes('/work/')) {
        markdownFilePath = `content/work-${lang}.md`;
    } else if (path.includes('/me/')) {
        markdownFilePath = `content/me-${lang}.md`;
    } else if (path.endsWith('index.html') || path.endsWith('/') || path === '') {
        markdownFilePath = `home/content/home-${lang}.md`;
    }

    if (markdownFilePath) {
        try {
            const response = await fetch(markdownFilePath);
            if (!response.ok && lang !== 'en') {
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

function renderMarkdownPage(markdownText, targetElement) {
    const converter = new showdown.Converter({ tables: true });
    const titleMatch = markdownText.match(/^#\s+(.+)$/m);
    let contentToRender = markdownText;

    if (titleMatch && titleMatch[1]) {
        const title = titleMatch[1];
        document.title = title;
        const mainH1 = document.querySelector('main h1');
        if (mainH1) {
            mainH1.innerHTML = title;
            contentToRender = markdownText.replace(/^#\s+.+$/m, '').trim();
        }
    }
    targetElement.innerHTML = converter.makeHtml(contentToRender);
}
