console.log("Space Jam");
//Global Variables
var wins = 0;
var guessesRemaining = 20;
var lettersGuessed = [ ];
var phrases = ['likemike', 'secretstuff', 'daffyduck', 'fixingadivot', 'monstar'];
var phraseHidden='';
var phrasePick='';
var userGuess='';
var phraseShown=[];
var phraseHiddenAgain=[];
var matches=[];

function newWord() {
	phrasePick = phrases[Math.floor(Math.random() * phrases.length)];
                console.log(phrasePick.toLowerCase());
                console.log("phrase character length:" + phrasePick.length);

}
 

 function parsePhrase() {
 	for (var i = 0; i < phrasePick.length; i++) 
{
    	var fill = phrasePick.charAt(i);

    	phraseShown.push(fill);
    	console.log('Hidden Phrase Length: ' + phraseHidden);

    	phraseHiddenAgain.push('_'); 
    	console.log('Shown Phrase Length: ' + phraseShown);
    	
}
}


function showHidden() {
	console.log('showHidden:' + phraseHidden.length);
	 for (var i = 0; i < phraseShown.length; i++) 
	{     if (userGuess.indexOf(phrasePick[i]) > -1)
	      {
	      
	       String.prototype.replaceAt=function(index, character) {
    		return this.substr(0, index) + character + this.substr(index+character.length);
				}

  phraseHidden = phraseHidden.replaceAt(phrasePick.indexOf[userGuess[i]], userGuess);
	    }
	} 
		return phraseHidden;
} 

function guesses() {
	lettersGuessed.sort();
	if (userGuess.match(/[a-z]/i) && lettersGuessed.indexOf(userGuess)== -1) 
	{
		lettersGuessed.push(userGuess);
   }else {
   		 alert('Pick another unique letter a-z!');
   		}
   console.log(lettersGuessed);
}

/*function uniqueGuesses(){
	var singleGuesses = []
	for (var i = 0; i < lettersGuessed.length; i++) 
  { 
  	if (lettersGuessed > 0 && lettersGuessed.indexOf(userGuess)== -1)
    {
    lettersGuessed.push(userGuess);
     }
   }  

} */

function guessesLeft (){
	
	for (var i=0; i<guesses.length+1; i++) {
		var wrong = phrasePick.indexOf(userGuess);
		console.log("wrong" + wrong);
			if(wrong === -1)
			{
	           guessesRemaining--;
	           console.log("Guesses Remaining" + guessesRemaining);
            }
    }
    if (guessesRemaining <= 0) {
    	alert('Gamer Over Try Again!');
    }
    
}

function resetGame() {
	phrasePick='';
	lettersGuessed=[];
	newWord();
}

function runGame(){
//String.fromCharCode() returns a string from specified unicode values provided by event.KeyCode
// event.keyCode returns the Unicode character code of the key that triggered the onkeyup event
//.toLowerCase() converts said string to lower case
	userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("user guess:" + userGuess);
	var match = phrasePick.search(userGuess);
	guesses();
	// showHidden();
	guessesLeft();
	

}

newWord();
parsePhrase();


//onkeyup property returns the onKeyUp event handler code for the current element
document.onkeyup = function(event) {
	runGame();
	

	var html = "<p>Press any key to get started!</p>" +
    "<p>wins: " + 
    wins + 
    "</p>" +
    "<p>Guesses Remaining: " + 
    guessesRemaining + 
    "</p>" +
    "<p>Letters Guessed: " + 
    lettersGuessed + 
    "</p>" +
    "<p>Guess this phrase:<br>"
    + phraseHiddenAgain.join(' ') +
    "</p>";

    // Placing the html into the game ID
    document.querySelector('#dynamic').innerHTML= html;
}

	

