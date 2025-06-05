document.getElementById("modify-url").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var tab = tabs[0];
    if (tab.url.includes("youtube.com/watch")) {
      chrome.tabs.sendMessage(
        tab.id,
        { action: "getCurrentTime" },
        function (response) {
          var currentTime =
            response && response.currentTime ? response.currentTime : 0;
          var modUrl = tab.url.replace("youtube.com", "youtube.com.");
          // Remove any existing t= param
          modUrl = modUrl.replace(/([?&])t=\d+s?/, "");
          // Add the t param
          if (modUrl.includes("?")) {
            modUrl += "&t=" + currentTime + "s";
          } else {
            modUrl += "?t=" + currentTime + "s";
          }
          chrome.tabs.update(tab.id, { url: modUrl });
        }
      );
    } else {
      var modUrl = tab.url.replace("youtube.com", "youtube.com.");
      chrome.tabs.update(tab.id, { url: modUrl });
    }
  });
});
