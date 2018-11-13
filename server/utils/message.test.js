var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Admin';
    var latitude = 123;
    var longitude = 456;
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    var res = generateLocationMessage(from, latitude, longitude);
    expect(res).toMatchObject({createdAt: res.createdAt, from, url});
    expect(typeof res.createdAt).toBe('number');
  });
});
