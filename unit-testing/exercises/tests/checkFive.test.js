const checkFive = require('../checkFive.js');

describe("checkFive", function(){
    
   test("Returns 'input less than 5' for input less than 5", function(){
      let output = checkFive(3);
      expect(output).toEqual("3 is less than 5.");
   });

    test("Returns 'input equal to 5' for input equal to 5.", function(){
        let output = checkFive(5);
        expect(output).toEqual("5 is equal to 5.");
    });
    
    test("Returns 'input greater than 5' for input greater to 5.", function(){
        let output = checkFive(10);
        expect(output).toEqual("10 is greater than 5.");
    });
    
});