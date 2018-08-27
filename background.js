'use strict';

chrome.runtime.onInstalled.addListener(function() {
  // Start by loading any locally stored templates from previous sessions
  chrome.storage.sync.get(["storedTemplates"], function(templates) {
    console.log('Jira Description Templates running...');
    console.log('Stored tempates:');
    console.log(templates);
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        // Enable the extension when on an Atlassian or Jira domain
        // TODO: make more broad
        pageUrl: {hostEquals: 'brucetesting.atlassian.net'},
        css: ["textarea[id='description']"]
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
