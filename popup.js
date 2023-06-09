chrome.tabs.query({}, function(tabs) {
  var count = tabs.length;

  const MAX_TABS = 10;

chrome.tabs.onCreated.addListener(function(tab) {
  
  chrome.tabs.query({currentWindow: true}, function(tabs) {
    
    if (tabs.length > MAX_TABS) {
     
      chrome.tabs.remove(tab.id);
      
      chrome.notifications.create({
        type: "basic",
        title: "Tab Limit Exceeded",
        message: "You have reached the maximum number of tabs in this window.",
        iconUrl: "icon-48.png"
      });
    }
  });
});

  document.getElementById("tab-counter").textContent = count;
});
