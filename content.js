
console.log(document.querySelectorAll('.react-contextmenu-wrapper'));
// content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "clicked_browser_action" ) {
            let firstHref = document.querySelectorAll('a[href^=\'http\']')[0].getAttribute('href');

            console.log(firstHref);
        }
    }
);