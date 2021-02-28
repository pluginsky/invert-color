import { StoreService } from '../services/StoreService';
import { StorageKey } from '../enums/StorageKey';

// TODO any
export const save = async (data: any) => {
  await StoreService.setState(StorageKey.Settings, data);
};
