import create from 'zustand';

type State = {
  readonly selected: string[];
  addToSelected: (item: string) => void;
};

export const useStore = create<State>((set) => ({
  selected: [],
  addToSelected: (item) =>
    set((state) => ({ selected: [...state.selected, item] })),
}));
