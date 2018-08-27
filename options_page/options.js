'use strict';

let addTemplate = document.getElementById('addTemplate');
let saveTemplate = document.getElementById('saveTemplate');
let newTemplate = document.getElementById('newTemplate');

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
  // save the values to local storage
  addTemplate.style.display = "inline";
  newTemplate.style.display = "none";
};
