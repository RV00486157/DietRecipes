import React, { Fragment } from 'react'
import { connect } from 'react-redux'

const OrderConfirmed = (props) =>(    
    <Fragment>
        <h2>Orders</h2>
        {
           props.orders.find(order=>order.order_placed === true)?(
               <>
                    {/* <h2>Order placed successfully</h2> */}
        <div>
        <ul>
            {
                props.orders.map(order=>{
                    if(order.order_placed === true){
                        return <li key={order._id} className="orders">
                                    <h4>User: {props.user.username}</h4>
                                    <h4>Address: {props.user.address}</h4>
                                    <h4>Mobile: {props.user.mobile}</h4>
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
               </>
           ):(
               <>
                <p>No Orders placed</p>
               </>
           )
        }
        
    </Fragment>
)

const mapStateToProps = state =>{
    return{
        orders: state.orders,
        user: state.user,
        recipes: state.recipes
    }
}

export default connect(mapStateToProps)(OrderConfirmed)

