import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { editRecipes } from '../../actions/recipes'
import { recipeSelector } from '../../selectors/recipeSelector'
import RecipeForm from './RecipeForm'

const RecipeEdit = (props) =>{
    const id = props.match.params.id
    const handleSubmit = (formData) =>{
        props.editRecipes(formData, id)
        props.history.push('/recipes')
        window.location.reload()
    }
    return (
        <Fragment>
            <h2>Edit Recipe</h2>
            <RecipeForm handleSubmit={handleSubmit} recipe={props.recipe}/>
        </Fragment>
    )
}
const mapStateToProps = (state, props) =>{
    const id = props.match.params.id
    return {
        recipe: recipeSelector(state.recipes,id )
    }
}
export default connect(mapStateToProps,{ editRecipes })(RecipeEdit)