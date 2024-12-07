function random() {
	
	let r = Math.floor(Math.random()*10);
	let page = document.getElementById("demo");
	page.innerHTML=r;
	page.style.backgroundColor="olive";
	page.style.color = "white";
	
}