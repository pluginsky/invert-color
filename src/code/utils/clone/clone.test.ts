import { clone } from './clone';

describe('clone', () => {
  const single: Paint[] = [
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

  const multi: Paint[] = [
    ...single,
    {
      blendMode: 'NORMAL',
      color: {
        r: 1,
        g: 0,
        b: 0.5,
      },
      opacity: 0,
      type: 'SOLID',
      visible: false,
    },
  ];

  const empty: Paint[] = [];

  it.each([[single], [multi], [empty]])(
    'should clone nodes array',
    (nodes: Paint[]) => {
      expect(clone(nodes)).toEqual(nodes);
    }
  );
});
