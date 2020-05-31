import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { startGetUsers } from '../src/actions/users'
import { getUser } from '../src/actions/user'
import configureStore from './store/configureStore'

const store = configureStore()
console.log(store.getState())
if(localStorage.getItem('x-auth')){
    store.dispatch(getUser(localStorage.getItem('email')))
}
store.subscribe(()=>{
    console.log(store.getState())
})

const jsx = (
    <Provider store={store}>
        <App/>
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'));

