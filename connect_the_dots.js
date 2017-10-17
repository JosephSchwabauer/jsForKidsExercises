var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var points = [[50, 50], [50, 100], [100, 100], [100, 50], [50, 50]];

ctx.stokeStyle = "red";
ctx.lineWidth = 4;
ctx.beginPath();
ctx.moveTo(points[0][0], points[0][1]);
ctx.lineTo(points[1][0], points[1][1]);
ctx.stroke();
ctx.moveTo(points[1][0], points[1][1]);
ctx.lineTo(points[2][0], points[2][1]);
ctx.stroke();
ctx.moveTo(points[2][0], points[2][1]);
ctx.lineTo(points[3][0], points[3][1]);
ctx.stroke();
ctx.moveTo(points[3][0], points[3][1]);
ctx.lineTo(points[4][0], points[4][1]);
ctx.stroke();
