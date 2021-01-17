export const cloudinaryService = {
    uploadImg
}
const CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME
const UPLOAD_PRESET = process.env.REACT_APP_UPLOAD_PRESET


async function uploadImg(img:any) {
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
    const formData = new FormData();
    formData.append('file', img)
    formData.append('upload_preset', UPLOAD_PRESET);
    try {
        const res = await fetch(UPLOAD_URL, {
            method: 'POST',
            body: formData
        })
        const data = await res.json()
        return data
    } catch (err) {
        console.log('error!',err);
    }
}