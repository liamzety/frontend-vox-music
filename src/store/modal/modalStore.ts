import { action, makeObservable, observable } from 'mobx';
import { RootStore } from '../store';

export class ModalStore {
  root: RootStore;
  modal: {
    type: string;
    isOn: boolean;
  };

  constructor(root: RootStore) {
    this.root = root;
    this.modal = {
      type: '',
      isOn: false,
    };
    makeObservable(this, {
      modal: observable,
      toggleModal: action,
    });
    // no work here only assignments
  }

  init() {
    // safe to access other stores
    console.log('init modal store');
  }
  get modalType() {
    return this.modal.type;
  }
  toggleModal(type: string = '') {
    console.log('this:', this);
    this.modal.type = type;
    this.modal.isOn = !this.modal.isOn;
  }
}
