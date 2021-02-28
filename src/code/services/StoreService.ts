import type { Options } from '../../shared/types/Options';
import type { StorageKey } from '../enums/StorageKey';

// TODO typeof StorageKey
export class StoreService {
  static async getState(storageKey: StorageKey): Promise<Options | undefined> {
    return await figma.clientStorage.getAsync(storageKey);
  }

  static async setState(storageKey: StorageKey, data: Options) {
    return await figma.clientStorage.setAsync(storageKey, data);
  }
}
