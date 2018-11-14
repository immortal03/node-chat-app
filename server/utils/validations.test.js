const expect = require('expect');

const {isRealString} = require('./validations');


describe('isRealString function test', () => {
  it('should reject non-string values', () => {
    var obj = {name: 'Michael'};
    var res = isRealString(obj);
    expect(res).toBeFalsy();
  });

  it('should reject string with only spaces', () => {
    var str = '    ';
    var res = isRealString(str);
    expect(res).toBeFalsy();
  });

  it('should allow string with non-space characters', () => {
    var str = 'Hello there';
    var res = isRealString(str);
    expect(res).toBeTruthy();
  })
});
