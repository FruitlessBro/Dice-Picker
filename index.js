var dice1 = document.querySelector('.img1');
var dice2 = document.querySelector('.img2');
var h1 = document.querySelector('h1');

var random1 = Math.floor(Math.random()*6)+1;
var random2 = Math.floor(Math.random()*6)+1;

dice1.setAttribute('src', './images/dice' + random1 +'.png') ;
dice2.setAttribute('src', './images/dice' + random2 +'.png') ;

if (random1 === random2) {
  h1.innerText = 'Tie!';
} else if (random1>random2) {
  h1.innerText = 'Player 1 has Won!';
} else {
  h1.innerText = 'Player 2 has Won!';
}
