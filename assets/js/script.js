function changeLanguage(lang) {
    const titles1 = {
        'en': 'Welcome to our website!',
        'fr': 'Bienvenue sur notre site web !'
    };

    const contents1 = {
        'en': 'This is an example of a multi-language website.',
        'fr': 'Ceci est un exemple de site web multilingue.'
    };

    document.getElementById('title1').textContent = titles1[lang];
    document.getElementById('content1').textContent = contents1[lang];
}