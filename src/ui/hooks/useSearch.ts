import create from 'zustand';

type State = {
  readonly searchValue: string;
  setSearchValue: (newValue: string) => void;
};

export const useSearch = create<State>((set) => ({
  searchValue: '',
  setSearchValue: (newValue) => set(() => ({ searchValue: newValue })),
}));
