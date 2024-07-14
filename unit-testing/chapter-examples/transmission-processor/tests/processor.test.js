const processor = require('../processor.js');

describe("transmission processor", function() {

  // Requirement 1: Take in a transmission string and return an object
  // Positive test case
  test("takes a string and returns an object", function() {
    let result = processor("9701::<489584872710>");
    expect(typeof result).toBe("object");
  });

  // Requirement 2: Return -1 if the transmission does NOT contain "::"
  // Negative test case
  test("returns -1 if '::' not found", function () {
    let result = processor("9701<489584872710>");
    expect(result).toBe(-1);
  });  

  // Requirement 3: Returned object should contain an id property. 
  // The id is part of the trasmission before the "::"
  test("returns id in object", function(){
    let result = processor("9701::<489584872710>");
    expect(result.id).not.toBeUndefined();

  });

  // Reqiuirement 4: The id property should be of type Number
  test("converts id to a number", function(){
    let result = processor("9701::<489584872710>");
    expect(result.id).toBe(9701);
  });

  // Requirement 5: Returned object should contain a rawData property
  // The rawData is the part of the transmission after the "::"
  test("returns rawData in object", function(){
    let result = processor("9701::<487297403495720912>");
    expect(result.rawData).not.toBeUndefined();
  });

  // Requirement 6: Return -1 for the value rawData if the rawData part
  // of the transmission does NOT start with < and endwith >
  
  // Missing < at the beginning
  test("returns -1 for rawData if missing < at position 0", function() {
    let result = processor("9701::487297403495720912>");
    expect(result.rawData).toBe(-1);
  });

  // missing < at the end
  test("returns -1 for rawData if missing < at position -1", function() {
    let result = processor("9701::<487297403495720912");
    expect(result.rawData).toBe(-1);
  });
  
  // missing both < and >
  test("returns -1 for rawData if missing < AND >", function() {
    let result = processor("9701::487297403495720912");
    expect(result.rawData).toBe(-1);
  });
  
});