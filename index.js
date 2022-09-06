'use strict'
console.log('hello');

const w = document.querySelector('.w');
const a = document.querySelector('.a');
const s = document.querySelector('.s');
const d = document.querySelector('.d');
const j = document.querySelector('.j');
const k = document.querySelector('.k');
const l = document.querySelector('.l');


document.querySelectorAll('.drum').forEach(function(item){
  item.addEventListener('click',function(){
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
});

document.addEventListener('keydown',function(e){
  console.log(e);
  makeSound(e.key);
  buttonAnimation(e.key);
});

function makeSound(key){
  switch(key){
    case 'w':let tom1 = new Audio('sounds/tom-1.mp3');
             tom1.play();
             break;
    case 'a':let tom2 = new Audio('sounds/tom-2.mp3');
             tom2.play();
             break;
    case 's':let tom3 = new Audio('sounds/tom-3.mp3');
              tom3.play();
              break;
    case 'd':let tom4 = new Audio('sounds/tom-4.mp3');
              tom4.play();
              break;
    case 'j':let snare = new Audio('sounds/snare.mp3');
              snare.play();
              break;
    case 'k':let crash = new Audio('sounds/crash.mp3');
             crash.play();
             break;
    case 'l':let kick = new Audio('sounds/kick-bass.mp3');
             kick.play();
            break;
    default:console.log(key);
  }
}
function buttonAnimation(key){
  let activeBtn = document.querySelector('.'+key);
  activeBtn.classList.add('pressed');
  setTimeout(function(){
    activeBtn.classList.remove('pressed');
  },100);
}
