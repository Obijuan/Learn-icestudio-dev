console.log("Holiiiii!");

let win = nw.Window.get();

console.log("Posicion x: " + win.x);

let disp1 = document.getElementById("disp1");

let pos_x = 0;
let pos_y = 0;
let vel_x = 5;

setInterval(()=>{
  pos_x += vel_x;

  if (pos_x <= 0) {
    vel_x = -vel_x;
    pos_x = 1;
  }
  if (pos_x >= 100) {
    vel_x = -vel_x;
  }
  if (pos_x <= 0) {
    vel_x = -vel_x;
  }
  disp1.innerHTML = win.x;
  //disp1.innerHTML = pos_x;
  //win.x = pos_x;
  //win.y = pos_y;
}, 500)