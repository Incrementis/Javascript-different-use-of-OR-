/*
	===============================================================================================
	
	NOTE:
	
	The code below serves only demonstration purposes and is kept as simple as possible.
	
	===============================================================================================
*/


"use strict";


// Purpose: Contains information about the image based on dice cast and the result in textual form
var Interface =
{
	diceImage: 0,
	result: 0
}


// Purpose: Generates even or uneven integer number between 0 and 6
function randomNumber(even_or_uneven)
{
	var result = 0;
	
	
	if(even_or_uneven === "EVEN")
	{
		do
		{
			// Random integer number between 0 and 6
			result = Math.floor( (Math.random() * 7) ); 
			
			
		}while( (result % 2 !== 0) && (result >= 0) )

		
	}
	else if(even_or_uneven === "UNEVEN")
	{
		do
		{
			// Random integer number between 0 and 6
			result = Math.floor( (Math.random() * 7) ); 

			
		}while( (result % 2 === 0) && (result >= 0) )
	
		
	}
	else
	{
		alert("ERROR: Wrong parameter in function 'randomNumber'!");
	}
	
	
	return result;
}



// Purpose: Main function
function Bet()
{
	// Variables
	var even 		= document.getElementById('even').checked;
	var none 		= document.getElementById('none-of-both').checked;
	var uneven 		= document.getElementById('uneven').checked;
	var dice		= document.getElementById('dice');
	var result  	= document.getElementById('result');
	
	var throwEven 	= randomNumber("EVEN");
	var throwUneven = randomNumber("UNEVEN");
	
	
	/*
		ATTENTION:
		Here is an interesting use of the logical OR operator
	*/
	var winner	= throwEven || throwUneven;
	
	
	if( (even !== false) || (none !== false) || (uneven !== false) )
	{
		// EVEN
		if( (winner % 2 === 0) && (even === true) )
		{
			Interface.result = "Congratulation, you win! The number is EVEN!";
			
		}
		// NONE
		else if( (winner === 0) && (none === true) )
		{
			Interface.result = "Congratulation, you win! The number is NONE!";
			
		}
		// UNEVEN
		else if( (winner % 2 !== 0) && (uneven === true) )
		{
			Interface.result = "Congratulation, you win! The number is UNEVEN!";
			
		}
		// LOOSING
		else
		{
			Interface.result = "Sadly, you loose! Better luck next time :)!";
		}
		
		
		// Setting the image src which will be shown in web browser
		Interface.diceImage = winner + ".jpg";
		
		
		// Show information on browser
		dice.src 			= Interface.diceImage;
		result.innerHTML 	= Interface.result;
		
	}
	else 
	{
		alert("Please, make your bet before pressing the START button!");
		
	}
	
	
}