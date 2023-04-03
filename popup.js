// Count the number of tabs
chrome.tabs.query({}, function(tabs) {
  var count = tabs.length;

  // If there are more than 10 tabs, close the current tab
  if (count > 10) {
    chrome.tabs.getCurrent(function(tab) {
      chrome.tabs.remove(tab.id);
    });
  }

  // Update the tab counter in the popup
  document.getElementById("tab-counter").textContent = count;
});