import { SET_FOOTER } from 'constants/types';

const initState = {
    text: '',
    icon_url: ''
}

const footer = (state = initState, action) => {
    switch (action.type) {
        case SET_FOOTER:
            return {...state, ...action.footer}
        default:
            return state
    }
  }
  
  export default footer