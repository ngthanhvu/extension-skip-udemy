document.addEventListener('DOMContentLoaded', function () {
    const showButton = document.getElementById('showScrubBtn');
    const hideButton = document.getElementById('hideScrubBtn');

    showButton.addEventListener('click', () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: "showScrubButton" });
        });
        showButton.style.display = 'none';
        hideButton.style.display = 'inline';
    });

    hideButton.addEventListener('click', () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: "hideScrubButton" });
        });
        hideButton.style.display = 'none';
        showButton.style.display = 'inline';
    });
});
