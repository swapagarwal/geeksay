const should = require('should');
const geeksay = require('../geeksay');

describe('words', () => {
  it('love', () => {
    should.equal(geeksay('love'), '<3');
  });

  it('not', () => {
    should.equal(geeksay('not'), '!');
  });

  it('slow', () => {
    should.equal(geeksay('slow'), 'O(n^n)');
  });

  it('SloW - case insensitive', () => {
    should.equal(geeksay('SloW'), 'O(n^n)');
  });
});


describe('quotes', () => {
  it('Hello World', () => {
    should.equal(geeksay('Hello World'), 'ping 0.0.0.0/0');
  });

  it('heLLo WorlD - case insensitive', () => {
    should.equal(geeksay('heLLo WorlD'), 'ping 0.0.0.0/0');
  });

  it('I love my house', () => {
    should.equal(geeksay('I love my house'), 'I <3 my 127.0.0.1');
  });
});

describe('multi-line and symbols', () => {
  it(`Every day after waking up \\n I say Hello World and \\n hi \\n to the world `, () => {
    should.equal(geeksay(`Every day after waking up
        I say Hello World and 
        hi
        to the world `), `Every day after waking up
        I log ping 0.0.0.0/0 && 
        hi
        to the 0.0.0.0/0 `);
  });

  it('space', () => {
    should.equal(geeksay('I love my            house'), 'I <3 my            127.0.0.1');
  });

  it('symbols #1', () => {
    should.equal(geeksay('I love my @ house'), 'I <3 my @ 127.0.0.1');
  });

  it('symbols #2', () => {
    should.equal(geeksay('(=> I love my house )'), '(=> I <3 my 127.0.0.1 )');
  });

  // TODO:
  // it('symbols #3', () => {
  // 	should.equal(geeksay('I love my house!'), 'I <3 my 127.0.0.1!');
  // });

});

describe('html tags', () => {
  it('inside tag with space', () => {
    should.equal(geeksay('<a href="#"> Hello World </a>'), '<a href="#"> ping 0.0.0.0/0 </a>');
  });

  // TODO:
  // it('inside tag without space', () => {
  // 	should.equal(geeksay('<a href="#">Hello World</a>'), '<a href="#">ping 0.0.0.0/0</a>');
  // });
});

describe('inputs', () => {
  it('input as array', () => {
    should.equal(geeksay(['hello', 'my', 'love']), 'ping my <3');
  });

  it('null', () => {
    should.equal(geeksay(null), 'null');
  });

  it('undefined', () => {
    should.equal(geeksay(undefined), 'undefined');
  });

  it('object', () => {
    should.equal(geeksay({ Hello: 'World' }), '[object Object]');
  });

  it('array of numbers', () => {
    should.equal(geeksay([1, 2, 3, 4, '100']), '1 10 11 100 1100100');
  });
});
