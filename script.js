function investredir() {
  invbut = document.getElementById("investment")

  if (invbut) {
    window.location.href="https://tuc-website.lewiskerr1.repl.co/invest.html"
  }
}

function investalr() {
  con = document.getElementById("invbut");
  value = document.getElementById("invvalue");

  if (con) {
    alert("Congratulations! You have successfully invested $" + value + " into TUC!");
  }
  
}