document.getElementById("ba1").addEventListener("click", fun1);
document.getElementById("ba2").addEventListener("click", fun1);
document.getElementById("ba3").addEventListener("click", fun1);
document.getElementById("ba4").addEventListener("click", fun1);
document.getElementById("ba5").addEventListener("click", fun1);
document.getElementById("ba6").addEventListener("click", fun1);
document.getElementById("ba7").addEventListener("click", fun1);
document.getElementById("ba8").addEventListener("click", fun1);
document.getElementById("ba9").addEventListener("click", fun1);

function fun1() {
  let x = this;
  let s = x.parentNode;
  let list = s.childNodes;
  let r = list[1];

  if (r.textContent === "X") {
    r.innerHTML = "O";
    r.value = "O";
  } else {
    r.innerHTML = "X";
    r.value = "X";
  }
  console.log(r.value);
  check();
}

function check() {
  let val1 = document.getElementById("s1").value;
  let val2 = document.getElementById("s2").value;
  let val3 = document.getElementById("s3").value;
  let val4 = document.getElementById("s4").value;
  let val5 = document.getElementById("s5").value;
  let val6 = document.getElementById("s6").value;
  let val7 = document.getElementById("s7").value;
  let val8 = document.getElementById("s8").value;
  let val9 = document.getElementById("s9").value;
  ///HORIZONTAL
  if (val1 === val2 && val2 === val3 && val1 != null) {
    document.getElementById("line1").style.visibility = "visible";
  } else {
    document.getElementById("line1").style.visibility = "hidden";
  }

  if (val4 === val5 && val5 === val6 && val4 != null) {
    document.getElementById("line2").style.visibility = "visible";
  } else {
    document.getElementById("line2").style.visibility = "hidden";
  }

  if (val7 === val8 && val8 === val9 && val7 != null) {
    document.getElementById("line3").style.visibility = "visible";
  } else {
    document.getElementById("line3").style.visibility = "hidden";
  }
  //VERTICAL
  if (val1 === val4 && val4 === val7 && val7 != null) {
    document.getElementById("line4").style.visibility = "visible";
  } else {
    document.getElementById("line4").style.visibility = "hidden";
  }
  if (val2 === val5 && val5 === val8 && val2 != null) {
    document.getElementById("line5").style.visibility = "visible";
  } else {
    document.getElementById("line5").style.visibility = "hidden";
  }
  if (val3 === val6 && val6 === val9 && val3 != null) {
    document.getElementById("line6").style.visibility = "visible";
  } else {
    document.getElementById("line6").style.visibility = "hidden";
  }
  //OBLIQUE
  if (val1 === val5 && val5 === val9 && val1 != null) {
    document.getElementById("line7").style.visibility = "visible";
  } else {
    document.getElementById("line7").style.visibility = "hidden";
  }
  if (val3 === val5 && val5 === val7 && val3 != null) {
    document.getElementById("line8").style.visibility = "visible";
  } else {
    document.getElementById("line8").style.visibility = "hidden";
  }
}
