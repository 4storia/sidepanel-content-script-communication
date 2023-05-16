# Request for more context information in sidePanel

Original cloned from [the chrome extensions cookbook](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/functional-samples/cookbook.sidepanel-site-specific), this repo illustrates how to enable 2-way communication with a tab-specific sidepanel.

Doing this, as far as I can tell, _requires_ passing `tabId` as part of the sidepanel url. In all other cases, the sidepanel is effectively an orphaned frame without a unique tab/frame id to refer to, making it impossible to know what tab it is rendered next to.

It would be awesome if there was a way to get the tab(s) that a sidepanel was currently rendered next to, so it can receive messages specifically from those tabs.

## Running this extension

1. Clone this repository.
2. Load this directory in Chrome as an [unpacked extension](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked).
3. [Pin](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#pin) the extension.
4. Go to https://www.google.com.
5. Click on the action icon to open the side panel.
6. Repeat steps 4 & 5, so you have two side panel instances open.
7. Inspect the side panel in either tab - you can see that it receives messages from both tabs. Without manually providing the side panel with its tab id up front, there would be know way to know which side panel instance should respond to a message.

💡 You can also open the side panel by pressing `Ctrl+B` (Windows) or `Cmd+B` (macOS).

<img src="https://wd.imgix.net/image/BhuKGJaIeLNPW9ehns59NfwqKxF2/3vhkSp1cBQOydpYZoRbD.png?auto=format&w=700" alt="Google.com side panel">
