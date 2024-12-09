/*Antonio's code*/
/* When the user goes over the button/leaves the dropdown content menu toggle between hiding and showing the dropdown content */
function drpdwnw() {
	document.getElementById("drpdwncw").classList.toggle("show");
}
function drpdwnp() {
	document.getElementById("drpdwncp").classList.toggle("show");
}




/* main/home page JS array+random func for img */

function swap(){
	let array=["img/earth.png", "img/dove_main.png", "img/soldier.png", "img/earth_flat.png"];
	for (let i = 0; i < 4; i++) {
		let doc=document.getElementById(i);
		let lng=array.length;
		let img=array[Math.floor(Math.random()*lng)]
		doc.setAttribute("src", img);
	}
}

/* info page JS form valid */

function validate() {
	let valid = true;
	let msge = "Incomplete form: ";
	if (document.getElementById("name").value == "") {
		msge += "You need to fill in the name. ";
		valid = false;
	}
	if(document.getElementById("name").value == "Rick" && document.getElementById("sname").value == "Astley") {
		window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
	}
	if (document.getElementById("sname").value == "") {
		msge += "You need to fill in the surname. ";
		valid = false;
	}
	if (document.getElementById("mail").value.indexOf('@')<0) {
		msge += "Invalid email. ";
		valid = false;
	}

	if (document.getElementById("fback").value == "") {
		msge += "You need to fill in feedback. ";
		valid = false;
	}
	if (!valid) {
		document.getElementById("details").innerHTML = msge;
	} else {
		let name = document.getElementById("name").value;
		document.getElementById("details").innerHTML = "Good luck and farewell, " + name;
	}
	return valid;
}

/*additional info peace js*/
let txtn = 0;

function nexttxt() {
	/* Array with the different text options for both header and txt all in one*/
	let randtext = [
		"Long-Term Sustainability", 
		"Living in peace allows us to focus on long-term planning and ensuring a sustainable future. As well as the development of necessary infrastructure, protection of the environment, and economic planning that meets the current and future needs of the world.",
		"World wide Peace", 
		"Peace across the world, allows nations to collaborate on issues like climate change, human rights, and global health. By avoiding conflict we are more likely to work together for the common good of humanity. Peace throughout the world would also mean an end to the senseless loss of human life in war.",
		"Earth's recovery", 
		"We tend to value human life above all others, but it's not the only casualty of constant war. That is to say, peace would bring about a time of recovery for the Earth itself. Not to mention that it would allow the many living creatures apart from humans a chance to recover from the carnage wrought by war."
	];

	/*header*/
	let headerText = randtext[txtn];
	
	document.getElementById("txh").innerText = headerText;

	/*paragraph*/
	let paragraphText = randtext[txtn + 1];

	document.getElementById("txt").innerText = paragraphText;

	/* increment*/
	txtn += 2;

	/*reset*/
	if (txtn >= randtext.length) {
		txtn = 0;
	}
}


let cimg = 0;

function nextimg() {
	let array = ["img/gandhi1.png", "img/gandhi2.png", "img/mandela1.jpg", "img/mandela2.jpg"];
	
	let doc = document.getElementById("img");
	
	/* Set the src to be that of the current array element*/
	doc.setAttribute("src", array[cimg]);
	
	/*increment*/
	cimg++;
	
	/*reset*/
	if (cimg >= array.length) {
		cimg = 0;
	}
}




