import {DefineKeyStorage, IStorage, TypeKeyStorage} from './storage.interface';
import {MMKVLoader} from 'react-native-mmkv-storage';
// import mmkvFlipper from 'rn-mmkv-storage-flipper';

const MMKV = new MMKVLoader()
  .withInstanceID('default')
  .withEncryption()
  .initialize();

if (__DEV__) {
  // mmkvFlipper(MMKV);
}

class LocalStorageClass implements IStorage {
  readonly DefineKeyStorage = DefineKeyStorage;
  constructor() {}

  getItem(key: string): string {
    return MMKV.getString(key);
  }

  setItem(key: string, value: string): void {
    MMKV.setString(key, value);
  }

  removeItem(key: string): void {
    MMKV.removeItem(key);
  }

  clear(): void {
    MMKV.clearStore();
  }
}

export const LocalStorage = new LocalStorageClass();
