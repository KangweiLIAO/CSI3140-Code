const canvas = document.getElementById("canvas");
var ctext = canvas.getContext("2d");
ctext.font = "30px Arial";
ctext.textAlign = "center";
ctext.shadowOffsetX = 2; // offset-x of 2px
ctext.shadowOffsetY = 5; // offset-y of 5px
ctext.shadowBlur = 6; // blur of 6px
ctext.shadowColor = "grey"; // text shadow color gray
ctext.fillText("HTML5 Canvas", canvas.width / 2, canvas.height / 2);
