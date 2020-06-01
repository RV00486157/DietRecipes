import React , {Fragment, useEffect} from 'react'
import { connect } from 'react-redux'
import { getOrders , editOrders} from '../../actions/orders'
import { update_user } from '../../actions/user'
import OrderForm from './Form'
const Order = (props) =>{
    useEffect(()=>{
        if(props.orders.length===0){
            props.getOrders()
        }
    },[props.getOrders])

    const onSubmit = (formData) =>{
        props.update_user(formData, props.user._id)
    }

    const handleConfirm = (id) =>{
        props.editOrders({
            'order_placed':true
        },id)
        props.history.push("/order_confirmation")
        window.location.reload()
    }

    const order = props.orders.find(order=>order._id === props.match.params.id)
    
    return (
        <Fragment>
            <h1>Order Confirmation</h1>
            <OrderForm user={props.user} onSubmit={onSubmit}/>
            <ul>
                {
                    order.recipes.map(recipe=>{
                    return <li key={recipe._id}>recipe: {props.recipes.find(rec=>rec._id==recipe.recipe).name} <br/>
                                                quantity:{recipe.quantity}</li>
                    })
                    
                }
            </ul>
            <p>Total: {order.total}</p>
            <p>Payment Method: cash</p>
            <button onClick={()=>handleConfirm(order._id)}>Confirm Order</button>
        </Fragment>
        )
}

const mapStateToProps = state =>{
    return {
        orders: state.orders,
        user: state.user,
        recipes: state.recipes
    }
}

export default connect(mapStateToProps,{ getOrders ,update_user, editOrders})(Order)