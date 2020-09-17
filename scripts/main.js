var experiments = document.getElementById("Foil1");
var experimentsvid = document.getElementById("Dye-foil");
var experimentsF = document.getElementById("Foil2");
var experimentsvidF = document.getElementById("FoilC");

var counter = 0;
var i;
var myVar;

experiments.addEventListener("click", vidLink);
experimentsF.addEventListener("click", vidLink);

function vidLink(){
	var vidID = this.attributes["data-vid"].value;
	var vidin = document.getElementById(vidID);
	if (vidin.className === "vids"){
		vidin.className = "";
		vidin.play();
	} else{
		vidin.className = "vids";
		vidin.load();
	}	
}



/* myVar = setInterval(display_Pic(pics,counter), 3000);

function display_Pic(pics,counter){
	alert("Beau");
	for (i=0; i<pics.length; i++){
		if (i !== counter) {
			pics[i].className === "vids";
		}
	}
	
	pics[counter].className === "";
	counter = counter+1;
	if (counter==3){
		counter = 0;
	}
	
} */

/* experiments.addEventListener("click", function(){
	if (experimentsvid.className === "vids"){
		experimentsvid.className = "";
		experimentsvid.play();
	} else{
		experimentsvid.className = "vids";
		experimentsvid.load();
	}
}); */
	



/* var numone = document.getElementById("num-one");
var numtwo = document.getElementById("num-two");
var addsum = document.getElementById("add-sum");

numone.addEventListener("input", add);
numtwo.addEventListener("input", add);

function add(){
	var one = parseFloat(numone.value) || 0;
	var two = parseFloat(numtwo.value) || 0;
	addsum.innerHTML = "your sum is:" + (one+two);
} */
	

//var myList = ['Beau','apples','oranges'];

//myList[3] = 12;

//alert('Beau');


//function go(name, age){
//	alert(name);
//	alert(age);
//}

//go('Beau',27);