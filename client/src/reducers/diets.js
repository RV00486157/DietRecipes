import { GET_DIETS, ADD_DIET, REMOVE_DIET, EDIT_DIET } from '../actions/types'
const initialState = []

export default function(state = initialState, action){
    const { type, payload } = action
    switch(type){
        case GET_DIETS:
            return [...state, ...payload]
        case ADD_DIET:
            return [...state].concat(payload)
        case EDIT_DIET:
            return state.map(diet=>{
                if(diet._id == payload.id){
                    return Object.assign({}, payload.data)
                }else{
                    return Object.assign({},diet)
                }
            })
        case REMOVE_DIET:
            return state.map(diet=>{
                if(diet._id !== payload){
                    return Object.assign({}, diet)
                }
            })
        default:
            return state
    }
}