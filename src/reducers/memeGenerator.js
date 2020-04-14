import { SET_TOP_TEXT } from '../actions/MemeGeneratorActions';
import { SET_BOTTOM_TEXT } from '../actions/MemeGeneratorActions';
import { SET_RESPONSE } from '../actions/MemeGeneratorActions';
import { SET_RANDOM_IMG } from '../actions/MemeGeneratorActions';
import { URL } from '../constants/urls/urls';

const initialState = {
    topText: "",
    bottomText: "",
    randomImg: URL,
    allMemeImgs: [],
  }
  
  export const memeGeneratorReducer = (state = initialState, action) =>
  {
    switch (action.type) {
        case SET_TOP_TEXT:
          return { ...state, topText: action.payload }

        case SET_BOTTOM_TEXT:
        return { ...state, bottomText: action.payload }

        case SET_RESPONSE:
        return { ...state, allMemeImgs: action.payload }

        case SET_RANDOM_IMG:
        return { ...state, randomImg: action.payload }
    
        default:
          return state
      }
  }