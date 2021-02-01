export interface ChatMsgType {
  msgTxt: string;
  timeSent: number;
  byUser: {
    name: string;
    profile_img: string;
  };
}
