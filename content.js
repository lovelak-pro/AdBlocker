chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getCurrentTime") {
    const video = document.querySelector("video");
    if (video) {
      sendResponse({ currentTime: Math.floor(video.currentTime) });
    } else {
      sendResponse({ currentTime: 0 });
    }
  }
  // Return true to indicate async response
  return true;
});
