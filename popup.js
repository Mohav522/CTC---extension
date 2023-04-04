// Count the number of tabs
chrome.tabs.query({}, function(tabs) {
  var count = tabs.length;

  const MAX_TABS = 10;

  function onTabCreated(tab) {
    // your code here
  }
  
  chrome.tabs.onCreated.addListener(onTabCreated);
  
  // Get all tabs in the current window
  chrome.tabs.query({currentWindow: true}, function(tabs) {
    // Check if the number of tabs exceeds the maximum
    if (tabs.length > MAX_TABS) {
      // Close the newly created tab
      chrome.tabs.remove(tab.id);
      // Display an error message to the user
      chrome.notifications.create({
        type: "basic",
        title: "Tab Limit Exceeded",
        message: "You have reached the maximum number of tabs in this window.",
        iconUrl: "icon-48.png"
      });
    }
  });
});


  // Update the tab counter in the popup
  { 
    document.getElementById("tab-counter").textContent = count;
};