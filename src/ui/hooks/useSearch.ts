import create from 'zustand';

// TODO move to stores
interface SearchState {
  readonly searchValue: string;
  setSearchValue: (searchValue: string) => void;
}

export const useSearch = create<SearchState>((set) => ({
  searchValue: '',
  setSearchValue: (searchValue) => set(() => ({ searchValue })),
}));
