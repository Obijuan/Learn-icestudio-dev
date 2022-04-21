console.log("Running...Ex02-params");

//-- Get the display
let display = document.getElementById('disp');

let p1 = `nw: ${process.versions['nw']}`;
let p2 = `nw flavor: ${process.versions['nw-flavor']}`;

//-- Read the arguments
let args = `Arguments: ${nw.App.argv}`;

display.innerHTML = `
  <ul>
    <li> ${p1} </li>
    <li> ${p2} </li>
    <li> ${args} </li>
  </ul>
`;


