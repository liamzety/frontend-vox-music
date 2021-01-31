import { userMsg } from '../../types/userMsg';
import { RootStore } from '../store';
import { action, makeObservable, observable } from 'mobx';

export class UserMsgStore {
  root: RootStore;
  userMsg: {
    msg: string;
    type: string;
    isOn: boolean;
  };

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
    this.userMsg.msg = msg;
    this.userMsg.type = type;
    this.userMsg.isOn = true;
  }
  clearAlert(time = 3000): void {
    setTimeout(() => {
      this.userMsg.msg = '';
      this.userMsg.type = '';
      this.userMsg.isOn = false;
    }, time);
  }
}
