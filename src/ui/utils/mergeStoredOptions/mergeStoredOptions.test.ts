import { mergeStoredOptions } from '.';

describe.skip('mergeStoredOptions', () => {
  it('returns correct options when options are available in availableOptions', () => {
    const selected = {
      nodes: ['shapes'],
      paints: ['background', 'border'],
    };

    const expectedOptions = {
      parts: [],
      nodes: ['shapes'],
      paints: ['background', 'border'],
    };

    expect(mergeStoredOptions(selected)).toEqual(expectedOptions);
  });

  it('returns correct options when options are not available in availableOptions', () => {
    const selected = {
      nodes: ['shapes', 'invalidOption'],
      paints: ['background', 'invalidOption'],
    };

    const expectedOptions = {
      parts: [],
      nodes: ['shapes'],
      paints: ['background'],
    };

    expect(mergeStoredOptions(selected)).toEqual(expectedOptions);
  });

  it('returns correct options when group is an old group', () => {
    const selected = {
      elements: ['shapes'],
      patterns: ['background', 'border'],
    };

    const expectedOptions = {
      parts: [],
      nodes: ['shapes'],
      paints: ['background', 'border'],
    };

    expect(mergeStoredOptions(selected)).toEqual(expectedOptions);
  });
});
