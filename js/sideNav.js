function toggleNav(x) {
	x.classList.toggle("change");
	
	document.getElementById("sidenav").style.width = 
	window.getComputedStyle(document.getElementById("sidenav")).width === 
	"0px" ? "160px" : "0px";

	document.getElementById("main").style.marginLeft = 
	window.getComputedStyle(document.getElementById("main")).marginLeft === 
	"0px" ? "160px" : "0px";
}
