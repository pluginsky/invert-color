import { availableOptions } from '../../shared/constants/availableOptions';
import type { Options } from '../../shared/types/Options';
import type { Group } from '../types/Group';

const OLD_GROUPS = ['elements', 'patterns'];

const mapGroup = (group: string) => {
  // migration from old options
  if (group === 'elements') {
    return 'nodes';
  }

  // migration from old options
  if (group === 'patterns') {
    return 'paints';
  }

  return group as Group;
};

const mapOptions = (options: string[], group: Group) => {
  let updatedOptions: string[] = [];

  options.forEach((option) => {
    if (availableOptions[group].includes(option)) {
      updatedOptions = [...updatedOptions, option];
    }
  });

  return updatedOptions;
};

export const mergeStoredOptions = (selected: Record<string, string[]>) => {
  let updatedOptions: Options = {
    parts: [],
    nodes: [],
    paints: [],
  };

  Object.entries(selected).forEach(([group, options]) => {
    const supportedGroups = [...Object.keys(availableOptions), ...OLD_GROUPS];

    if (supportedGroups.includes(group)) {
      const optionsGroup = mapGroup(group);

      updatedOptions = {
        ...updatedOptions,
        [optionsGroup]: mapOptions(options, optionsGroup),
      };
    }
  });

  return updatedOptions;
};
