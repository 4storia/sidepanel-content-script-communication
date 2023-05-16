const sidePanelUrl = new URL(window.location.href);
const tabId = sidePanelUrl.searchParams.get('tabId');

document.querySelector('#tab-id').innerText = parseInt(tabId);

chrome.tabs.getCurrent((result) => {
    console.log("Current tab is, unfortunately, undefined: ", result);
});

chrome.runtime.onMessage.addListener((message, sender, respond) => {
    console.log('The sidepanel listens to messages from all content scripts, even if it is unique to a tab', message);

    if(sender.tab.id !== parseInt(tabId)) return;

    console.log('This is a message this instance of the sidepanel should actually respond to');
    respond('acknowledged');
});