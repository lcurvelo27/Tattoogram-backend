import { css } from 'emotion'

export const wrapper = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    fontFamily: 'Montserrat'
})

export const editMenuContainer = css({
    display: 'flex',
    width: '100%',
    height: '100%',
    border: '1px solid #E7E7E7'
})

export const inputFormContainer = css({
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
})

export const navigationMenu = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '30%',
    height: '100%',
    backgroundColor: '#E7E7E7',
    fontFamily: 'Montserrat'
})

export const rightSideContentContainer = css({
    width: '100%',
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    fontFamily: 'Montserrat'
})

export const inputDiv = css({
    width: '80%',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'space-between'
})

export const galleryContainer = css({
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '90%',
    height: '50%',
    border: '0.5px solid #E7E7E7',
    'overflow-y': 'scroll',
    '::-webkit-scrollbar': {
        width: '5px'
    },
    '::-webkit-scrollbar-thumb': {
        'border-radius': '4px',
        'background-color': 'rgba(0,0,0,.5)',
        '-webkit-box-shadow': '0 0 1px rgba(255,255,255,.5)'
    },
    padding: '10px'
})

export const buttonsContainer = css({
    display: 'flex',
    justifyContent: 'space-between',
    width: '20%',
    fontFamily: 'Montserrat'
})

export const saveAndCancelButtons = css({
    backgroundColor: 'inherit',
    border: '1px solid black',
    height: '50px',
    width: '100px',
    color: '#1B0E0E',
    transition: 'all 0.3s ease',
    ':hover': {
        color: '#5A4B4B',
        border: '1px solid #5A4B4B'
    }
})

export const navButtons = css({
    backgroundColor: 'inherit',
    width: '100%',
    border: 'none',
    height: '50px',
    ':hover':{
        color: '#B8B7B7'
    },
    ':focus': {
        outline: 'none',
        backgroundColor: '#B8B7B7',
        color: 'black'
    }
})
