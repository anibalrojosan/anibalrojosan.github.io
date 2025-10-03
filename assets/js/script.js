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

    // Markdown loader for blog posts
    const blogContent = document.getElementById('blog-content');
    if (blogContent) {
        const converter = new showdown.Converter();
        const markdownFilePath = './my-first-post.md'; // Assuming your markdown file is in the same directory as blog/index.html

        fetch(markdownFilePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(markdownText => {
                blogContent.innerHTML = converter.makeHtml(markdownText);
            })
            .catch(error => {
                console.error('Error fetching or parsing markdown:', error);
                blogContent.innerHTML = '<p>Error loading blog post.</p>';
            });
    }
});
