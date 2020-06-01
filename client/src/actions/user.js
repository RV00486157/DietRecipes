import axios from '../config/Axios'
import { USER_LOADED, USER_UPDATE, LOGOUT } from './types'
import { setAlert } from './alert'

export const login = (formData) =>{
    axios.post("users/login", formData)
            .then(response=>{
                const token =response.data['x-auth']
                if(token){
                    localStorage.setItem('x-auth', token)
                    return true;
                }else{
                    console.log(response.data)
                }
                
            })
            .catch(err=>{
                console.log(err)
            })
}

export const registerUser = (formData) =>{
    axios.post('users/register', formData)
        .then(response=>{
            if(!response.data.hasOwnProperty('errors')){
                alert('Registered Successfully, Login to continue')
            }else{
                console.log(response.data)
                // if(errors){
                //     errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
                // }
               // dispatch(setAlert('error','danger'))
                alert(response.data.message)
            }
        })
        .catch(err=>{
            console.log(err)
        })
}

export const getUser = ()=> dispatch=>{    
    axios.get('users/account', {
        headers:{
            'x-auth' : localStorage.getItem('x-auth')
        }
    })
        .then(response=>{
            dispatch({
                type: USER_LOADED,
                payload: response.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
}

export const update_user = (formData,id) => dispatch =>{
    axios.put('users/edit',formData)
        .then(response=>{
            if(!response.data.hasOwnProperty('errors')&&response.data){
                dispatch({
                    type: USER_UPDATE,
                    payload: response.data
                })
            }else{
                alert(response.data.message)
            }
        })
        .catch(err=>{

        })
}

export const logout = () => dispatch =>{
    axios.delete('users/logout', {
        headers:{
            'x-auth' : localStorage.getItem('x-auth')
        }
    })
        .then(response=>{
            localStorage.clear()
            dispatch({
                type: LOGOUT
            })
        })
        .catch(err=>{

        })
}