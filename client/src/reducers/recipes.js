import { GET_RECIPES, ADD_RECIPES, REMOVE_RECIPES, EDIT_RECIPE} from '../actions/types'

const initialState = []

export default function(state = initialState, action){
    const { type, payload } = action
    switch(type){
        case GET_RECIPES:
            return [...payload]
        case ADD_RECIPES:
            return [...state].concat(payload)
        case EDIT_RECIPE:
            return state.map(recipe=>{
                if(recipe._id == payload.id){
                    Object.assign({}, payload.data)
                }else{
                    Object.assign({},recipe)
                }
            })
        case REMOVE_RECIPES:
            return state.map(recipe=>{
                if(recipe._id !== payload){
                    Object.assign({}, recipe)
                }
            })
        default:
            return state
    }
}