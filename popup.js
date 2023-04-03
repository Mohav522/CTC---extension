// Set the maximum number of tabs
const MAX_TABS = 10;

// Count the number of tabs and display it in the popup
chrome.tabs.query({}, function(tabs) {
  const tabCount = tabs.length;
  const tabCountDiv = document.getElementById("tabCount");
  tabCountDiv.textContent = "You have " + tabCount + " tabs open.";

  // Prevent the user from opening more than the maximum number of tabs
  if (tabCount >= MAX_TABS) {
    const newTabButton = document.createElement("button");
    newTabButton.textContent = "New Tab";
    newTabButton.disabled = true;
    tabCountDiv.appendChild(newTabButton);
  }
});

// Listen for clicks on the "New Tab" button and open a new tab
document.getElementById("tabCount").addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    chrome.tabs.create({});
  }
});
