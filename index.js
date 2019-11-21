// alert("Yo");

//this worked too
// for(var i = 0; i<buttons.length;i++){
// buttons[i].addEventListener("click", handleClick);}
//
// function handleClick(){
// alert("I got clicked!");
//
// }
//this worked too
// document.querySelectorAll(".drum")[i].setAttribute("button",addEventListener("click", clickHandler));

//USING THE annoynmous function works but not putting in the normal function with parameters
//button press

var drumButtons = document.querySelectorAll(".drum");
for(var i = 0; i<drumButtons.length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",
    function(){makeSound(this.innerHTML);}
    //makeSound(this.innerHTML) // why doesnt this work
  );}

//keyboard press
//works without event in the function

document.addEventListener("keydown", function(event){
  makeSound(event.key);}
);


function makeSound(letter){
var audio = new Audio("sounds/crash.mp3");
switch (letter) {
  case "w":
    audio = new Audio("sounds/crash.mp3");

    break;
  case "a":
     audio = new Audio("sounds/kick-bass.mp3");
    break;
  case "s":
    audio = new Audio("sounds/snare.mp3");
    break;
  case "d":
    audio = new Audio("sounds/tom-1.mp3");
    break;
  case "j":
    audio= new Audio("sounds/tom-2.mp3");
    break;
  case "k":
    audio= new Audio("sounds/tom-3.mp3");
    break;
  case "l":
    audio = new Audio("sounds/tom-4.mp3");
    break;

  default:
  console.log(letter);

}
audio.play();
document.querySelector("."+letter).classList.add("pressed");
setTimeout(
function(){document.querySelector("."+letter).classList.remove("pressed");}, 100);


}

function buttonAnimation(currentKey){





}
// function clickHandler(){
// alert("I got clicked!");}


// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
