console.log("State Changed!");

var els = document.querySelectorAll("a[href='/secure/CreateIssue!default.jspa']");

els.onclick = function(element) {
    console.log("Clicked create issue");
};
  

// This assumes no other attribute is with label for=description
// var descriptionForm = document.getElementById("description");
          
// // example
// var newEl = document.createElement('div');
// newEl.innerHTML = '<p>Hello World!</p>';
          
// descriptionForm.parentNode.insertBefore(newEl, descriptionForm);