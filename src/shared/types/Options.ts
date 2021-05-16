import type { availableOptions } from '../constants/availableOptions';

export type Options = typeof availableOptions;
export type Group = keyof Options;
