import { formatOptionName } from '.';

describe('formatOptionName', () => {
  it('should replace underscores with spaces', () => {
    const input = 'option_name';
    const expectedOutput = 'option name';
    expect(formatOptionName(input)).toBe(expectedOutput);
  });

  it('should handle multiple underscores in a row', () => {
    const input = 'option__name';
    const expectedOutput = 'option  name';
    expect(formatOptionName(input)).toBe(expectedOutput);
  });

  it('should return the original string if it contains no underscores', () => {
    const input = 'option name';
    expect(formatOptionName(input)).toBe(input);
  });
});
