let title = document.querySelector(".Title");
let squares = document.querySelectorAll(".square");
let turn = "x";

// function for kill time

function end(num1, num2, num3) {
  title.innerHTML = `${squares[num1].innerHTML} is the winner`;
  squares[num1].style.background = "#F2CD5C";
  squares[num2].style.background = "#F2CD5C";
  squares[num3].style.background = "#F2CD5C";
}

// palying function

function winner(ele) {
  if (
    ele[0].innerHTML === ele[1].innerHTML &&
    ele[1].innerHTML === ele[2].innerHTML &&
    ele[1].innerHTML !== ""
  ) {
    end(0, 1, 2);
  } else if (
    ele[3].innerHTML === ele[4].innerHTML &&
    ele[4].innerHTML === ele[5].innerHTML &&
    ele[5].innerHTML !== ""
  ) {
    end(3, 4, 5);
  } else if (
    ele[6].innerHTML === ele[7].innerHTML &&
    ele[7].innerHTML === ele[8].innerHTML &&
    ele[7].innerHTML !== ""
  ) {
    end(6, 7, 8);
  } else if (
    ele[0].innerHTML === ele[3].innerHTML &&
    ele[3].innerHTML === ele[6].innerHTML &&
    ele[3].innerHTML !== ""
  ) {
    end(0, 3, 6);
  } else if (
    ele[1].innerHTML === ele[4].innerHTML &&
    ele[4].innerHTML === ele[7].innerHTML &&
    ele[7].innerHTML !== ""
  ) {
    end(1, 4, 7);
  } else if (
    ele[2].innerHTML === ele[5].innerHTML &&
    ele[5].innerHTML === ele[8].innerHTML &&
    ele[2].innerHTML !== ""
  ) {
    end(2, 5, 8);
  } else if (
    ele[0].innerHTML === ele[4].innerHTML &&
    ele[4].innerHTML === ele[8].innerHTML &&
    ele[4].innerHTML !== ""
  ) {
    end(0, 4, 8);
  } else if (
    ele[2].innerHTML === ele[4].innerHTML &&
    ele[4].innerHTML === ele[6].innerHTML &&
    ele[2].innerHTML !== ""
  ) {
    end(2, 4, 6);
  } else if (
    ele[0].innerHTML !== "" &&
    ele[1].innerHTML !== "" &&
    ele[2].innerHTML !== "" &&
    ele[3].innerHTML !== "" &&
    ele[4].innerHTML !== "" &&
    ele[5].innerHTML !== "" &&
    ele[6].innerHTML !== "" &&
    ele[6].innerHTML !== "" &&
    ele[7].innerHTML !== "" &&
    ele[8].innerHTML !== ""
  ) {
    title.innerHTML = "Draw";
  }
}

//title text function

function game(id) {
  let ele = document.getElementById(id);
  if (turn == "x" && ele.innerHTML == "") {
    ele.innerHTML = "x";
    turn = "o";
    title.innerHTML = "o turn";
  } else if (turn == "o" && ele.innerHTML == "") {
    ele.innerHTML = "o";
    turn = "x";
    title.innerHTML = "x turn";
  }
  winner(squares);
}
//reset function
document.querySelector(".reset").addEventListener("click", () => {
  setInterval(function () {
    title.innerHTML += ".";
  }, 800);
  setTimeout(function () {
    location.reload();
  }, 3000);
});
// +++++++++++++++++++++++++
