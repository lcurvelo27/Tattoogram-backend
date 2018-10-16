import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import '@fortawesome/fontawesome-free/js/all.js'
import { getUserAllByID, updateUserInfo, updateWorkInfo, updateImageGallery, removeImage } from '../../utils/api';
import { navButtons, saveAndCancelButtons, inputFormContainer, buttonsContainer, galleryContainer, inputDiv, wrapper, editMenuContainer, navigationMenu, rightSideContentContainer } from './EditStyle'

const Buttons = (props) =>{
    return(
        <div className={buttonsContainer}>
            <button onClick={() => props.saveInfo()} className={saveAndCancelButtons}>Save</button>
            <button onClick={() => props.reset()} className={saveAndCancelButtons}>Cancel</button>
        </div>
    )
}

const Input = (props) => {
    return(
        <div className = {inputDiv}>
            <label>{props.children}</label><input type="text" value={props.value} onChange={(e) => props.updateInput(props.state, e.target.value)} style={props.width ? props.width : null}/>
        </div>
    )
}

const NavigationMenu = (props) => {
    let values = ['Personal Info', 'Work Info', 'Gallery']
    let menu = values.map(value => {
        return (
            <div style={{width: '100%'}} tabIndex='0'>
                <button className={navButtons} onClick={() => props.handleMenuClick(value)}>{value}</button>
            </div>
        )
    })
    return(
        <div className = { navigationMenu }>
            {menu}
        </div>
    )
}


class PersonalInfoEditSection extends Component {
    state = {
        firstname: this.props.firstname,
        lastname: this.props.lastname,
        username: this.props.username,
        profilepicture: this.props.profilepicture
    }

    updateInput = (state, value) => {
        this.setState(
            {[state]: value}
        )
    }

    saveInfo = () => {
        updateUserInfo({...this.state}).then(response => {
            let updatedUser = response.data[0]
            this.setState({updatedUser}, () => console.log(this.state))
        })
    }

    render() {
        return(
            <div className={rightSideContentContainer}>
                <h3>Personal Info</h3>
                <div className={inputFormContainer}>
                    <Input state={'firstname'} value={this.state.firstname} updateInput={this.updateInput} width={{width: '50%'}}>Name: </Input>
                    <Input state={'lastname'} value={this.state.lastname} updateInput={this.updateInput} width={{width: '50%'}}>Last Name: </Input>
                    <Input state={'username'} value={this.state.username} updateInput={this.updateInput} width={{width: '50%'}}>Username: </Input>
                    <Input state={'profilepicture'} value={this.state.profilepicture} updateInput={this.updateInput} width={{width: '50%'}}>Profile Picture Url: </Input>
                    <img src={this.state.profilepicture} alt='profile picture' height= '100' width='100' style={{borderRadius: '100%', marginTop: '50px'}}/>
                </div>
                <Buttons saveInfo = {this.saveInfo}/>
            </div>
        )
    }
}

let RoleSelection = (props) => {
    return(
        <div className={inputDiv}> 
        <p>Role:</p>
        <select defaultValue={props.role ? props.role : 'default'} onChange={(e) => props.updateInput('role', e.target.value)}>
            <option value='default' hidden> Choose a role </option>
            <option value='tattoo'> Tattoo Artist </option>
            <option value='hairstyle'> Hairstylist/Barber </option>
        </select>
    </div>
    )
}

class WorkInfoEditSection extends Component {
    state = {  
        location: this.props.workInfo ? this.props.workInfo.location : '',
        about: this.props.workInfo ? this.props.workInfo.about : '',
        email: this.props.workInfo ? this.props.workInfo.email : '',
        role: this.props.workInfo ? this.props.workInfo.role: ''
    }

    updateInput = (state, value) => {
        this.setState(
            {[state]: value}
        ,() => console.log(this.state))
    }

    saveInfo = () => {
        updateWorkInfo({...this.state}).then(response => {
            let newState = response.data[0]
            this.setState(newState)
        })
    }

    render() {
        console.log(this.state)
        return(
            <div className={rightSideContentContainer}>
                <h3>Work Info</h3>
                <div className={inputFormContainer}>
                    <Input state={'about'} value={this.state.about} updateInput={this.updateInput} width={{width: '50%'}}>About: </Input>
                    <Input state={'location'} value={this.state.location} updateInput={this.updateInput} width={{width: '50%'}}>Location Address: </Input>
                    <Input state={'email'} value={this.state.email} updateInput={this.updateInput} width={{width: '50%'}}>Email Address: </Input>
                    <RoleSelection updateInput={this.updateInput} role={this.state.role}/>
                </div>
                <Buttons saveInfo={this.saveInfo}/>
            </div>
        )
    }
}

