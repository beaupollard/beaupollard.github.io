var Journal1 = document.getElementById("J1");
var Journal2 = document.getElementById("J2");
var Journal3 = document.getElementById("J3");
var CF1 = document.getElementById("C1");
var CF2 = document.getElementById("C2");
var CF3 = document.getElementById("C3");
var CF4 = document.getElementById("C4");


var experiments = document.getElementById("Foil1");
var experimentsvid = document.getElementById("Dye-foil");
var experimentsF = document.getElementById("Foil2");
var experimentsvidF = document.getElementById("FoilC");

var experimentsvid = document.getElementById("Dye-foil");
var experimentsF = document.getElementById("Foil2");
var experimentsvidF = document.getElementById("FoilC");

var counter = 0;
var i;
var Paperlink;

Journal1.addEventListener("click", Paperlink);
Journal2.addEventListener("click", Paperlink);
Journal3.addEventListener("click", Paperlink);
CF1.addEventListener("click", Paperlink);
CF2.addEventListener("click", Paperlink);
CF3.addEventListener("click", Paperlink);
CF4.addEventListener("click", Paperlink);

function Paperlink(){
	var PaperID = this.attributes["J_paper"].value;
	var Paperin = document.getElementById(PaperID);
	
	if (Paperin.className === "vids"){
		Paperin.className = "hiding";
	} else{
		Paperin.className = "vids"; 
	}	
}