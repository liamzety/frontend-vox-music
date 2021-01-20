export  const createModalStore = {
        modal: {
            type:'',
            isOn:false
        },
        toggleModal: function(type:string = '')  {
            this.modal.type = type
            this.modal.isOn = !this.modal.isOn
        },
}
