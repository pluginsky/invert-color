import create from 'zustand';

export type Selected = {
  readonly parts: string[];
  readonly nodes: string[];
  readonly paints: string[];
};

type State = {
  readonly selected: Selected;
  addToSelected: (item: string, group: any) => void;
  removeFromSelected: (item: string, group: any) => void;
  setSelected: (selected: Selected) => void;
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
