
  // Get the current tab count
let tabCount = window.top.document.querySelectorAll("div[role='tab']").length;

// If the tab count is greater than 10, prevent new tabs from opening
if (tabCount >= 10) {
  window.top.document.body.addEventListener("click", function(event) {
    if (event.target.matches("a") && event.button === 0) {
      event.preventDefault();
    }
  }, true);
}