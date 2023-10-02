import { DB } from "./interfaces";

class WebDb implements DB {
  get = (key: string): Promise<string> => {
    return new Promise((resolve) => {
      if (globalThis?.localStorage) {
        // r(memoryDB[key])
        const value = globalThis.localStorage.getItem(key);
        resolve(value);
      } else {
        chrome.storage.local.get(key, (result) => {
          resolve(result[key] as string);
          return result;
        });
      }
    });
  };

  set = (key: string, value: string): Promise<void> => {
    return new Promise((resolve) => {
      if (globalThis?.localStorage) {
        globalThis.localStorage.setItem(key, value);
        // memoryDB[key] = value
        resolve();
      } else {
        chrome.storage.local.set({ [key]: value }, () => {
          resolve();
        });
      }
    });
  };
}

export const localStorageDB = new WebDb();
