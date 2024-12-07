/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function drpdwnw() {
  document.getElementById("drpdwncw").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function drpdwnp() {
  document.getElementById("drpdwncp").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}





/*function random() {
	
	let r = Math.floor(Math.random()*10);
	let page = document.getElementById("demo");
	page.innerHTML=r;
	page.style.backgroundColor="olive";
	page.style.color = "white";
	
}
*/



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