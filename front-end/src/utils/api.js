import Axios from "../../node_modules/axios";


const getUserImages = () => {
    return Axios.get(process.env.REACT_APP_GET_USER_IMAGES, {withCredentials: true} ).then(response => response.data)
}

const getWorkInfoByID = () => {
    return Axios.get(process.env.REACT_APP_GET_WORK_INFO_BY_ID, {withCredentials: true}).then(response => response.data)
}

export const getUserById = () => {
    return Axios.get(process.env.REACT_APP_GET_USER_BY_ID, {withCredentials: true}).then(response => response.data)
}

export const homeImageGrid = () => {
    return Axios.get(process.env.REACT_APP_HOME_IMAGE_GRID).then(response => response.data)
}

export const updateUserInfo = (user) => {
    return Axios.put(process.env.REACT_APP_UPDATE_USER_INFO, user, {withCredentials: true})
    
}
export const updateWorkInfo = (work) => {
    return Axios.put(process.env.REACT_APP_UPDATE_USER_WORK, work, {withCredentials: true})
}

export const updateImageGallery = (image) => {
    return Axios.put(process.env.REACT_APP_UPDATE_UPDATE_IMAGE_GALLERY, {...image}, {withCredentials: true})
}

export const removeImage = (id) => {
    return Axios.delete(`${process.env.REACT_APP_REMOVE_IMAGE}${id}`)
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

