// Select all checkboxes with the name 'settings' using querySelectorAll.
var checkboxes = document.querySelectorAll("input[type=checkbox]");
let enabledSettings = []

/*
For IE11 support, replace arrow functions with normal functions and
use a polyfill for Array.forEach:
https://vanillajstoolkit.com/polyfills/arrayforeach/
*/

// Use Array.forEach to add an event listener to each checkbox.
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function(event) {
    var parent= this.parentNode;
    children = parent.children;
    if(event.target.checked){
        parent.style.backgroundColor = '#D18000';
        children[1].style.color = '#FFF'
    }
    else{
        parent.style.backgroundColor = '#fff';
        children[1].style.color = '#323232'
    }

  })
});