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
