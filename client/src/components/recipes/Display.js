import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

const Display = (props) =>{
    let color 
    return(
        <Fragment>
            <h1>Recipes</h1>
            <ul>
                {
                    props.recipes.map(recipe=>{
                        // return <li key={recipe._id}>{recipe.name}</li>
                        color = recipe.type == "Non-Vegetarian" ? 'red' : recipe.type == "Eggetarian" ? 'brown' : 'green'
                        return (
                            <Card style={{ width: '16rem', height: '12rem' }} key={recipe._id} className="recipes">
                                <Card.Img variant="top" src=''/>
                                <Card.Body>
                                    <Card.Title>{recipe.name}</Card.Title>
                                    <Card.Text>
                                        {recipe.description.substr(0,50)} ...
                                    </Card.Text>
                                    <i className="far fa-stop-circle" style={{color:color}}></i>
                                    <Button variant="primary"><Link className="link" to={`/recipes/${recipe._id}`}>Details</Link></Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </ul>
        </Fragment>
    )
}

export default Display