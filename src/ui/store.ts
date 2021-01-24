import create from 'zustand';

type State = {
  readonly selected: string[];
  addToSelected: (item: string) => void;
  removeFromSelected: (item: string) => void;
};

export const useStore = create<State>((set) => ({
  selected: [],
  addToSelected: (item) => {
    set((state) => ({ selected: [...state.selected, item] }));
  },
  removeFromSelected: (item) => {
    const selectedItemsFilter = (selectedItem: string) => {
      return selectedItem !== item;
    };

    set((state) => ({
      selected: [...state.selected.filter(selectedItemsFilter)],
    }));
  },
}));

export const useSearch = create<{
  searchValue: string;
  setSearchValue: (newValue: string) => void;
}>((set) => ({
  searchValue: '',
  setSearchValue: (newValue) => set(() => ({ searchValue: newValue })),
}));
