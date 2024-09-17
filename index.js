var i = 0;
var wordIndex = 0;
var words = ['A STUDENT', 'A DEVELOPER','A BABYGIRL', 'ZORO'];
var speed = 100; 
var deleteSpeed = 100; 
var delayBetweenWords = 1000;

function typeWriter() {
  if (i < words[wordIndex].length) {
    document.getElementById("demo").innerHTML += words[wordIndex].charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(eraseText, delayBetweenWords);
  }
}

function eraseText() {
  if (i > 0) {
    document.getElementById("demo").innerHTML = words[wordIndex].substring(0, i-1);
    i--;
    setTimeout(eraseText, deleteSpeed);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeWriter, speed); 
  }
}

typeWriter(); 