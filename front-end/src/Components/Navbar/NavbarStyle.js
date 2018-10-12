// Navbar
import { css } from 'emotion'


export const wrapper = css({
    width: '100%',
    height: '120px',
    position: 'sticky',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxSizing: 'border-box',
    padding: '20px',
    fontFamily: 'Montserrat',
    'z-index': 1,
    top: 0
})

export const buttonsContainer = css({
    display: 'flex',
    width: '200px',
    justifyContent: 'space-around',
    textDecoration: 'none',
    fontSize: '2rem'
})

export const textDecoration = css({
    textDecoration: 'none',
    color: 'black',
    fontSize: '2rem',
    ':hover': {
        color: '#5E3838',
        textDecoration: 'underline'
    }
})
