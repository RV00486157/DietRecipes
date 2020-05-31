import React, { Fragment, useEffect } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { getOrders } from '../../actions/orders'
import { getRecipes } from '../../actions/recipes'

const Styles = styled.div`
    .navbar {
       
    }

    .navbar-brand .navbar-nav .nav-link {
        color: #bbb;

        &:hover{
            color: white
        }
    }
`

const Navigationbar = (props) =>{
    
    useEffect(()=>{
        if(props.orders.length===0){
            props.getOrders(props.user)
        }
        if(props.recipes.length===0){
            props.getRecipes()
        }
    },[ getOrders, getRecipes ])

    return(
    
    <Styles>
        <Navbar expand='lg'>
        <Navbar.Brand  className="navbar-brand" href="/">DSFH</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
    <Nav className="navbar-nav">
        { 
            Object.keys(props.user).length === 0 ? (
                <Fragment>
                    <Link to="/diets" className="nav-link">Diets</Link>  
                    <Link to="/login" className="nav-link">Login</Link>
                    <Link to="/Register" className="nav-link">Register</Link>
                </Fragment>
            ): props.user.role == 'customer' ? (
                <Fragment>
                    <Link to="/diets" className="nav-link">Diets</Link>
                    <Link to="/recipes" className="nav-link">Recipes</Link>
                    <Link to="/cart" className="nav-link"><i className="fas fa-shopping-cart">Cart</i></Link>
                    <Link to="/order_confirmation" className="nav-link">Orders</Link>
                    <Link to="/logout" className="nav-link">Logout</Link>
                </Fragment>
            ):(
                <Fragment>
                    <Link to="/diets" className="nav-link">Diets</Link> 
                    <Link to="/recipes" className="nav-link">Recipes</Link>
                    <Link to="/admin_orders" className="nav-link">Orders</Link>
                    <Link to="/logout" className="nav-link">Logout</Link>
                    <Link to="#" className="nav-link">Admin</Link>
                </Fragment>
            )
        }    
    </Nav>
    
  </Navbar.Collapse>
        </Navbar>
    </Styles>
)}

const mapStateToProps = state => {
    return{
        user : state.user,
        orders : state.orders,
        recipes : state.recipes
    }
}

export default connect(mapStateToProps, { getOrders, getRecipes })(Navigationbar)