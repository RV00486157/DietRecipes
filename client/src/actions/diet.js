import { GET_DIETS, ADD_DIET, REMOVE_DIET, EDIT_DIET } from './types'
import axios from '../config/Axios'

export const getDiets = () => dispatch =>{
    axios.get('diets')
        .then(response=>{
            dispatch({
                type: GET_DIETS,
                payload: response.data
            })
        })
        .catch(err=>{
            alert('Something went wrong')
        })
}

export const editDiets = (formData, id) => dispatch =>{
    axios.put(`diets/${id}`, formData)
        .then(response=>{
            if(!response.data.hasOwnProperty('errors')){
                dispatch({
                    type: EDIT_DIET,
                    payload: {
                        'id': id,
                        'data': response.data
                    }
                })
            }else{
                console.log(response.data)
            }
        })
        .catch(err=>{
            alert('Something went wrong')
        })
}

export const addDiets = (formData) => dispatch =>{
    axios.post('diets/add_diet', formData)
        .then(response=>{
            if(!response.data.hasOwnProperty('errors')){
                dispatch({
                    type: ADD_DIET,
                    payload: response.data
                })
            }else{
                console.log(response.data)
            }
        })
        .catch(err=>{
            alert('Something went wrong')
        })
}

export const removeDiets = (id) => dispatch =>{
    axios.delete(`diets/${id}`)
        .then(response=>{
            if(response){
                dispatch({
                    type: REMOVE_DIET,
                    payload: id
                })
            }
        })
        .catch(err=>{
            alert('Something went wrong')
        })
}