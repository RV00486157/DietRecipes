import { GET_ORDERS, ADD_ORDERS, EDIT_ORDERS, REMOVE_ORDERS } from './types'
import axios from '../config/Axios'

export const getOrders = (user) => dispatch =>{
    axios.get('orders')
        .then(response=>{
            if(response.data.length !==0){
                dispatch({
                    type: GET_ORDERS,
                    payload: response.data
                })
            }
        })
        .catch(err=>{
            alert('Something went wrong')
        })
}

export const addOrders = (formData) => dispatch =>{
    axios.post('orders/add_order', formData)
        .then(response=>{
            if(!response.data.hasOwnProperty('errors')){
                dispatch({
                    type: ADD_ORDERS,
                    payload: response.data
                })
            }else{
                alert('something went wrong')
                console.log(response.data)
            }
        })
        .catch(err=>{
            alert('Something went wrong')
        })
}

export const editOrders = (formData,id) => dispatch =>{
    axios.put(`orders/${id}`, formData)
        .then(response=>{
            console.log(response)
            if(response.data){
                dispatch({
                    type: EDIT_ORDERS,
                    payload: {
                        "id": id,
                        "data": response.data
                    }
                })
            }
        })
        .catch(err=>{
            alert('Something went wrong')
            console.log(err)
        })
}

export const removeOrders = (id) => dispatch =>{
    axios.delete(`orders/${id}`)
        .then(response=>{
            if(response.data){
                console.log("called"+response.data)
                dispatch({
                    type: REMOVE_ORDERS,
                    payload: id
                })               
            }else{
                alert('something went wrong')
            }
        })
        .catch(err=>{
            alert('Something went wrong')
        })
}