import { userMsg } from "../../types/userMsg";

export  const createUserMsgStore = {
        userMsg :  {
            msg:'',
            type:'',
            isOn:false
        } as userMsg,
        alert: function(msg:string,type:string):void  {
            this.userMsg = {
                msg,
                type,
                isOn:true
            }
        },
        clearAlert: function():void  {
            setTimeout(() => {
                this.userMsg = {
                    msg:'',
                    type:'',
                    isOn:false
                }
            }, 3000);
        }
  
}
