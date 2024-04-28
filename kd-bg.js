console.log("[Kwejk downloader - Background script] Started!");

browser.runtime.onMessage.addListener((msg) => {
    browser.tabs.create({url: msg.url});
});

browser.browserAction.onClicked.addListener(() => {
    browser.tabs.executeScript({file: 'kd-content.js'});
});