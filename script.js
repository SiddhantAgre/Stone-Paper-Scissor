const stone = document.querySelector(".stone");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const choices = document.querySelectorAll(".stone, .paper, .scissor");
const user = document.querySelector(".user");
const computer = document.querySelector(".computer");
const start = document.querySelector(".start");
const random = Math.random();
isUserChoiceLocked = false;

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    if(!isUserChoiceLocked){
      classList = choice.classList;
      console.log(classList[0]);
      user.style.backgroundImage = `url(Assets/${classList}.png)`;
      isUserChoiceLocked = true;
    }
  });
});

start.addEventListener("click", () => {
  if (user.style.backgroundImage !== "") {
    if (random > 0 && random < 0.33) {
      computer.style.backgroundImage = "url(Assets/stone.png)";
    } else if (random > 0.33 && random < 0.66) {
      computer.style.backgroundImage = "url(Assets/paper.png)";
    } else {
      computer.style.backgroundImage = "url(Assets/scissor.png)";
    }

    start.classList.remove("start");
    const replay = start.classList.add("replay");
    start.textContent = "Replay";

    setTimeout(() => {
      document.querySelector(".replay").addEventListener("click", () => {
        location.reload();
      });
    }, 0);
    const userImg = user.style.backgroundImage.replace(/url\(["']?Assets\/|["']?\)/g, "");
    const comImg = computer.style.backgroundImage .replace(/url\(["']?Assets\/|["']?\)/g, "");

    result = document.createElement("div");
    result.classList.add("result");

    if (userImg === comImg) {
      result.innerText = "It's a draw";
      result.style.backgroundColor = "#07072a";
    } else if (userImg.includes("stone") && comImg.includes("scissor")){
      result.innerText = "you won! Stone beats Scissor";
    } else if (userImg.includes("paper") && comImg.includes("stone")){
      result.innerText = "you won! Paper beats Stone";
    }  else if (userImg.includes("scissor") && comImg.includes("paper")){
      result.innerText = "you won! Scissor beats Paper";
    }else if (userImg.includes("scissor") && comImg.includes("stone")){
      result.innerText = "you loose! Stone beats Scissor";
      result.style.backgroundColor = "red";
    }
    else if (userImg.includes("stone") && comImg.includes("paper")){
      result.innerText = "you loose! Paper beats Stone";
      result.style.backgroundColor = "red";
    }
    else if (userImg.includes("paper") && comImg.includes("scissor")){
      result.innerText = "you loose! Scissor beats Paper";
      result.style.backgroundColor = "red";
    }

    document.body.appendChild(result);
  }
});
