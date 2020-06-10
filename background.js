// background.js
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        if (tab.url.indexOf("open.spotify.com") != -1) {
            chrome.tabs.executeScript({file: "content.js"}, function(result) {});
        }
    }
});