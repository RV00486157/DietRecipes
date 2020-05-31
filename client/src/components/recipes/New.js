import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

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
            {
                Object.keys(props.user).length > 0 && props.user.role === 'admin' ? (
                    <Fragment>
                        <h2>Add new Recipe</h2>
                         <RecipeForm handleSubmit={handleSubmit}/>
                    </Fragment>
                ):(

                    <Redirect to="/diets" />
                )
            }
        </Fragment>  
    )
}

const mapStateToProps = state =>{
    return {
        user: state.user
    }
}

export default connect(mapStateToProps,{ addRecipes })(RecipeNew)