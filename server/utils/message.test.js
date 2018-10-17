const expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {

  it('should generate the correct message object', () => {
    var res = generateMessage('testUser1', 'some text');
    expect(res.from).toBe('testUser1');
    expect(res.text).toBe('some text');
    expect(res.createdAt).toBeTruthy();
  });
});
