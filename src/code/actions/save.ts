import { StoreService } from '../services/StoreService';
import { StorageKey } from '../enums/StorageKey';
import type { Options } from '../../shared/types/Options';

export const save = async (data: Options) => {
  await StoreService.setState(StorageKey.Settings, data);
};
