import create from 'zustand';

type State = {
  readonly searchValue: string;
  setSearchValue: (searchValue: string) => void;
};

export const useSearch = create<State>((set) => ({
  searchValue: '',
  setSearchValue: (searchValue) => set(() => ({ searchValue })),
}));
