function toggleNav(x) {
    x.classList.toggle("change");
	document.getElementById("mySidenav").style.width = 
	window.getComputedStyle(document.getElementById("mySidenav")).width === 
	"0px" ? "15vw" : "0px";

}
