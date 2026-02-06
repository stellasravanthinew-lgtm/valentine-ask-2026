// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");


// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn and change text
const texts = [
    "Really sure?",
    "Think again?",
    "You might regret this",
    "This could be a mistake",
    "Okay… final warning",
    "Absolutely last chance 😭"
  ];
  
  let index = 0;
  let isFinalShown = false;
  
  function handleNo(e) {
    e.preventDefault();
  
    // Still showing texts
    if (index < texts.length) {
      noBtn.textContent = texts[index];
      index++;
  
      // Just showed last text
      if (index === texts.length) {
        isFinalShown = true;
      }
      return;
    }
  
    // Last text already shown → now disappear
    if (isFinalShown) {
      noBtn.style.transition = "opacity 0.4s ease, transform 0.4s ease";
      noBtn.style.opacity = "0";
      noBtn.style.transform = "scale(0.8)";
      noBtn.style.pointerEvents = "none";
    }
  }
  
  // Click
  noBtn.addEventListener("click", handleNo);
  
  
  
  

// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Thats the best decision you ever made! ";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});
