let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let modalHire = document.getElementById("hireModal");
let btnHire = document.getElementById("btn-hire");
let spanHire = document.getElementsByClassName("closeHire")[0];

btnHire.onclick = function() {
  modalHire.style.display = "block";
}
spanHire.onclick = function() {
  modalHire.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalHire) {
    modalHire.style.display = "none";
  }
}
