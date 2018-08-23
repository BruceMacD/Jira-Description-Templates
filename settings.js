'use strict';

let addTemplate = document.getElementById('addTemplate');

// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = 'blue';
//   changeColor.setAttribute('value', data.color);
//  });

addTemplate.onclick = function(element) {
  //let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        // where the text can be set from template
        //{code: 'document.getElementById("description").value=\'hello\';'});
        {
          code:
            `// This assumes no other attribute is with label for=description
            let descriptionForm = document.getElementById("description");
            
            // example
            var newEl = document.createElement('div');
            newEl.innerHTML = '<p>Hello World!</p>';
            
            descriptionForm.parentNode.insertBefore(newEl, descriptionForm);
            `
        }
      );
  });
};
