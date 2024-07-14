const RPS = require("../RPS.js");

describe (RPS, function(){
    // tie case
    test("Player 1 and Player 2 have same choice", function(){
        let result = RPS('scissors','scissors');
        expect(result).toBe('TIE!');
    });

    // player 2 paper covers player 1 rock 
    test("Player 2 paper covers player 1 rock", function(){
        let result = RPS('rock','paper');
        expect(result).toBe('Player 2 wins!');
    });
    
    // player 2 scissors cuts player 1 paper 
    test("Player 2 scissors cuts player 1 paper", function(){
        let result = RPS('paper','scissors');
        expect(result).toBe('Player 2 wins!');
    });
    
    // player 2 rock smashes player 1 scissors 
    test("Player 2 rock smashes player 1 scissors", function(){
        let result = RPS('scissors','rock');
        expect(result).toBe('Player 2 wins!');
    });

    // player 1 paper covers player 2 rock
    test("Player 1 paper covers player 2 rock", function(){
        let result = RPS('paper','rock');
        expect(result).toBe('Player 1 wins!');
    });
    
    // player 1 scissors cuts player 2 paper
    test("Player 1 scissors cuts player 2 paper", function(){
        let result = RPS('scissors','paper');
        expect(result).toBe('Player 1 wins!');
    });
   
    // player 1 rock smashes player 2 scissors
    test("Player 1 rock smashes player 2 scissors", function(){
        let result = RPS('rock','scissors');
        expect(result).toBe('Player 1 wins!');
    });

    // invalid input for player 1 results in -1
   test("invalid input for player 1 results in -1", function(){
        let result = RPS('invalid', 'scissors');
        expect(result).toEqual(-1);
   });

    // invalid input for player 1 results in -1
       test("invalid input for player 2 results in -1", function(){
        let result = RPS('scissors', 'invalid');
        expect(result).toEqual(-1);
   });
   

});