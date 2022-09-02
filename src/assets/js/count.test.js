const { getCounts } = require('./pokemon.js');
const { commsCount } = require('./comments.js');

describe('Pokemon Counts', () => {
  const mockList = ['poke1', 'poke2', 'poke3', 'poke4', 'poke5'];

  it('should return correct number of counts', () => {
    expect(getCounts(mockList)).toEqual(5);
  });

  it('should return 0 for empty list', () => {
    expect(getCounts([])).toEqual(0);
  });

  it('should return 0 for undefined list', () => {
    expect(getCounts(undefined)).toEqual(0);
  });

  it('should return 0 for null list', () => {
    expect(getCounts(null)).toEqual(0);
  });
});

describe('comments count', () => {
  const testList = ['comment1', 'comment2'];
  it('it sould return the right number of comment counts', () => {
    expect(commsCount(testList)).toEqual(2);
  });
  it('it sould return o for an empty list', () => {
    expect(commsCount([])).toEqual(0);
  });
});