import { GET_RECIPES, ADD_RECIPES, REMOVE_RECIPES, EDIT_RECIPE } from './types'
import axios from '../config/Axios'

export const getRecipes = () => dispatch =>{
    axios.get('recipes')
    .then(response=>{
        dispatch({
            type: GET_RECIPES,
            payload: response.data
        })
    })
}

export const addRecipes = (formData) => dispatch =>{
    axios.post('recipes/add_recipe', formData)
        .then(response=>{
            if(!response.hasOwnProperty('errors')){
                dispatch({
                    type: ADD_RECIPES,
                    payload: response.data
                })
            }else{
                alert('Something went wrong')
                console.log(response.data)
            }
        })
        .catch(err=>{
            alert('Something went wrong')
        })
}

export const editRecipes = (formData, id) => dispatch =>{
    axios.put(`recipes/${id}`, formData)
        .then(response=>{
            if(!response.data.hasOwnProperty('errors')){
                dispatch({
                    type: EDIT_RECIPE,
                    payload:{
                        'data':response.data,
                        'id': id
                    } 
                })
            }else{
                alert('Something went wrong')
                console.log(response.data)
            }
        })
        .catch(err=>{
            alert('Something went wrong')
        })
}

export const removeRecipes = (id) => dispatch =>{
    axios.delete(`recipes/${id}`)
        .then(response=>{
            if(response){
                dispatch({
                    type: REMOVE_RECIPES,
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