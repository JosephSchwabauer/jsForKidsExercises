var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var points = [[50, 50], [50, 100], [100, 100], [100, 50], [50, 50]];


function connectDots(newArray) {

    for (var x = 0; x < newArray.length; x++) {
        for (var y = 0; y < 2; y++) {
            ctx.moveTo(newArray[x][y], newArray[x][y+1]);
            ctx.lineTo(newArray[x+1][y], newArray[x+1][y+1]);
            ctx.stroke();
        }
    }
}

connectDots(points);
