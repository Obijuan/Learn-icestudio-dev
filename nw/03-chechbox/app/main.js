console.log("Running...Ex03-checkbox");

//-- Get the display
let display = document.getElementById('disp');

//-- Get the button
let buttonDisable = document.getElementById('buttonDisable');

//-- Get the checkbox
let checkbox = document.getElementById('checkbutton');

buttonDisable.addEventListener('click', () => {
  display.innerHTML = "Checkbutton DISABLED";
  checkbox.setAttribute("disabled", '');
});

buttonEnable.addEventListener('click', () => {
  display.
  innerHTML = "Checkbutton ENABLED";
  checkbox.removeAttribute('disabled');
});