// IMAGE BOX FOR GALLERY EDIT - BUILT IN ORDER TO BUILD THE CONDITIONAL RENDERING WHEN HOVERING AN IMAGE//

class ImageBox extends Component {
    constructor(props){
        super(props)

        this.state = {
            isHovering: false,
            image: props.image
        }
    }

    hoverMouseHandler = () => {        
        this.setState(currentState => {
            return {
                isHovering: !currentState.isHovering
            }
        })
    }


    render() {
        return(
                <div onMouseEnter={this.hoverMouseHandler} onMouseLeave={this.hoverMouseHandler}>
                    <img src={this.state.image.url} alt={this.state.image.url} height='120' />
                {
                    this.state.isHovering &&
                    <div onClick={() => this.props.removeImage(this.state.image.id)}>
                        <i className="fas fa-times"></i>
                    </div>
                }
                </div>
        )
    }
}

class GalleryEditSection extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            images: props.images,
            url: '',
            description: ''
        }
    }

    updateInput = (state, value) => {
        this.setState(
            {[state]: value}
        )
    }


    static getDerivedStateFromProps = (props, state) => {
        if(props.images.length !== state.images.length){
            return {
                images: props.images
            }
        }
        return null  
    }

    render() {
        let gallery = this.state.images.map((image, i) => {
            return(
                <div style={{padding: '5px'}} key={i}>
                    <ImageBox image={image} removeImage={this.props.removeImage}/>
                </div>
            )
        })
        return(
            <div className={rightSideContentContainer}>
                <h3>Gallery</h3>
                <div className={galleryContainer}>
                    {gallery}
                </div>
                <div className={inputFormContainer}>
                    <Input state={'url'} value={this.state.url} updateInput={this.updateInput} width={{width: '70%'}}> Image URL </Input>
                    <Input state={'description'} value={this.state.description} updateInput={this.updateInput} width={{width: '70%'}}> Description </Input>
                    <button onClick={() => this.props.saveInfo(this.state.url, this.state.description)} className={saveAndCancelButtons}>Add</button>
                </div>
            </div>
        )
    }
}


class EditMenu extends Component {
    state = {
        user: [],
        images: [],
        workInfo: [],
        editSelected: 'Personal Info',
        loading: true
    }

    componentDidMount() {
        getUserAllByID().then(response => {
            let newImagesState = response.images
            let newUserState = response.user[0] 
            let newWorkInfo = response.work[0] 

            this.setState({
                images: newImagesState,
                user: newUserState,
                workInfo: newWorkInfo,
                loading: false
            }, () => console.log(this.state))
        })
    }

    handleMenuClick = value => {
        this.setState({
            editSelected: value
        })
    }

    removeImage = (id) => {
        removeImage(id).then(response => {
            getUserAllByID(1).then(response => {
                let newImagesState = response.images
                this.setState({
                    images: newImagesState
                })
            })
        })
    }

    saveInfo = (url, description) => {
        updateImageGallery({artistid: 1, url: url, description: description})
            .then(response => {
                getUserAllByID(1).then(response => {
                    let newImagesState = response.images
        
                    this.setState({
                        images: newImagesState
                    })
                })
            })
    }

    render(){
        return(
            <div className={ wrapper }>
                <Navbar home={false}/>
                <div className = { editMenuContainer }>
                    {/*Left side of menu*/}
                    <NavigationMenu handleMenuClick={this.handleMenuClick}/> 
                    {/*right side of the menu*/}
                    <div style={{width: '100%'}}> 
                    { !this.state.loading ? 
                    <div style={{height: '100%'}}>
                        { 
                        this.state.editSelected == 'Personal Info' &&
                        <PersonalInfoEditSection 
                            firstname = {this.state.user.firstname ? this.state.user.firstname : ''}
                            lastname = {this.state.user.lastname ? this.state.user.lastname : ''}
                            username = {this.state.user.username ? this.state.user.username : ''}
                            profilepicture = {this.state.user.profilepicture ? this.state.user.profilepicture : ''}
                        />
                        }
                        
                        { 
                        this.state.editSelected == 'Work Info' &&
                        <WorkInfoEditSection 
                            workInfo = {this.state.workInfo ? this.state.workInfo : null}
                        />
                        }
                        
                        { 
                        this.state.editSelected == 'Gallery' &&
                        <GalleryEditSection images={this.state.images} removeImage={this.removeImage} saveInfo={this.saveInfo}/>
                        }
                        </div>
                        :
                        <p>Loading</p>
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default EditMenu