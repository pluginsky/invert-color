import { clone } from './clone';

describe('clone', () => {
  it('should clone single nodes array', () => {
    const nodes: Paint[] = [
      {
        blendMode: 'NORMAL',
        color: {
          r: 0.2,
          g: 0.3,
          b: 0.4,
        },
        opacity: 1,
        type: 'SOLID',
        visible: true,
      },
    ];

    expect(clone(nodes)).toEqual(nodes);
  });

  it('should clone empty nodes array', () => {
    const nodes: Paint[] = [];

    expect(clone(nodes)).toEqual(nodes);
  });
});
