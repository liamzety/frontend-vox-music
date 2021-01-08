import {TemplateType} from '../../types/Template'
export  const createTemplateStore:any = {
        templates: [],
        setTemplates: function(temps:TemplateType[])  {
            this.templates = temps
        },
        addTemplate: function(temp:TemplateType) {
            this.templates.push(temp)
        },
        removeTemplate: function(tempId:string) {
            this.templates = this.templates.filter((template:TemplateType) => template._id !== tempId)

        },
        updateTemplate: function(temp:TemplateType) {
            const tempIdx = this.templates.findIndex((template:TemplateType) => template._id === temp._id)
            this.templates[tempIdx] = temp
        }
}
