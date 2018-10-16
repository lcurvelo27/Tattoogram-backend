import Axios from "../../node_modules/axios";


const getUserImages = () => {
    return Axios.get(`${process.env.REACT_APP_LOCALHOST}/api/getImagesById/:id`, {withCredentials: true} ).then(response => response.data)
}

const getWorkInfoByID = () => {
    return Axios.get(`${process.env.REACT_APP_LOCALHOST}/api/workInfo`, {withCredentials: true}).then(response => response.data)
}

export const getUserById = () => {
    return Axios.get(`${process.env.REACT_APP_LOCALHOST}/api/getUserById/:id`, {withCredentials: true}).then(response => response.data)
}

export const homeImageGrid = () => {
    return Axios.get(`${process.env.REACT_APP_LOCALHOST}/api/images`).then(response => response.data)
}

export const updateUserInfo = (user) => {
    return Axios.put(`${process.env.REACT_APP_LOCALHOST}/api/userInfo`, user, {withCredentials: true})
}

export const updateWorkInfo = (work) => {
    return Axios.put(`${process.env.REACT_APP_LOCALHOST}/api/workInfo`, work, {withCredentials: true})
}

export const updateImageGallery = (image) => {
    return Axios.put(`${process.env.REACT_APP_LOCALHOST}/api/addImage`, {...image}, {withCredentials: true})
}

export const removeImage = (id) => {
    return Axios.delete(`${process.env.REACT_APP_LOCALHOST}/api/deleteImage/${id}`)
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

