import { ModalStore } from './modal/modalStore';
import { PlayerStore } from './player/playerStore';
import { PlaylistStore } from './playlist/playlistStore';
import { ThemeStore } from './theme/themeStore';
import { UserStore } from './user/userStore';
import { UserMsgStore } from './userMsg/userMsgStore';

export class RootStore {
  playlistStore: PlaylistStore;
  themeStore: ThemeStore;
  userMsgStore: UserMsgStore;
  modalStore: ModalStore;
  userStore: UserStore;
  playerStore: PlayerStore;

  constructor() {
    this.playlistStore = new PlaylistStore(this);
    this.themeStore = new ThemeStore(this);
    this.userMsgStore = new UserMsgStore(this);
    this.modalStore = new ModalStore(this);
    this.userStore = new UserStore(this);
    this.playerStore = new PlayerStore(this);

    // call init method on all child classes
    // use a loop if there are to many classes
    this.playlistStore.init();
    this.themeStore.init();
    this.userMsgStore.init();
    this.modalStore.init();
    this.userStore.init();
    this.playerStore.init();
  }
}
