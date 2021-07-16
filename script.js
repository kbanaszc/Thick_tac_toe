document.getElementById("ba1").addEventListener("click", fun1);
document.getElementById("ba2").addEventListener("click", fun1);
document.getElementById("ba3").addEventListener("click", fun1);
document.getElementById("ba4").addEventListener("click", fun1);
document.getElementById("ba5").addEventListener("click", fun1);
document.getElementById("ba6").addEventListener("click", fun1);
document.getElementById("ba7").addEventListener("click", fun1);
document.getElementById("ba8").addEventListener("click", fun1);
document.getElementById("ba9").addEventListener("click", fun1);
document.getElementById("replay").addEventListener("click", fun2);

let board = [];
let line_flag = 0;

function fun1() {
  let x = this;
  let s = x.parentNode;
  let list = s.childNodes;
  let r = list[1];
  let name = r.id[1];

  console.log(board.includes(name));
  if (r.value != "X" && r.value != "O" && line_flag === 0) {
    r.innerHTML = "X";
    r.value = "X";
    board.push(parseInt(name));
    console.log(board);
    check("X");
    if (line_flag === 0) {
      if (board.length === 9) {
        document.getElementById("message").style.visibility = "visible";
        document.getElementById("who").innerHTML = "TIE";
        document.getElementById("winner").innerHTML = "";
        document.getElementById("map").style.opacity = "50%";
      }
      ai_player();
      console.log(board);
    }
  }
}

function ai_player() {
  let done = 1;
  let random_number;
  let space_limit_flag = 0;
  let r;
  while (done === 1) {
    space_limit_flag++;
    if (space_limit_flag > 6) break;
    random_number = random_fun();
    r = document.getElementById("s" + random_number);

    console.log(r.id);
    if (r.value != "X" && r.value != "O") {
      done = 0;
    }
  }

  r.innerHTML = "O";
  r.value = "O";
  board.push(random_number);
  check("0");
}

function random_fun() {
  let random_number = 0;
  while (random_number === 0) {
    random_number = (Math.random() * 100) % 10;
    random_number = Math.floor(random_number);
  }
  return random_number;
}

function check(player) {
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
    line_flag = 1;
  } else if (val4 === val5 && val5 === val6 && val4 != null) {
    document.getElementById("line2").style.visibility = "visible";
    line_flag = 1;
  } else if (val7 === val8 && val8 === val9 && val7 != null) {
    document.getElementById("line3").style.visibility = "visible";
    line_flag = 1;
  }
  //VERTICAL
  else if (val1 === val4 && val4 === val7 && val7 != null) {
    document.getElementById("line4").style.visibility = "visible";
    line_flag = 1;
  } else if (val2 === val5 && val5 === val8 && val2 != null) {
    document.getElementById("line5").style.visibility = "visible";
    line_flag = 1;
  } else if (val3 === val6 && val6 === val9 && val3 != null) {
    document.getElementById("line6").style.visibility = "visible";
    line_flag = 1;
  }
  //OBLIQUE
  else if (val1 === val5 && val5 === val9 && val1 != null) {
    document.getElementById("line7").style.visibility = "visible";
    line_flag = 1;
  } else if (val3 === val5 && val5 === val7 && val3 != null) {
    document.getElementById("line8").style.visibility = "visible";
    line_flag = 1;
  }

  if (line_flag === 1) {
    document.getElementById("message").style.visibility = "visible";
    document.getElementById("who").innerHTML = player;
    document.getElementById("winner").innerHTML = "wins";
    document.getElementById("map").style.opacity = "50%";
  }
}

function fun2() {
  location.reload();
}
