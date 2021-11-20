import { StoreService } from '../services/StoreService';
import { StorageKey } from '../constants/StorageKey';
import type { Options } from '../../shared/types/Options';

// TODO try/catch
export const save = async (options: Options) => {
  await StoreService.setState(StorageKey.Options, options);
};
