
export const storageService = {
    save,
    load,
}


 function save(key:string,value:any) {
    localStorage.setItem(key, JSON.stringify(value));

}
function load(key:string = 'cyberpunk') {
    const value = localStorage.getItem(key);
    return JSON.parse(value);

}

