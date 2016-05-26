// JavaScript Document
var gametitle = "Pumpkin Game";
var pumpkinpatch ="";
var nunpumpkins = 0;
document.getElementById("title").innerHTML = gametitle;


function addPumpkin(event) {
	var yAdjust = 8;
	var xAdjust = 360;
	
	var randomPumpkin = Math.floor((Math.random() * 4) + 1);
	var x = event.clientX - xAdjust;
    var y = event.clientY + yAdjust;
	
	pumpkinpatch += "<div class='pumpkin" + randomPumpkin + "' style='left: " + x + "px; top:" + y + "px;'></div>";
	document.getElementById("container").innerHTML = pumpkinpatch;
	nunpumpkins++;
	document.getElementById("numbertitle").innerHTML = nunpumpkins;
}







// ignore the code down here, it is Jquery.
$("#container").mousemove(function(e){
      $('.follow').css({'top': e.clientY + 20, 'left': e.clientX - 50});
});