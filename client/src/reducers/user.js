import { USER_LOADED, LOGOUT, USER_UPDATE } from '../actions/types'

const initialState = {}

export default function(state = initialState, action){
    const { type, payload } = action
    switch(type){
        case USER_LOADED:
            return {...payload}
        case USER_UPDATE:
            return {...payload}
        case LOGOUT:
            return {}
        default:
            return state
    }
}