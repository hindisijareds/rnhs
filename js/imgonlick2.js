window.onload = pageLoad;

function pageLoad() {
    var startButton = document.getElementById("imgclick2");

    startButton.onclick = myRuntime;
}

function myRuntime() {
var activeImageId = 1;
var nextImageId = 1;

setInterval(function(){
nextImageId = nextImageId + 1;

if(nextImageId < 4) {
	document.getElementById("ing"+activeImageId).classList.replace("visible2", "hidden2");
	document.getElementById("ing"+nextImageId).classList.replace("hidden2", "visible2");
	activeImageId = nextImageId;
	
	} else{
	document.getElementById("ing"+activeImageId).classList.replace("visible2", "hidden2");
	document.getElementById("ing"+nextImageId).classList.replace("hidden2", "visible2");
	
	activeImageId = 4;
	nextImageId = 0;
	}
	
	},2000);}