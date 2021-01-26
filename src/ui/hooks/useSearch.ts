import create from 'zustand';

export const useSearch = create<{
  readonly searchValue: string;
  setSearchValue: (newValue: string) => void;
}>((set) => ({
  searchValue: '',
  setSearchValue: (newValue) => set(() => ({ searchValue: newValue })),
}));
