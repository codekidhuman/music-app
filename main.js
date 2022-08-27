var mouseEvent = "";
var radius = "";
var colour = "";
var width = "";
canvas = document.getElementById("can");
ctx= canvas.getContext("2d");
canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e)
{
    mouseEvent = ("mousedown");
    colour = document.getElementById("colour").value;
    radius = document.getElementById("radius").value;
    width = document.getElementById("WOL").value;
    console.log(mouseEvent);

}
canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e)
{
    mouseEvent = ("mouseup");
    console.log(mouseEvent);
}
canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e)
{
    mouseEvent = ("mouseleave");
    console.log(mouseEvent);

}
canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e)
{
    console.log(mouseEvent);

    var curx = e.clientX - canvas.offsetLeft;
    var cury = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width;
        console.log(curx+", "+cury);
        ctx.arc(curx, cury, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
}