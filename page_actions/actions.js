'use strict';

let addNewTemplate = document.getElementById('addNewTemplate');
let saveTemplate = document.getElementById('saveTemplate');
let newTemplate = document.getElementById('newTemplate');
let templateText = document.getElementById('template');
let templateTitle = document.getElementById('title');
let cancelButton = document.getElementById('cancelButton');

// hide to start
newTemplate.style.display = "none";

var templateContainer = document.getElementById('templateContainer');

// utility function for updating templates in local storage
function updateStoredTemplates(title, val) {
  // save the values to local storage
  chrome.storage.sync.get(["templates"], function(storedTemplates) {
    var entries = storedTemplates.templates;
    var newEntry = {
      "title": title,
      "template": val
    };
    entries.push(newEntry);

    chrome.storage.sync.set({ "templates": entries }, function(){
      console.log("templates updated");
    });
  });

  location.reload();
}

// utility function for creating stored templates
function createTemplate() {
  // get the values
  var titleVal = title.value;
  var templateVal = template.value;

  title.classList.remove("is-invalid");
  template.classList.remove("is-invalid");

  if (titleVal === "" || templateVal === "") {
    if (titleVal === "") {
      title.classList.add("is-invalid");
    }
    if (templateVal === "") {
      template.classList.add("is-invalid");
    }
  } else {
    // remove the old entry if updating
    updateStoredTemplates(titleVal, templateVal);
  }
}

// load the stored templates as buttons
chrome.storage.sync.get(["templates"], function(storedTemplates) {

  var templateCount = Object.keys(storedTemplates.templates).length;
  // populate the container with template buttons
  for(var i = 0; i < templateCount; i++) {
    var temp = storedTemplates.templates[i];

    var div = document.createElement("div");
    templateContainer.appendChild(div);

    // create the button for the template entry
    var button = document.createElement('button');
    button.className = "btn btn-info";
    button.innerHTML = temp.title;
    button.value = temp.template;
    button.id = "templateButton";
    button.onclick = function(element){
      var tempValue = element.target.value.split(/\r?\n/);
      // create a string of code to inject, this is more readable
      var injectCode = "";
      injectCode += "var descriptionForm = document.getElementById(\"description\");";
      // clear the form value
      injectCode += "descriptionForm.value = '';";
      
      // iteratively add each line so we can inject a multilined string value
      injectCode += "descriptionForm.value += `";
      tempValue.forEach(function(entry) {
        injectCode += entry + "\n";
      });
    
      // close the multiline input
      injectCode += "`";

      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            // where the text can be set from template
            //{code: 'document.getElementById("description").value=\'hello\';'});
            {
              code:
                injectCode
            }
          );
      });
    }

    // add the buttons to the view
    templateContainer.appendChild(button);
  };
});

addNewTemplate.onclick = function(element) {
  // show dialog
  newTemplate.style.display = "inline";
  addNewTemplate.style.display = "none";
};

saveTemplate.onclick = function(element) {
  createTemplate(update);
};

cancelButton.onclick = function(element) {
  location.reload();
};

/*
Code to inject buttons:

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
*/