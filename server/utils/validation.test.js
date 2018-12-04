const expect = require('expect');
const {isRealString} = require('./validation')


describe('isRealString', () => {

  it('should reject non-string values', () => {
    var nonString = 100;
    var res = isRealString(nonString);
    expect(res).toBeFalsy;
  });

  it('should reject string with only spaces', () => {
    var onlySpaces = '   ';
    var res = isRealString(onlySpaces);
    expect(res).toBeFalsy;
  });

  it('should allow strings with non space characters', () => {
    var validString = '  My username'
    var res = isRealString(validString);
    expect(res).toBeTruthy;
  });

});
