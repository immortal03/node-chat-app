var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Michael';
    var text = 'This is a text';
    var res = generateMessage(from, text);
    expect(res.from).toBe(from);
    expect(res.text).toBe(text);
    expect(res).toMatchObject({from, text});
    expect(typeof res.createdAt).toBe('number');
  });
});
