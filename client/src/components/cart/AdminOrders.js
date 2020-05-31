import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const AdminOrders = (props) =>{
    return(
    <Fragment>
        {
            Object.keys(props.user).length > 0 && props.user.role === 'admin' ?
    (<Fragment>
        <h2>Orders placed successfully</h2>
        <div className="orders">
        <ul>
            {
                props.orders.map(order=>{
                    if(order.order_placed === true){
                        return <li key={order._id}>
                                    <h5>User: {order.user.username}</h5>
                                    <h5>Address: {order.user.address}</h5>
                                    <h5>Mobile: {order.user.mobile}</h5>
                                    <p>Order Id: {order._id}</p>
                                    <ul>
                                    <p>Recipes: {order.recipes.map(recipe=>{
                                                    return <li key={recipe._id}>recipe: {props.recipes.find(rec=>rec._id==recipe.recipe).name} <br/>
                                                quantity:{recipe.quantity}</li>
                                                 })
                                    }</p>
                                    </ul>
                                    <p>Total: {order.total}</p>
                                </li>
                    }
                })
            }
        </ul>
        </div>
    </Fragment>):(
        <Redirect to="/diets"/>
    )
}
    </Fragment>
)}

const mapStateToProps = state =>{
    return{
        orders: state.orders,
        recipes: state.recipes,
        user: state.user
    }
}

export default connect(mapStateToProps)(AdminOrders)

