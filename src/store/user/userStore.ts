export const createUserStore= {
        user: {},
        setUser: function(user:any) {
            this.user = user
        },
        resetUser: function() {
            this.user = {}
        }
}
