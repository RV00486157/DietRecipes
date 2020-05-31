import React , {Fragment, useEffect} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { recipeSelector } from '../../selectors/recipeSelector'
import { removeRecipes } from '../../actions/recipes'
import { addOrders, editOrders, removeOrders } from '../../actions/orders'

const RecipesShow = (props) =>{
    let order = props.orders.find(order=>order.order_placed === false)
    const checkOrder = () =>{
        //const order = props.orders.find(order=>order.order_placed === false)
        if(order){
            if(order.recipes.find(rec=>rec.recipe === props.recipe._id)){
                return true
            }else{
                return false
            }
        }
    }

    const onIncrement = () =>{
        
        order.recipes=order.recipes.map(recipe=>{
            if(recipe.recipe === props.recipe._id){
                return Object.assign({}, recipe, {quantity: parseInt(recipe.quantity)+ 1})
            }else{
                return Object.assign({},recipe)
            }
        })
        order.total += props.recipe.price
        console.log(order)
        props.editOrders(order, order._id)
    }

    const onDecrement =async () =>{
        order.recipes=order.recipes.map(recipe=>{

            if(recipe.recipe === props.recipe._id){
                if(recipe.quantity === 1){
                    return
                }
                console.log("here")
                const newQuantity = recipe.quantity - 1
                return Object.assign({}, recipe, {quantity: newQuantity})

            }else{
                return Object.assign({},recipe)
            }
        }).filter(recipe=>recipe!= false)
        order.total -= props.recipe.price
        if(order.total === 0){
            const id = order._id
            //order = undefined
           await props.removeOrders(id)  
            
        }else{
            
            //console.log(order)
            props.editOrders(order, order._id)
        }
        
    }
    

    const handleOrder = () =>{
        if(props.orders.length===0 || !props.orders.find(order=>order.order_placed==false)){
            props.addOrders({
                'recipes': {'recipe':props.recipe._id,
                            'quantity': 1},
                'total': props.recipe.price
            })
        }else{
            //const order = props.orders.find(order=>order.order_placed === false)
            let formData,recipe
            if(order.recipes.find(recipe=>recipe.recipe === props.recipe._id)){
                recipe = order.recipes.find(rec=>rec.recipe === props.recipe._id)
                formData = {
                    'recipes':order.recipes.filter(rec=>rec.recipe !== props.recipe._id).concat({
                        'recipe':props.recipe._id,
                        'quantity': recipe.quantity+1
                    }),
                    'total': order.total+props.recipe.price
                }
            }else{
                formData = {
                    'recipes':[...order.recipes].concat({
                        'recipe': props.recipe._id,
                        'quantity':1
                    }),
                    'total' : order.total+props.recipe.price
                }
                
            }
            props.editOrders(formData,order._id)
            console.log(formData)
        }
    }

    return (
        <Fragment>
        {props.recipe? (
            <Fragment>
            <h1>{props.recipe.name}</h1>
            <p>{props.recipe.description}</p>
            <p><strong>Calories: </strong>{props.recipe.calories}</p>
            <h3>Ingredients Required</h3>
            <ul className="recipe-show">
                {
                    props.recipe.ingredients.split(',').map((ingredient,i)=>{
                        return <li key={i}>{ingredient}</li>
                    })
                }
            </ul>
            <h3>Steps</h3>
            <ul className="recipe-show">
                {
                    props.recipe.steps.split('\n').map((step,i)=>{
                        return <li key={i}>{step}</li>
                    })    
                }
            </ul>
            <p><strong>Price: </strong>{props.recipe.price}</p>
            {
                 Object.keys(props.user).length > 0 && props.user.role === 'admin' ?
                (
                <>
                    <div className="options">
                    <button><Link to={`/recipes/edit/${props.match.params.id}`}>Edit</Link></button>
                    <button onClick={()=>{
                        props.removeRecipes(props.recipe._id)
                        props.history.push("/recipes")
                        window.location.reload()
                    }}>Delete</button>
                    </div>
                </>
                ):(
                    <Fragment>
                    {
                        checkOrder()?(
                            <div>
                                <button onClick={onIncrement} className="incdec">+</button> 
                                {order.recipes.find(rec=>rec.recipe === props.recipe._id).quantity}
                                <button onClick={onDecrement} className="incdec">-</button>
                            </div>
                        ):(
                            <button onClick={()=>{
                                handleOrder()          
                            }}>Add to cart</button>
                        )
                    }
                    </Fragment>
                )
            }
        </Fragment>
        ): (
            <p>loading</p>
        )}
        </Fragment>
    )
}


const mapStateToProps = (state, props) =>{
    const id = props.match.params.id
    return {
        recipe: recipeSelector(state.recipes,id ),
        user: state.user,
        orders: state.orders
    }
}

export default connect(mapStateToProps,{removeRecipes, addOrders, editOrders, removeOrders})(RecipesShow)