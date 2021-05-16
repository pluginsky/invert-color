import create from 'zustand';

import type { Options } from '../../shared/types/Options';
import type { Group } from '../types/Group';

type State = {
  readonly selected: Options;
  addToSelected: (item: string, group: Group) => void;
  removeFromSelected: (item: string, group: Group) => void;
  setSelected: (selected: Options) => void;
};

export const useOptions = create<State>((set) => ({
  selected: {
    parts: [],
    nodes: [],
    paints: [],
  },
  addToSelected: (item, group) => {
    set((state) => ({
      selected: {
        ...state.selected,
        [group]: [...state.selected[group], item],
      },
    }));
  },
  removeFromSelected: (item, group) => {
    const selectedItemsFilter = (selectedItem: string) => {
      return selectedItem !== item;
    };

    set((state) => ({
      selected: {
        ...state.selected,
        [group]: [...state.selected[group].filter(selectedItemsFilter)],
      },
    }));
  },
  setSelected: (selected) => set(() => ({ selected })),
}));
