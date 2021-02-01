import { storageService } from '../../services/storageService';
import { RootStore } from '../store';
import { action, makeObservable, observable } from 'mobx';
export class ThemeStore {
  root: RootStore;
  theme: string;

  constructor(root: RootStore) {
    this.root = root;
    this.theme = storageService.load('theme') || 'dark';
    makeObservable(this, {
      theme: observable,
      setTheme: action,
    });
    // no work here only assignments
  }

  init() {
    // safe to access other stores
    console.log('init modal store');
  }

  setTheme(theme: string) {
    this.theme = theme;
    storageService.save('theme', theme);
  }
}
