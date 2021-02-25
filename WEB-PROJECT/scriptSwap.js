var i=0;
var image=document.getElementById("image");
var imgs=new Array('history1.jpg','history2.jpg', 'history3.jpg');
function imgsrc() {
	i++;
	i%=imgs.length;
	image.src = imgs[i];
}