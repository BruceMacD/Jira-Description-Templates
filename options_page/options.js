'use strict';

let addNewTemplate = document.getElementById('addNewTemplate');
let saveTemplate = document.getElementById('saveTemplate');
let newTemplate = document.getElementById('newTemplate');
let templateText = document.getElementById('template');
let templateTitle = document.getElementById('title');

//hide to start
newTemplate.style.display = "none";

var templateContainer = document.getElementById('templateContainer'); 

chrome.storage.sync.get(["templates"], function(storedTemplates) {

  var templateCount = Object.keys(storedTemplates.templates).length;
  // populate the container with template buttons
  for(var i = 0; i < templateCount; i++) {
    var temp = storedTemplates.templates[i];

    var div = document.createElement("div");
    templateContainer.appendChild(div);

    var button = document.createElement('button');
    button.className = "btn btn-info";
    button.innerHTML = temp.title;
    button.value = temp.template;
    button.onclick = function(element){
      console.log(element.target.value);
    }

    templateContainer.appendChild(button);
  };
});

addNewTemplate.onclick = function(element) {
  // show dialog
  newTemplate.style.display = "inline";
  addNewTemplate.style.display = "none";
};

saveTemplate.onclick = function(element) {
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
    // save the values to local storage
    chrome.storage.sync.get(["templates"], function(storedTemplates) {
      // For debug
      console.log('Stored tempates:');
      console.log(storedTemplates);

      var entries = storedTemplates.templates;
      var newEntry = {
        "title": titleVal,
        "template": templateVal
      };
      entries.push(newEntry);

      chrome.storage.sync.set({ "templates": entries }, function(){
        console.log("templates updated");
      });
      // For debug
      //chrome.storage.sync.get(["templates"], function(storedTemplates) { console.log(storedTemplates)});
    });

    location.reload();
  }
};
