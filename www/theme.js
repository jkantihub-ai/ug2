const themeSwitcher = document.getElementById('theme-switcher');

const set_theme = (theme) => {
    if(theme === 'dark') {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
    } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
    }
}

themeSwitcher.addEventListener('click', () => {
    if (document.body.classList.contains('dark-theme')) {
        set_theme('light');
        localStorage.setItem('theme', 'light');
    } else {
        set_theme('dark');
        localStorage.setItem('theme', 'dark');
    }
});

// check for saved theme in local storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    set_theme(savedTheme);
} else {
    // default to light theme
    set_theme('light');
}
