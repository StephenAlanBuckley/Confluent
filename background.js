console.log("LOADED AS FUCK");
//Toggle reading when confluent icon is clicked in the browser.
chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("TRIED");
  //we can't directly interact with the make_readable script here
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: "changeReadingMode"});
  });
});
