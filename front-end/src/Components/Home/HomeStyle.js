import { css } from 'emotion'
import background from '../../utils/images/pexels-photo-1327214.jpeg'

export const container = css({
    width: '50%',
    textAlign: 'center',
    margin: 'auto',
    fontSize: '1.3rem',
    fontFamily: 'Montserrat',
    letterSpacing: '1.5px',
    marginTop: '100px',
    color: '#020404'
})

export const splash = css({
    width: '100%',
    height: '90vh',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover'
})

export const applyButton = css({
    backgroundColor: '#6ED2CE',
    color: '#EEFDFC',
    height: '50px',
    borderRadius: '10px',
    marginTop: '60px'
})

export const footer = css({
    backgroundColor: '#EFEFEF',
    width: '100%',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat',
    marginTop: '100px'
})

export const socialMediaGrid = css({
    display: 'flex',
    justifyContent: 'space-around',
    alignContent: 'center',
    width: '15%',
    fontSize: '1.5rem'
})