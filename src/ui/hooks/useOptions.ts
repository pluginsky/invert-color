import create from 'zustand';

import type { Options } from '../../shared/types/Options';

type Group = keyof Options;

// TODO
// Options[Group][number];

type State = {
  readonly selected: Options;
  addToSelected: (item: string, group: Group) => void; // TODO
  removeFromSelected: (item: string, group: Group) => void; // TODO
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
    // TODO
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
