const {handleCancel, shortRandStr} = require("./ryanLogic.js");

describe("Return opposite of argument.", function() {
  test("Value to be returned as false.", function() {
    expect(handleCancel(true)).toEqual(false);
  });
  test("Value to be returned as true.", function() {
    expect(handleCancel(false)).toEqual(true);
  });
  test("Expect handleCancel to return falsy value", function(){
    expect(handleCancel(1)).toBeFalsy();
  });
  test("Expect handleCancel to return truthy value", function(){
    expect(handleCancel(0)).toBeTruthy();
  });
});


describe("Return string with a length of 4: ", function(){
  test('Should return first 4 characters of string passed in as argument', function(){
    expect(shortRandStr('goodbye')).toEqual('good');
  });
});