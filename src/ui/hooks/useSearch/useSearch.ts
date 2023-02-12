import { create } from 'zustand';

interface SearchState {
  readonly searchValue: string;
  setSearchValue: (searchValue: string) => void;
}

export const useSearch = create<SearchState>((set) => ({
  searchValue: '',
  setSearchValue: (searchValue) => set(() => ({ searchValue })),
}));
