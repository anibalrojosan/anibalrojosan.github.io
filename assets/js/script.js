document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Dark mode toggle functionality
    const enableDarkMode = () => {
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    };

    const disableDarkMode = () => {
        body.classList.remove('dark-mode');
        themeToggle.textContent = '🌙';
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

    // Translation logic
    translatePage();

    // Always highlight the active language if the buttons are present
    highlightActiveLanguage();
});

// Translations
const translations = {
    'en': {
        'nav-blog': "[ BLOG ]",
        'nav-work': "[ WORK ]",
        'nav-cv': "[ CV ]",
        'nav-me': "[ ME ]",
        // Home page specific
        'home-hi': "Hi, I'm Aníbal",
        'intro-text': "Welcome everyone to my personal website! <br> I'm on a journey to become a better scientist and engineer, exploring the intersections of <strong>Tech</strong>, <strong>Machine Learning</strong>, and <strong>Life Sciences</strong>.",
        'explore-title': "Feel free to explore:",
        'link-blog': "Read my Blog",
        'desc-blog': "My thoughts and learnings on science and technology.",
        'link-work': "Discover my Work",
        'desc-work': "A showcase of my projects and engineering experiences.",
        'link-cv': "View my CV",
        'desc-cv': "A detailed look at my professional background and skills.",
        'link-me': "About Me",
        'desc-me': "Learn more about my personal journey and who I am.",
        'social-invite-text': "You can find links to my social media at the top of the page if you want to get to know me better (:",
        'title-work': "My Work",
        'title-me': "About Me",
        'title-cv': "Curriculum Vitae",
        'title-blog': "Blog",
    },
    'es': {
        'nav-blog': "[ BLOG ]",
        'nav-work': "[ TRABAJO ]",
        'nav-cv': "[ CV ]",
        'nav-me': "[ YO ]",
        // Home page specific
        'home-hi': "Hola, soy Aníbal",
        'intro-text': "¡Bienvenidos a mi sitio! <br> Estoy en un viaje para convertirme en un mejor científico e ingeniero, explorando las intersecciones entre la <strong>tecnología</strong>, el <strong>machine learning</strong> y las <strong>ciencias de la vida</strong>.",
        'explore-title': "Siéntete libre de explorar:",
        'link-blog': "Mi blog",
        'desc-blog': "Aquí comparto mis pensamientos y aprendizajes sobre ciencia, tecnología y vida.",
        'link-work': "Descubre mi trabajo",
        'desc-work': "Aquí puedes encontrar una muestra de mis proyectos y experiencias en ingeniería.",
        'link-cv': "Mira mi CV",
        'desc-cv': "Un vistazo detallado a mi trayectoria profesional y habilidades.",
        'link-me': "Sobre mí",
        'desc-me': "Conoce más sobre mi trayectoria, mis objetivos y quién soy.",
        'social-invite-text': "En la parte superior encontrarás enlaces a mis RRSS si quieres que conectemos (:",
        'title-work': "Mi trabajo",
        'title-me': "Sobre mí",
        'title-cv': "Mi CV",
        'title-blog': "Mi blog",
    }
};

function translatePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'en';
    const dict = translations[lang];

    for (const id in dict) {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = dict[id];
        }
    }
}

// Function to highlight the active language button
function highlightActiveLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const currentLang = urlParams.get('lang') || 'en';
    
    // Bold the active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.id === `lang-${currentLang}`) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Function to load and display blog posts from posts.json
async function loadBlogPosts() {
    // 1. Obtener el idioma de la URL (?lang=es o ?lang=en). Por defecto 'en'.
    const urlParams = new URLSearchParams(window.location.search);
    const currentLang = urlParams.get('lang') || 'en';

    // Resaltar el botón del idioma actual
    highlightActiveLanguage();

    try {
        const response = await fetch('./posts.json'); // Fetch the JSON manifest
        if (!response.ok) {
            throw new Error(`Failed to fetch blog posts list: ${response.status}`);
        }

        let posts = await response.json(); // Parse the JSON response
        
        // 2. FILTRAR los posts según el idioma actual
        posts = posts.filter(post => post.lang === currentLang);
        
        // 3. Ordenar por fecha (más recientes primero)
        posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        // 4. Mostrar los posts filtrados en la tabla
        displayBlogPosts(posts);
        
    } catch (error) {
        console.error('Error loading blog posts:', error);
        const blogPostsList = document.getElementById('blog-posts-list');
        if (blogPostsList) {
            blogPostsList.innerHTML = '<tr><td colspan="2">Error loading blog posts</td></tr>';
        }
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
    if (path.endsWith('me.html')) {
        markdownFilePath = `me/content/me-${lang}.md`;
    } else if (path.includes('/me/')) {
        markdownFilePath = `content/me-${lang}.md`;
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
