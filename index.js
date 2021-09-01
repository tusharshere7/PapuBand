// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
// to get all mouse events
// debugger in chrome use debugger;

no_of_drum_btns = document.querySelectorAll(".drum").length;

for (var i = 0; i < no_of_drum_btns; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
// for Audio properties and methods
function handleClick() {
  var buttonInnerHtml = this.innerHTML;
  // makeSound(buttonInnerHtml);
  buttonAnimation(buttonInnerHtml);

  switch (buttonInnerHtml) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHtml);
      break;
  }
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHtml);
      break;
  }
}

function buttonAnimation(currentKey) {
  var activateButton = document.querySelector("." + currentKey);
  activateButton.classList.add("pressed");

  setTimeout(function () {
    activateButton.classList.remove("pressed");
  }, 100);
}

// this
// console.log(this);
