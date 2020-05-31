import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../actions/user'
import { connect } from 'react-redux'

const Logout = (props) =>{
    
    return(
        
        <Fragment>
            {
               props.logout()
            }
            <h2>Successfully Loggedout</h2>
            <Link to="/">back to home page</Link>
        </Fragment>
    )
}

export default connect(null,{logout})(Logout)