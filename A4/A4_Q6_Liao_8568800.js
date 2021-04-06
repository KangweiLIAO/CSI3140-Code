const canvas = document.getElementById("canvas");
var ctext = canvas.getContext("2d");
ctext.beginPath();
ctext.arc(canvas.width/2, canvas.height/2, 80, 1, 2 * Math.PI);

var grd = ctext.createLinearGradient(150, 100, 150, 300);
grd.addColorStop(0, "#D16BA5");
grd.addColorStop(.5, "#86A8E7");
grd.addColorStop(1, "#5FFBF1");

ctext.fillStyle = grd;
ctext.fill();