console.log("Space Jam")
/* function resetGame(){} */


				var wins = 0;
                var guessesRemaining = 20;
                var lettersGuessed = [ ];
                var phrases = ['likemike', 'secretstuff', 'daffyduck', 'fixingadivot', 'monstar'];
                var phraseHidden = ""
function selectPhrase (){ }
	 			// This sets the computer guess equal to the random.
                //Math.floor object method is a function that returns the largest integer less than or equal to a given number
                //Math.random  random method of Math object is a function number in the range [0, 1) that is, from 0 (inclusive) up to but not including 1 (exclusive), which you can then scale to your desired range.
			 	var phrasePick = phrases[Math.floor(Math.random() * phrases.length)];
                console.log(phrasePick.toLowerCase());
                console.log("phrase character length:" + phrasePick.length);
                
                for (var i = 0; i < phrasePick.length; i++)
{
    	phraseHidden= phraseHidden.concat("_");
}




                
//onkeyup property returns the onKeyUp event handler code for the current element
document.onkeyup = function(event) {
                //String.fromCharCode() returns a string from specified unicode values provided by event.KeyCode
                // event.keyCode returns the Unicode character code of the key that triggered the onkeyup event
                //.toLowerCase() converts said string to lower case
                var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
                //select random word from array
                //count number of characters in string from array
                //innerHTML 'print' _ equivalent to number of strings in array
               console.log("user guess:" + userGuess);
               var match = phrasePick.search(userGuess);
               console.log("index of match:" + match);

               for(var i=-1; i<lettersGuessed; i++) {
	               if (userGuess!==lettersGuessed[i]){
	               	lettersGuessed.push(userGuess);}
	               	else{alert("letter already guessed try another")
	               }
	            }

				var correctGuesses = [];

				for(var i=0; i<phrasePick.length; i++) {
    				if (phrasePick[i] === userGuess) {correctGuesses.push(i);}
									}
				console.log("correct guesses:" +correctGuesses[i]);

               
               if(match>0){
               	console.log("Match at" + match +"index");
               	console.log("Guesses Remaining" + guessesRemaining);
               }else {
               	--guessesRemaining;
               	console.log("Guesses Remaining" + guessesRemaining);
               }

               String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

	phraseHidden = phraseHidden.replaceAt(match, userGuess);

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
		+ phraseHidden +
		"</p>";

		// Placing the html into the game ID
		document.querySelector('#dynamic').innerHTML= html;

               
               	}
              
                //check if entering a keyboard character else prompt chose alphabetically character
                //check if  userGuess === any of the string characters in the phrase
 /* for (var i = 0; i >= phrases.length; i++) {
                   console.log(arrayName[i]);
                }
                
                if (true) {
 
                                condition;
                }else if() {
 
                }else {
 
                }
 
                for (var i = 0; i >= arrayName.length; i++) {
                                arrayName[i]
                } */