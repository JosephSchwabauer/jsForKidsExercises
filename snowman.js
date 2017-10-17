var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

ctx.lineWidth = 4;
ctx.strokeStyle = "red";
ctx.beginPath();
//head
ctx.arc(360, 90, 10, Math.PI * 2, false);
ctx.stroke();
//left eye
ctx.beginPath();
ctx.arc(310, 90, 10, Math.PI * 2, false);
ctx.stroke();
//right eye
ctx.beginPath();
ctx.arc(333, 111, 85, Math.PI * 2, false);
ctx.stroke();
//nose
ctx.beginPath();
ctx.arc(337, 110, 10, Math.PI * 2, false);
ctx.stroke();

//body
ctx.beginPath();
ctx.arc(333, 333, 135, Math.PI * 2, false);
ctx.stroke();

ctx.beginPath();
ctx.arc(337, 263, 10, Math.PI * 2, false);
ctx.stroke();
ctx.beginPath();
ctx.arc(337, 333, 10, Math.PI * 2, false);
ctx.stroke();
ctx.beginPath();
ctx.arc(337, 403, 10, Math.PI * 2, false);
ctx.stroke();
