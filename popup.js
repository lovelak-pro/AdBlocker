const modes = document.getElementById("mode");

modes.addEventListener("click", function () {
  if (modes.innerHTML === "Light") {
    modes.innerHTML = "Dark";
    document.body.classList.toggle("dark-mode");
  } else {
    modes.innerHTML = "Light";
    document.body.classList.toggle("dark-mode");
  }
});
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
