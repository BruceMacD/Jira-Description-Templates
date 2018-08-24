'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log('Jira Description Templates running...');
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
