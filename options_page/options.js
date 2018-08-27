'use strict';

let addTemplate = document.getElementById('addTemplate');
let saveTemplate = document.getElementById('saveTemplate');
let newTemplate = document.getElementById('newTemplate');
let templateText = document.getElementById('template');
let templateTitle = document.getElementById('title');

//hide to start
newTemplate.style.display = "none";

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
  button.className = "btn btn-info";
  button.innerHTML = temp.title;
  button.value = temp.template;
  button.onclick = function(element){
    console.log(element.target.value);
  }

  templateContainer.appendChild(button);
};

addTemplate.onclick = function(element) {
  // show dialog
  newTemplate.style.display = "inline";
  addTemplate.style.display = "none";
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
    chrome.storage.sync.get(["storedTemplates"], function(templates) {
      console.log('Stored tempates:');
      console.log(templates);

      //TODO: Add new entry

      // var newEntry = {
      //   "title": titleVal,
      //   "template": templateVal
      // };

      // templates
      // chrome.storage.sync.set({ "yourBody": "myBody" }, function(){
      //   //  A data saved callback omg so fancy
      // });
    });

    addTemplate.style.display = "inline";
    newTemplate.style.display = "none";
  }
};
