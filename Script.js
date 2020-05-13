var name = prompt("Please enter your name");
alert("Hello " + name + "!");

var words = ["watermelon", "orange", "apple", "strawberry"];
var word = words[Math.floor(Math.random() * words.length)];

var answer = [];
for (var i = 0; i < word.length; i++) {
  answer[i] = "_";
}

// "i" is an array index, loop just keeps adding(i++) "_" until it hits length of the word

var remainingLetters = word.length;

while (remainingLetters > 0) {
  alert(answer.join(" "));
  var guess = prompt("Choose a letter");
  if (guess === null) {
    break;
  } else if(guess.length !== 1) {
      alert("Please enter a single letter");
    } else {
      for (j = 0; j < word.length; j++) {
        if (word[j] === guess) {
          answer[j] = guess;
          remainingLetters--;
        }
      }
    }
}

alert(answer.join(""));
alert("Congratulations! Guessed word is " + word);
