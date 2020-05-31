import React, { Fragment } from 'react'
import {Route , Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const PrivateRoute = ({ component : Component, user, ...rest })=>(
	<Fragment>
	{
		
		Object.keys(user).length === 0 ? (<Redirect to="/login"/>) : (
			<Route {...rest} render={props=>(<Component {...props}/>)}/>
		)
		
	}
	
	</Fragment>
)

PrivateRoute.propTypes = {
	user: PropTypes.object.isRequired	
};

const mapStateToProps = state =>({
	user: state.user
})
export default connect(mapStateToProps)(PrivateRoute)