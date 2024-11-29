function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
        autoDisplay: false,
        includedLanguages: 'fr,de,es,kn,en,hi', // Add languages you want to support
    }, 'google_translate_element');
}

// Load the Google Translate API script
(function() {
    var gtScript = document.createElement('script');
    gtScript.type = 'text/javascript';
    gtScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(gtScript);
})();