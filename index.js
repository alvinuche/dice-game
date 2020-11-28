// player one
var randomImage = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png']
var randomNumber1 = Math.floor(Math.random() * randomImage.length) 
document.querySelector('.img1').setAttribute('src', randomImage[randomNumber1]);
// player two
var randomNumber2 = Math.floor(Math.random() * randomImage.length) 
document.querySelector('.img2').setAttribute('src', randomImage[randomNumber2]);

if(randomNumber1 > randomNumber2){
    document.getElementsByTagName('h1')[0].innerHTML = '🚩Player 1 Wins!'
} else if (randomNumber1 < randomNumber2) {
    document.getElementsByTagName('h1')[0].innerHTML = 'Player 2 Wins!🚩'
} else {
    document.querySelector('.heading').innerHTML = 'Draw!'
}

