console.log("Holiiiii!");

//-- Crear una ventana NW
let win = nw.Window.get();

//-- Imprimir en la consola la posicion inicial
console.log("Posicion x: " + win.x);

//-- Bloque donde escribir la posicion x de la ventana
let disp1 = document.getElementById("disp1");

//-- Mostrar la posicion x de la ventana
//-- cada medio segundo
setInterval(()=>{
  disp1.innerHTML = win.x;
}, 500)
