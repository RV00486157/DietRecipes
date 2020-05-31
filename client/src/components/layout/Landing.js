import React from 'react'
import { Link } from 'react-router-dom'

export const Layout =  (props) => {
    return (
		<section className="landing">
		  <div className="dark-overlay">
			<div className="landing-inner">
			  <h1 className="x-large">Diet Starts From Home</h1>
			  <p className="lead">
				Order different recipes and get the ingredients to cook your favorite meal at home
			  </p>
			  <div className="buttons">
				<Link to="/register" className="btn btn-primary">Sign Up</Link>
				<Link to="/login" className="btn btn-light">Login</Link>
			  </div>
        </div>
      </div>
    </section>
		
	)
}