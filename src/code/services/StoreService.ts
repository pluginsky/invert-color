import type { StorageKey } from '../enums/StorageKey';

export class StoreService {
  static async getState<T>(storageKey: StorageKey): Promise<T | undefined> {
    return await figma.clientStorage.getAsync(storageKey);
  }

  static async setState<T>(storageKey: StorageKey, data: T) {
    return await figma.clientStorage.setAsync(storageKey, data);
  }
}
