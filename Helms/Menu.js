/* Menu Toggle */
function menuOpen() {
  var element = document.getElementById("myDIV");
  element.classList.toggle("mystyle");

  var element2 = document.getElementById("span2");
  element2.classList.toggle("rotate");

  var element3 = document.getElementById("span3");
  element3.classList.toggle("rotate2");

  var element4 = document.getElementById("span1");
  if (element4.style.display === "none") {
    element4.style.display = "block";
  } else {
    element4.style.display = "none";
  }

  var element5 = document.getElementById("span4");
  if (element5.style.display === "none") {
    element5.style.display = "block";
  } else {
    element5.style.display = "none";
  }
}

function menuClose() {
  var element = document.getElementById("myDIV");
  element.classList.toggle("menu");

  var element2 = document.getElementById("span2");
  element2.classList.toggle("rotate");

  var element3 = document.getElementById("span3");
  element3.classList.toggle("rotate2");
}

document.getElementById("menuButton").addEventListener("click", menuOpen);
document.getElementByClass("menu").addEventListener("click", menuClose);
