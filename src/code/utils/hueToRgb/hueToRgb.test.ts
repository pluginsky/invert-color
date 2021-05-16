import { hueToRgb } from './hueToRgb';

// TODO rename function
describe('hueToRgb', () => {
  it('should convert RGBA color', () => {
    expect(hueToRgb({ r: 0.4, g: 0.2, b: 0.3, a: 1 })).toBe('102, 51, 77');
  });

  it('should convert RGB color', () => {
    expect(hueToRgb({ r: 0.4, g: 0.2, b: 0.3 })).toBe('102, 51, 77');
  });
});
