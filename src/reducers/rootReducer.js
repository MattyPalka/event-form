import {combineReducers} from 'redux'
import eventFormReducer from './eventFormReducer'
import toastReducer from './toastReducer'

const rootReducer = combineReducers({
    eventForm: eventFormReducer,
    toast: toastReducer
})

export default rootReducer