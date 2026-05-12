const LANG_STORAGE_KEY = 'siteLang';

function resolveLang() {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get('lang');
    if (fromUrl === 'es' || fromUrl === 'en') {
        localStorage.setItem(LANG_STORAGE_KEY, fromUrl);
        return fromUrl;
    }
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    if (stored === 'es' || stored === 'en') {
        return stored;
    }
    return 'en';
}

document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.lang = resolveLang() === 'es' ? 'es' : 'en';

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
    updateLangSelectorUrls();
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
    if (typeof translations === 'undefined') {
        return;
    }
    const lang = resolveLang();
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

function blogPostFileForLang(postFile, targetLang) {
    if (!postFile) return postFile;
    if (postFile.endsWith('-en.md')) {
        return targetLang === 'es' ? postFile.replace(/-en\.md$/, '-es.md') : postFile;
    }
    if (postFile.endsWith('-es.md')) {
        return targetLang === 'en' ? postFile.replace(/-es\.md$/, '-en.md') : postFile;
    }
    return postFile;
}

/** Keeps query params (e.g. ?post=...) when switching lang; swaps -en/-es post slug on blog/post.html */
function updateLangSelectorUrls() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const targetLang = btn.id === 'lang-es' ? 'es' : 'en';
        const params = new URLSearchParams(window.location.search);
        params.set('lang', targetLang);
        const postFile = params.get('post');
        if (postFile) {
            params.set('post', blogPostFileForLang(postFile, targetLang));
        }
        btn.href = '?' + params.toString();
    });
}

function highlightActiveLanguage() {
    const currentLang = resolveLang();

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
    const currentLang = resolveLang();

    try {
        const response = await fetch('./posts.json');
        if (!response.ok) throw new Error(`Failed to fetch blog posts list: ${response.status}`);

        let posts = await response.json();
        posts = posts.filter(post => post.lang === currentLang);
        posts.sort((a, b) => {
            const tb = new Date(b.updated || b.date).getTime();
            const ta = new Date(a.updated || a.date).getTime();
            return tb - ta;
        });
        
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
            const updated = post.updated || post.date;
            row.innerHTML = `
                <td>${formatDate(updated)}</td>
                <td><a href="${post.url}">${post.title}</a></td>
            `;
            tableBody.appendChild(row);
        });
    }
}

function formatDate(dateString) {
    const lang = resolveLang();
    const locale = lang === 'es' ? 'es-ES' : 'en-US';

    const ymd = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(dateString).trim());
    if (ymd) {
        const y = Number(ymd[1]);
        const m = Number(ymd[2]) - 1;
        const d = Number(ymd[3]);
        const date = new Date(Date.UTC(y, m, d));
        return date.toLocaleDateString(locale, {
            timeZone: 'UTC',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    }

    const date = new Date(dateString);
    return date.toLocaleDateString(locale, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
}

// --- BLOG POST: MOBILE H2 ACCORDION (details/summary) ---
const BLOG_ACCORDION_MQ = window.matchMedia('(max-width: 768px)');
const BLOG_POST_TOC_HEADINGS = new Set(['table of contents', 'índice', 'contenidos', 'tabla de contenidos']);

function normalizeBlogH2Label(h2) {
    return h2.textContent
        .replace(/\s*\{#[^}]*\}\s*$/, '')
        .trim()
        .toLowerCase();
}

function isBlogPostTocHeading(h2) {
    return BLOG_POST_TOC_HEADINGS.has(normalizeBlogH2Label(h2));
}

function wrapBlogPostH2Sections(container) {
    let h2 = null;
    while ((h2 = findNextCollapsibleBlogH2(container))) {
        const details = document.createElement('details');
        details.className = 'post-h2-section';
        const summary = document.createElement('summary');
        const body = document.createElement('div');
        body.className = 'post-section-body';

        container.insertBefore(details, h2);
        summary.appendChild(h2);
        details.appendChild(summary);
        details.appendChild(body);

        let sib = details.nextSibling;
        while (sib) {
            const next = sib.nextSibling;
            if (sib.nodeType === Node.ELEMENT_NODE && sib.tagName === 'H2') {
                break;
            }
            body.appendChild(sib);
            sib = next;
        }
    }
}

function findNextCollapsibleBlogH2(container) {
    for (const el of container.children) {
        if (el.tagName === 'H2' && !isBlogPostTocHeading(el)) {
            return el;
        }
    }
    return null;
}

function syncBlogPostAccordionOpenState(container) {
    const mobile = BLOG_ACCORDION_MQ.matches;
    container.querySelectorAll('details.post-h2-section').forEach((d) => {
        d.open = !mobile;
    });
}

let blogAccordionMqlBound = false;

function ensureBlogPostAccordionMediaListener() {
    if (blogAccordionMqlBound) {
        return;
    }
    blogAccordionMqlBound = true;
    BLOG_ACCORDION_MQ.addEventListener('change', () => {
        const c = document.getElementById('blog-post-content');
        if (c) {
            syncBlogPostAccordionOpenState(c);
        }
    });
    document.addEventListener(
        'toggle',
        (e) => {
            const t = e.target;
            if (!t || t.tagName !== 'DETAILS' || !t.classList.contains('post-h2-section')) {
                return;
            }
            if (!BLOG_ACCORDION_MQ.matches && !t.open) {
                t.open = true;
            }
        },
        true
    );
}

function openBlogPostDetailsAncestors(el) {
    let p = el.parentElement;
    while (p) {
        if (p.tagName === 'DETAILS' && p.classList.contains('post-h2-section')) {
            p.open = true;
        }
        p = p.parentElement;
    }
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
    const lang = resolveLang();
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
    const converter = new showdown.Converter({
        tables: true,
        customizedHeaderId: true,
        ghCompatibleHeaderId: true,
    });
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

    if (targetElement.id === 'blog-post-content') {
        wrapBlogPostH2Sections(targetElement);
        ensureBlogPostAccordionMediaListener();
        syncBlogPostAccordionOpenState(targetElement);
    }

    const hash = window.location.hash;
    if (hash && hash.length > 1) {
        const id = decodeURIComponent(hash.slice(1));
        queueMicrotask(() => {
            const el = document.getElementById(id);
            if (el) {
                openBlogPostDetailsAncestors(el);
                el.scrollIntoView({ behavior: 'instant', block: 'start' });
            }
        });
    }
}
