var lp_x,lp_y
canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line=1
var width = screen.width;
new_width=screen.width - 70;
new_height=screen.height - 300;
if (width < 992)
{
    document.getElementById("my_canvas").width=new_width;
    document.getElementById("my_canvas").height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("line_width").value;
    lp_x=e.touches[0].clientX-canvas.offsetLeft;
    lp_y=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
    current_position_of_touchx=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_touchy=e.touches[0].clientY-canvas.offsetTop;

    ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
     ctx.moveTo(lp_x,lp_y);
     ctx.lineTo(current_position_of_touchx,current_position_of_touchy);
     ctx.stroke();
    
    lp_x=current_position_of_touchx;
    lp_y=current_position_of_touchy;
}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}