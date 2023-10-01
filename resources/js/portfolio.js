
// Get the navbar
var navbar = document.getElementById("topnavbar");


// Show or hide the navbar
function showNav() {

  if (navbar.classList.contains("hidden")) {
    navbar.classList.remove("hidden");
  } else {
    navbar.classList.add("hidden");
  }
}

function change(id){
  var activeSpans = document.getElementsByClassName("active");
  for (i in activeSpans){
    try{
      activeSpans[i].classList.remove("active");
    }
    catch(err){}
  }
  document.getElementById(id).classList.add("active");

  var activeDivs = document.getElementsByClassName("text_div");
  for (i in activeDivs){
    try{
      activeDivs[i].classList.add("none");
      if (activeDivs[i].id == (id+"_div")){
        activeDivs[i].classList.remove("none");
      }
    }
    catch(err){}
  }
}

window.onload = ()=>{
  change("summary");
}