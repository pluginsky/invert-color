const parts = ['fills', 'strokes', 'effects'];

const nodes = [
  'boolean_operation',
  'component',
  'document',
  'ellipse',
  'frame',
  'group',
  'instance',
  'line',
  'page',
  'polygon',
  'rectangle',
  'slice',
  'star',
  'text',
  'vector',
];

const paints = [
  'solid',
  'gradient_linear',
  'gradient_radial',
  'gradient_diamond',
  'gradient_angular',
  'image',
];

export const options = {
  parts,
  nodes,
  paints,
} as const;
