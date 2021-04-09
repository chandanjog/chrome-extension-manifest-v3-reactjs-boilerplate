console.log("Hello from background.js file!")

chrome.runtime.onInstalled.addListener((tab) => {
    console.log('Default background color set to %cgreen', `color: ${color}`);
});