canvas.addEventListener("mousedown", my_mouseDown);

function my_mousedown(e) {

    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    radius=document.getElementById("radius").value;

    mouseEvent="mouseDown";
}

canvas.addEventListener("mousemove" , my_mousedown);
function my_mousemove(e) {
    curent_position_of_mouse_x= e.clientX =canvas.offsetLeft;
    curent_position_of_mouse_y=e.clientY=canvas.offsetTop;

    if(mouseEvent=="mousedown"){
      console.log("Last position of x and y corinates=");
      console.log("x="  + current_position_of_x +"y=" +  current_position_of_y);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widh_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y,radius,0,2*Math.PI)
        ctx.stroke();
      }