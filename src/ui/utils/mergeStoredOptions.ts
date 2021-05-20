import { availableOptions } from '../../shared/constants/availableOptions';
import type { Options } from '../../shared/types/Options';

// TODO rename
const mapOptions = (options: string[], group: string) => {
  // let x = availableOptions[q];
  let updatedOptions = [];

  // console.log(availableOptions[group]);

  // TODO save order?
  options.forEach((option) => {
    if (availableOptions[group].includes(option)) {
      updatedOptions = [...updatedOptions, option];
    }
  });

  return updatedOptions;
};

const mapGroup = (group: string) => {
  if (group === 'elements') {
    return 'nodes';
  }

  if (group === 'patterns') {
    return 'paints';
  }

  return group;
};

export const mergeStoredOptions = (selected: Record<string, string[]>) => {
  // let updatedOptions = availableOptions;
  let updatedOptions = {
    parts: [],
    nodes: [],
    paints: [],
  } as Options;

  Object.entries(selected).forEach(([group, options]) => {
    if (
      Object.keys({ ...availableOptions, elements: [], patterns: [] }).includes(
        group
      )
    ) {
      const optionsGroup = mapGroup(group);

      updatedOptions = {
        ...updatedOptions,
        [optionsGroup]: mapOptions(options, optionsGroup), // TODO
      };
    }
  });

  // console.log(updatedOptions);

  return updatedOptions;
};
