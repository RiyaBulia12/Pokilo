const { getCounts } = require('./pokemon.js').default;

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
