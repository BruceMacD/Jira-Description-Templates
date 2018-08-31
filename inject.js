'use strict';

//alert("test 4 worked");
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        // where the text can be set from template
        //{code: 'document.getElementById("description").value=\'hello\';'});
        {
          code:
            `// This assumes no other attribute is with label for=description
            var descriptionForm = document.getElementById("description");
            
            // example
            var newEl = document.createElement('div');
            newEl.innerHTML = '<p>Hello World!</p>';
            
            descriptionForm.parentNode.insertBefore(newEl, descriptionForm);
            `
        }
    );
});