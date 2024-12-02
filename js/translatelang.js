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

// (function() {
//     function adjustHeaderMargin() {
//         // Check if Google Translate iframe is present
//         const translateFrame = document.querySelector('.goog-te-banner-frame');
//         const header = document.querySelector('.fullcontainer'); // Adjust selector as needed for your header

//         if (translateFrame) {
//             header.style.marginTop = '40px';
//         } else {
//             header.style.mar ginTop = '0'; // Reset if the iframe is not present
//         }
//     }

//     // Monitor for DOM changes to detect when Google Translate becomes active
//     const observer = new MutationObserver(() => {
//         adjustHeaderMargin();
//     });

//     // Start observing the body for changes
//     observer.observe(document.body, { childList: true, subtree: true });

//     // Run initially to handle cases where the iframe is already loaded
//     adjustHeaderMargin();
// })();



// let translate_element=document.querySelector('.js_translatelang');
// let header_element=document.querySelector('.fullcontainer');
// let filter_element=document.querySelector('.filter-container');

// function adjust_header()
// {
//     header_element.classList.add('hide_googletranslate');
//     filter_element.classList.add('adjust_filter');
// }

// translate_element.addEventListener('click',()=>{
//     adjust_header();
// });

