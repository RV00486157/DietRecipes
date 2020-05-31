import React from 'react'
import {Route , Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const AdminRoute = ({ component : Component, user, ...rest })=>(
    <div>
	<Route {...rest} render={props=>Object.keys(user).length !== 0 && user.role === 'admin' ? (<Component {...props}/>): (<Redirect to="/login"/>)}/>
	</div>
)


const mapStateToProps = state =>({
	user: state.user
})
export default connect(mapStateToProps)(AdminRoute)