function whoWon(player1,player2){
  validInput = ['rock','paper','scissors'];

  if (!validInput.includes(player1) || !validInput.includes(player2)){
    return -1;
  }

   if (player1 === player2){
     return 'TIE!';
   }
   
   if (player1 === 'rock' && player2 === 'paper'){
     return 'Player 2 wins!';
   }
   
   if (player1 === 'paper' && player2 === 'scissors'){
     return 'Player 2 wins!';
   }
   
   if (player1 === 'scissors' && player2 === 'rock'){
     return 'Player 2 wins!';
   }
 
   return 'Player 1 wins!';
 }

 module.exports = whoWon;