function sendMessage() {
    chrome.runtime.sendMessage("go to my tab's sidebar", (message) => {
        console.log("response from sidepanel was:", message)
    });
}

sendMessage();

setInterval(() => {
    sendMessage();
}, 2000);

