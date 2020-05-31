import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import userReducer from '../reducers/user'
import dietsReducer from '../reducers/diets'
import alertReducer from '../reducers/alert'
import recipesReducer from '../reducers/recipes'
import ordersReducer from '../reducers/orders'

const configureStore = () =>{
    const store = createStore(combineReducers({
        user: userReducer,
        diets: dietsReducer,
        recipes: recipesReducer,
        orders: ordersReducer,
        alerts: alertReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore