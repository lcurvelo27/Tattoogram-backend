import Axios from "../../node_modules/axios";


const getUserImages = () => {
    return Axios.get(`http://localhost:3005/api/getImagesById/:id`, {withCredentials: true} ).then(response => response.data)
}

const getWorkInfoByID = () => {
    return Axios.get(`http://localhost:3005/api/workInfo`, {withCredentials: true}).then(response => response.data)
}

export const getUserById = () => {
    return Axios.get(`http://localhost:3005/api/getUserById/:id`, {withCredentials: true}).then(response => response.data)
}

export const homeImageGrid = () => {
    return Axios.get('http://localhost:3005/api/images').then(response => response.data)
}

export const updateUserInfo = (user) => {
    return Axios.put('http://localhost:3005/api/userInfo', user, {withCredentials: true})
}

export const updateWorkInfo = (work) => {
    return Axios.put('http://localhost:3005/api/workInfo', work, {withCredentials: true})
}

export const updateImageGallery = (image) => {
    return Axios.put(`http://localhost:3005/api/addImage`, {...image}, {withCredentials: true})
}

export const removeImage = (id) => {
    return Axios.delete(`http://localhost:3005/api/deleteImage/${id}`)
}

export const getUserAllByID = () => {
    return Axios.all([getUserById(), getUserImages(), getWorkInfoByID()])
        .then(Axios.spread((user, images, work) => {
            return {
                user: user,
                images: images,
                work: work
            }
        }))
}

