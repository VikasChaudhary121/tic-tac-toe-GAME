let boxes = document.querySelectorAll(".btn");
let reset = document.querySelector("#reset");
let replay = document.querySelector("#replay");
let result = document.querySelector(".winner-box");
let audio = document.querySelector("audio");
let winAudio = document.querySelector("#audio2");
let replayReset = document.querySelector("#audio3");

let winCriteria = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let player = "player1";


boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("THE BOX WAS CLICKED !!!");
    audio.play();
    if (player == "player1") {
      box.innerText = "X";
      player = "player2";
    } else {
      box.innerText = "O";
      player = "player1";
    }

    box.disabled = true;
    checker();
  });
});

const disable_buttons = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
}

const enable_buttons = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
}

const checker = () => {
  for (let win of winCriteria) {
    let box1 = boxes[win[0]].innerText;
    let box2 = boxes[win[1]].innerText;
    let box3 = boxes[win[2]].innerText;
    if (box1 !== "" && box2 !== "" && box3 !== "") {
      if (box1 === box2 && box2 === box3) {
        console.log("winner", box1);
        winAudio.play();
        result.innerText = `CONGRATULATIONS! THE WINNER IS:  ${box1}`;
        result.removeAttribute("id");
        disable_buttons();
        return;
      }
    }
  }
}

const resetting = () => {
  player = "player1";
  enable_buttons();
  result.setAttribute("id", "hide");
  replayReset.play();
}

reset.addEventListener("click", resetting);
replay.addEventListener("click", resetting);
