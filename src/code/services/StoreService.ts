import { StorageKey } from '../enums/StorageKey';

// TODO typeof StorageKey
export class StoreService {
  static async getState(storageKey: StorageKey) {
    return await figma.clientStorage.getAsync(storageKey);
  }

  static async setState(storageKey: StorageKey, data: any) {
    return await figma.clientStorage.setAsync(storageKey, data);
  }
}
