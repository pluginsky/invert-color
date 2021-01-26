import create from 'zustand';

type State = {
  readonly selected: {
    readonly parts: string[];
    readonly nodes: string[];
    readonly paints: string[];
  };
  addToSelected: (item: string, group: any) => void;
  removeFromSelected: (item: string, group: any) => void;
  setSelected: (selected: any) => void;
};

export const useStore = create<State>((set) => ({
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

export const useSearch = create<{
  searchValue: string;
  setSearchValue: (newValue: string) => void;
}>((set) => ({
  searchValue: '',
  setSearchValue: (newValue) => set(() => ({ searchValue: newValue })),
}));
