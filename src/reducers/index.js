import { combineReducers } from 'redux';
import { memeGeneratorReducer } from './memeGenerator';

export const rootReducer = combineReducers({
    memeGenerator: memeGeneratorReducer,
})