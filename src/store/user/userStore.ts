export const createUserStore= {
        user: {},
        setUser: function(user:any) {
             //1 Month cookie
             const now = new Date();
             now.setMonth(now.getMonth() + 1);
             document.cookie = `userId=${user._id}; expires=${now.toUTCString()}`
            this.user = {...user,isSignedIn:true}
        },
        resetUser: function() {
            document.cookie = "userId=;expires=Thu, 01 Jan 1970 00:00:00 UTC;"
            this.user = {}
        }
}
