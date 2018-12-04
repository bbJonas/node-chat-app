const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {

  it('should generate the correct message object', () => {
    var res = generateMessage('testUser1', 'some text');
    expect(res.from).toBe('testUser1');
    expect(res.text).toBe('some text');
    expect(res.createdAt).toBeTruthy();
  });
});

describe('generateLocationMessage', () => {

  it('should generate the correct locationMessage object', () => {
    var res = generateLocationMessage('testUser1', 1, 1);
    expect(res.from).toBe('testUser1');
    expect(res.url).toBe('https:\\www.google.com/maps?q=1,1');
    expect(res.createdAt).toBeTruthy();
  });
});
