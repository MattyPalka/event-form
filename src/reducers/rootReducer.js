import {combineReducers} from 'redux'
import eventFormReducer from './eventFormReducer'

const rootReducer = combineReducers({
    eventForm: eventFormReducer
})

export default rootReducer