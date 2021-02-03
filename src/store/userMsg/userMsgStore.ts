import { UserMsgType } from '../../types/UserMsg';
import { RootStore } from '../store';
import { action, makeObservable, observable } from 'mobx';

export class UserMsgStore {
  root: RootStore;
  userMsg: UserMsgType;

  constructor(root: RootStore) {
    this.root = root;
    this.userMsg = {
      msg: '',
      type: '',
      isOn: false,
    };
    makeObservable(this, {
      userMsg: observable,
      alert: action,
      clearAlert: action,
    });
    // no work here only assignments
  }

  init() {
    // safe to access other stores
    console.log('init user store');
  }

  alert({ msg, type }: any): void {
    this.userMsg = {
      msg,
      type,
      isOn: true,
    };
  }
  clearAlert(): void {
    this.userMsg = {
      msg: '',
      type: '',
      isOn: false,
    };
  }
}
