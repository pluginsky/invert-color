const parts = [
  'fills',
  'strokes',
  'effects',
  // 'backgrounds', ??
  // 'prototypeBackgrounds', ??
  // 'paints', ??
];

const nodes = [
  'boolean_operation',
  // 'code_block', ??
  'component',
  'component_set',
  'connector',
  'document',
  'ellipse',
  // 'embed', ??
  'frame',
  'group',
  // 'highlight', ??
  'instance',
  'line',
  // 'link_unfurl', ??
  // 'media', ??
  'page',
  'polygon',
  'rectangle',
  // 'removed', ??
  // 'section', ??
  'shape_with_text',
  'slice',
  'stamp',
  'star',
  'sticky',
  'text',
  'vector',
  // 'washi_tape', ??
  // 'widget', ??
];

const solidPaint = 'solid';
const gradientPaint = [
  'gradient_linear',
  'gradient_radial',
  'gradient_diamond',
  'gradient_angular',
];
const imagePaint = 'image';
// const videoPaint = 'video';

const paints = [
  solidPaint,
  ...gradientPaint,
  imagePaint,
  // videoPaint,
];

export const availableOptions = {
  parts,
  nodes,
  paints,
} as const;
