import {PlaylistType} from '../../types/Playlist'
export  const createTemplateStore:any = {
        templates: [],
        setTemplates: function(temps:PlaylistType[])  {
            this.templates = temps
        },
        addTemplate: function(temp:PlaylistType) {
            this.templates.push(temp)
        },
        removeTemplate: function(tempId:string) {
            this.templates = this.templates.filter((template:PlaylistType) => template._id !== tempId)

        },
        updateTemplate: function(temp:PlaylistType) {
            const tempIdx = this.templates.findIndex((template:PlaylistType) => template._id === temp._id)
            this.templates[tempIdx] = temp
        }
}
