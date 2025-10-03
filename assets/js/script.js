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
});
