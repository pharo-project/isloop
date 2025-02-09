function toggleTopMenu() {
  var x = document.getElementById("nav-buttons");
  if (x.className === "nav-buttons") {
    x.className += " responsive";
  } else {
    x.className = "nav-buttons";
  }
}