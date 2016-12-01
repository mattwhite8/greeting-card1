var flipTest = false;


document.addEventListener('DOMContentLoaded', function(){


document.getElementById("card").addEventListener("click",function(){
	if (flipTest === false) {
		document.getElementById("card").style.transition = "1s";
		document.getElementById("card").style.transform = "rotateY(180deg)";

		var imageDelete = document.getElementById("img-to-remove");

		imageDelete.outerHTML = "";

		
		delete imageDelete;

		flipTest = true;
		}
	else {
		document.getElementById("card").style.transition = "1s";
		document.getElementById("card").style.transform = "rotateY(0deg)";
		flipTest = false;
	}
	console.log("attempting to transform");
});







});