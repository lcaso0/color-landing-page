window.onload = function() {
 document.getElementById("nav-home").classList.add("active-nav-link");
}


document.getElementById("nav-about").onclick = function() {
 var navhome = document.getElementById("nav-home").classList.contains("active-nav-link");
 var navservices = document.getElementById("nav-services").classList.contains("active-nav-link");
 if (navhome) {
  document.getElementById("nav-home").classList.remove("active-nav-link");
 }
 if (navservices) {
  document.getElementById("nav-services").classList.remove("active-nav-link");
 }
 
 document.getElementById("nav-about").classList.add("active-nav-link");
}

document.getElementById("nav-services").onclick = function() {
  var navhome = document.getElementById("nav-home").classList.contains("active-nav-link");
  var navabout = document.getElementById("nav-about").classList.contains("active-nav-link");
  if (navhome) {
   document.getElementById("nav-home").classList.remove("active-nav-link");
  }
  if (navabout) {
   document.getElementById("nav-about").classList.remove("active-nav-link");
  }

  document.getElementById("nav-services").classList.add("active-nav-link");
}


document.getElementById("nav-home").onclick = function() {
 var navabout = document.getElementById("nav-about").classList.contains("active-nav-link");
 var navservices = document.getElementById("nav-services").classList.contains("active-nav-link");
 if (navabout) {
  document.getElementById("nav-about").classList.remove("active-nav-link");
 }
 if (navservices) {
  document.getElementById("nav-services").classList.remove("active-nav-link");
 }
 
 document.getElementById("nav-home").classList.add("active-nav-link");
}