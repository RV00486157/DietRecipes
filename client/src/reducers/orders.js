import { GET_ORDERS, ADD_ORDERS, EDIT_ORDERS, REMOVE_ORDERS } from '../actions/types'

const initialState = []

export default function(state= initialState, action){
    const { type, payload } = action
    switch(type){
        case GET_ORDERS:
            return [...payload]
        case ADD_ORDERS:
                return [...state].concat(payload)
        case EDIT_ORDERS:
                return state.map(order=>{
                    if(order._id == payload.id){
                        return Object.assign({}, payload.data)
                    }else{
                        return Object.assign({},order)
                    }
                })
        case REMOVE_ORDERS:
                return state.map(order=>{
                    if(order._id !== payload){
                        Object.assign({}, order)
                    }
                })
        default: 
            return state
    }
}
