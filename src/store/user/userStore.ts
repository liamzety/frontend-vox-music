import { RootStore } from '../store';
import { action, makeObservable, observable } from 'mobx';
import { UserType } from '../../types/User';

export const createUserStore = {
  user: {},
  setUser: function (user: any) {
    //1 Month cookie
    const now = new Date();
    now.setMonth(now.getMonth() + 1);
    document.cookie = `userId=${user._id}; expires=${now.toUTCString()}`;
    this.user = { ...user, isSignedIn: true };
  },
  resetUser: function () {
    document.cookie = 'userId=;expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    this.user = {};
  },
};

export class UserStore {
  root: RootStore;
  user: UserType;

  constructor(root: RootStore) {
    this.root = root;
    this.user = {
      _id: '',
      email: '',
      password: '',
      name: '',
      profile_img: '',
      isSignedIn: false,
    };
    // no work here only assignments
    makeObservable(this, {
      user: observable,
      setUser: action,
      resetUser: action,
    });
  }

  init() {
    // safe to access other stores
    console.log('init user store');
  }

  setUser(user: UserType) {
    //1 Month cookie
    const now = new Date();
    now.setMonth(now.getMonth() + 1);
    document.cookie = `userId=${user._id}; expires=${now.toUTCString()}`;
    this.user = { ...user, isSignedIn: true };
  }
  resetUser() {
    document.cookie = 'userId=;expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    this.user = {
      _id: '',
      email: '',
      password: '',
      name: '',
      profile_img: '',
      isSignedIn: false,
    };
  }
}
