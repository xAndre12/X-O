const row1 = document.querySelector(".row-1");
const row2 = document.querySelector(".row-2");
const row3 = document.querySelector(".row-3");
let start = document.querySelector(".start");
let cointainer = document.querySelector(".container");
let box = document.querySelector(".box");
let name1 = document.querySelector(".player1");
let name2 = document.querySelector(".player2");
const winningText = document.querySelector(".winningText");
let restart = document.querySelector(".restart");
let turn = 0;
let gameOn = true;
let player1;
let player2;

const bord = [row1.children, row2.children, row3.children];

const rowCheck = () => {
  let xNumber = 0;
  let oNumber = 0;
  for (let i = 0; i < 3; i++) {
    oNumber = 0;
    xNumber = 0;
    for (let j = 0; j < 3; j++) {
      if (bord[i][j].innerHTML === "x") {
        xNumber++;
      }
      if (bord[i][j].innerHTML === "o") {
        oNumber++;
      }
    }
    if (oNumber === 3) {
      winningText.innerHTML = `${player2} wins the game!`;
      winningText.style.display = "flex";
      gameOn = false;
      restart.style.display = "flex";
    }
    if (xNumber === 3) {
      winningText.innerHTML = `${player1} wins the game!`;
      winningText.style.display = "flex";
      gameOn = false;
      restart.style.display = "flex";
    }
  }
};
const colCheck = () => {
  let xNumber = 0;
  let oNumber = 0;
  for (let i = 0; i < 3; i++) {
    oNumber = 0;
    xNumber = 0;
    for (let j = 0; j < 3; j++) {
      if (bord[j][i].innerHTML === "x") {
        xNumber++;
      }
      if (bord[j][i].innerHTML === "o") {
        oNumber++;
      }
    }
    if (oNumber === 3) {
        winningText.innerHTML = `${player2} wins the game!`;
        winningText.style.display = "flex";
        gameOn = false;
        restart.style.display = "flex";
      }
      if (xNumber === 3) {
        winningText.innerHTML = `${player1} wins the game!`;
        winningText.style.display = "flex";
        gameOn = false;
        restart.style.display = "flex";
      }
  }
};
const primaryDiagonal = () => {
  let xNumber = 0;
  let oNumber = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i == j) {
        if (bord[i][j].innerHTML === "x") {
          xNumber++;
        }
        if (bord[i][j].innerHTML === "o") {
          oNumber++;
        }
      }
    }

    if (oNumber === 3) {
        winningText.innerHTML = `${player2} wins the game!`;
        winningText.style.display = "flex";
        gameOn = false;
        restart.style.display = "flex";
      }
      if (xNumber === 3) {
        winningText.innerHTML = `${player1} wins the game!`;
        winningText.style.display = "flex";
        gameOn = false;
        restart.style.display = "flex";
      }
  }
};
const secondaryDiagonal = () => {
  let xNumber = 0;
  let oNumber = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i + j == 2) {
        if (bord[i][j].innerHTML === "x") {
          xNumber++;
        }
        if (bord[i][j].innerHTML === "o") {
          oNumber++;
        }
      }
    }

    if (oNumber === 3) {
        winningText.innerHTML = `${player2} wins the game!`;
        winningText.style.display = "flex";
        gameOn = false;
        restart.style.display = "flex";
      }
      if (xNumber === 3) {
        winningText.innerHTML = `${player1} wins the game!`;
        winningText.style.display = "flex";
        gameOn = false;
        restart.style.display = "flex";
      }
  }
};

bord.forEach((row) => {
  const arr = [...row];
  arr.forEach((box) => {
    box.addEventListener("click", () => {
      if (gameOn) {
        if (turn % 2 === 0) {
          if (box.innerHTML !== "o") {
            box.innerHTML = "x";
          }
        } else {
          if (box.innerHTML !== "x") {
            box.innerHTML = "o";
          }
        }
        turn++;
        rowCheck();
        colCheck();
        primaryDiagonal();
        secondaryDiagonal();
        if(turn === 9){
          restart.style.display = "flex";
          winningText.innerHTML = "Draw";
          winningText.style.display = "flex";
        }
      }
    });
  });
});

start.addEventListener("click", () => {
  cointainer.style.display = "none";
  box.style.display = "flex";
  player1 = name1.value;
  player2 = name2.value;
  console.log(player1, player2);
});
restart.addEventListener("click", ()=>{
    restart.style.display = "none";
    winningText.style.display = "none";
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
         bord[i][j].innerHTML = " ";
      }
    }
    gameOn = true;
})
