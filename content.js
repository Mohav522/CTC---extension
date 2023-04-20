
// Listen for the onCreated event, which is fired when a new tab is created.
chrome.tabs.onCreated.addListener(function(tab) {
    // Get all tabs in the current window.
    chrome.tabs.query({currentWindow: true}, function(tabs) {
      // If the number of tabs in the window is greater than 10, close the new tab.
      if (tabs.length > 10) {
        chrome.tabs.remove(tab.id);
      }
    });
  });