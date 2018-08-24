'use strict';

let addTemplate = document.getElementById('addTemplate');

// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = 'blue';
//   changeColor.setAttribute('value', data.color);
//  });

var templatesTest = 
{
  "templates":
  [
    {
      "title": "BUG",
      "template": "hello \nbug"
    },
    {
      "title": "FEATURE",
      "template": "hello \nfeature"
    }
  ]
};

var templateCount = Object.keys(templatesTest.templates).length;
var templateContainer = document.getElementById('templateContainer'); 

// populate the container with template buttons
for(var i = 0; i < templateCount; i++) {
  var temp = templatesTest.templates[i];

  var div = document.createElement("div");
  templateContainer.appendChild(div);

  var button = document.createElement('button');
  button.innerHTML = temp.title;
  // button.onclick = function(element){
  //   alert(temp.template);
  // }

  templateContainer.appendChild(button);
};

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
            var descriptionForm = document.getElementById("description");
            
            // example
            var newEl = document.createElement('div');
            newEl.innerHTML = '<p>Hello World!</p>';
            
            descriptionForm.parentNode.insertBefore(newEl, descriptionForm);
            `
        }
      );
  });
};
