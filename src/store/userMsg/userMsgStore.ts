import { userMsg } from "../../types/userMsg";

export  const createUserMsgStore = {
        userMsg :  {
            msg:'',
            type:'',
            isOn:false
        } as userMsg,
        alert: function(err:{msg:string,type:string}):void  {
            console.log('alerting', )
            this.userMsg = {
                 ...err,
                isOn:true
            }
        },
        clearAlert: function(time = 3000):void  {
            setTimeout(() => {
                this.userMsg = {
                    msg:'',
                    type:'',
                    isOn:false
                }
            }, time);
        }
  
}
