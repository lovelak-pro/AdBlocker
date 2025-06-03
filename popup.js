document.getElementById("modify-url").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var currentUrl = tabs[0].url;
    var modUrl = currentUrl.replace("youtube.com", "youtube.com.");
    chrome.tabs.update(tabs[0].id, { url: modUrl });
  });
});
