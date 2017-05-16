var yourScore = 0;
var compScore = 0;
var guessLeft = 10;
  
  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  
  
 document.onkeyup = function(event) {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  document.getElementById("yourGuess").innerHTML += userGuess;

  var compPick = Math.floor(Math.random() * 26) + 1;
  var compLetter = alphabet[compPick];
  document.getElementById("compPick").innerHTML = compLetter;
  console.log(compPick);
  console.log(compLetter);

    if(userGuess === compLetter) {
      if(yourScore < 9) {
        yourScore++;
        guessLeft--;
        document.getElementById("yourScore").innerHTML = yourScore;
        document.getElementById("guessLeft").innerHTML = guessLeft;
      }
      else {
        yourScore = 0;
        compScore = 0;
        guessLeft = 10;
      }
    }

    else if(userGuess !== compLetter) { 
      if(compScore < 9) {
        compScore++;
        guessLeft--
        document.getElementById("itsScore").innerHTML = compScore;
        document.getElementById("guessLeft").innerHTML = guessLeft;
      }
      else {
        yourScore = 0;
        compScore = 0;
        guessLeft = 10;
      }
    }
 }
