import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { addRecipes } from '../../actions/recipes'
import RecipeForm from './RecipeForm'

const RecipeNew = (props) =>{
    const handleSubmit = (formData) =>{
        props.addRecipes(formData)
        props.history.push("/recipes")
        window.location.reload()
    }
    return (
        <Fragment>
            <h2>Add new Recipe</h2>
            <RecipeForm handleSubmit={handleSubmit}/>
        </Fragment>
    )
}

export default connect(null,{ addRecipes })(RecipeNew)