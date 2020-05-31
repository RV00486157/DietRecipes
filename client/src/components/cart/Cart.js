import React , {Fragment, useEffect} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getOrders, editOrders, removeOrders } from '../../actions/orders'

const Cart = (props) =>{
    useEffect(()=>{
        if(props.orders.length===0){
            props.getOrders()
        }
    },[props.getOrders])
    let order = props.orders.find(order=>order.order_placed === false)

    const onIncrement = (id) =>{
        
        order.recipes=order.recipes.map(recipe=>{
            if(recipe.recipe === id){
                return Object.assign({}, recipe, {quantity: parseInt(recipe.quantity)+ 1})
            }else{
                return Object.assign({},recipe)
            }
        })
        order.total += props.recipes.find(recipe=>recipe._id === id).price
        props.editOrders(order, order._id)
    }

    const onDecrement = (id) =>{
        order.recipes=order.recipes.filter(recipe=>{
            if(recipe.recipe === id){
                if(recipe.quantity === 1){
                    return
                }
                // const newQuantity = recipe.quantity - 1
                // console.log(newQuantity)
                //return Object.assign({}, recipe, {quantity:  recipe.quantity - 1})
                return recipe.quantity--
            }else{
                return Object.assign({},recipe)
            }
        }).filter(recipe=>recipe!= false)
        order.total -= props.recipes.find(recipe=>recipe._id === id).price
        if(order.total === 0){
            const id = order._id
            //order = undefined
            props.removeOrders(id)
            window.location.reload() 
        }else{
            
            console.log(order)
            props.editOrders(order, order._id)
        }
        
        props.editOrders(order, order._id)
    }

    return (
        order?(
        <Fragment>
            <h1>Cart</h1>
            
            <ul>
                {
                    order.recipes.map(recipe=>{
                    return <li key={recipe._id}>{props.recipes.find(rec=>rec._id==recipe.recipe).name} 
                    <button onClick={()=>onIncrement(recipe.recipe)} className="incdec">+</button>{recipe.quantity}
                    <button onClick={()=>onDecrement(recipe.recipe)} className="incdec">-</button></li>
                    })
                    
                }
            </ul>
            <p>Total: {order.total}</p>
            <button><Link to={`/place_order/${order._id}`} className="order-button">place order</Link></button>
        </Fragment>
        ):(
            <>
                <h1>Cart</h1>
                <p>Cart is empty</p>
            </>
        )
    )
}

const mapStateToProps = state =>{
    return {
        orders: state.orders,
        user: state.user,
        recipes: state.recipes
    }
}

export default connect(mapStateToProps,{ getOrders,editOrders,removeOrders })(Cart)