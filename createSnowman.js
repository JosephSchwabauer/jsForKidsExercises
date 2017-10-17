var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
ctx.lineWidth = 4;
function drawSnowman(x, y) {
    //left eye
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.arc(x, y, 10, Math.PI * 2, false);
    ctx.stroke();
    //right eye
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.arc((x-47), y, 10, Math.PI * 2, false);
    ctx.stroke();
    //head
    ctx.strokeStyle = "purple";
    ctx.beginPath();
    ctx.arc((x-27), (y+21), 85, Math.PI * 2, false);
    ctx.stroke();
    //nose
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.arc((x-23), (y+20), 10, Math.PI * 2, false);
    ctx.stroke();

    //body
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.arc((x-27), (y+243), 135, Math.PI * 2, false);
    ctx.stroke();

    //top button
    ctx.strokeStyle = "pink";
    ctx.beginPath();
    ctx.arc((x-23), (y+173), 10, Math.PI * 2, false);
    ctx.stroke();
    //mid button
    ctx.strokeStyle = "orange";
    ctx.beginPath();
    ctx.arc((x-23), (y+243), 10, Math.PI * 2, false);
    ctx.stroke();
    //bottom button
    ctx.strokeStyle = "silver";
    ctx.beginPath();
    ctx.arc((x-23), (y+313), 10, Math.PI * 2, false);
    ctx.stroke();
};


drawSnowman(100,100);
