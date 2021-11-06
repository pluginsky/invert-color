const parts = ['fills', 'strokes', 'effects'];

const nodes = [
  'boolean_operation',
  'component',
  // 'component_set',
  // 'connector',
  'document',
  'ellipse',
  'frame',
  'group',
  'instance',
  'line',
  'page',
  'polygon',
  'rectangle',
  // 'shape_with_text',
  'slice',
  // 'stamp',
  'star',
  // 'sticky',
  'text',
  'vector',
  // 'widget', ??
];

const paints = [
  'solid',
  'gradient_linear',
  'gradient_radial',
  'gradient_diamond',
  'gradient_angular',
  'image',
];

export const availableOptions = {
  parts,
  nodes,
  paints,
} as const;
