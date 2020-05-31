import React from 'react'
import { connect } from 'react-redux'

import { registerUser } from '../../actions/user'
import { setAlert } from '../../actions/alert'

class Register extends React.Component{
    constructor(){
        super()
        this.state ={
            username: '',
            email: '',
            password: '',
            //password2: '',
            mobile: ''
        }
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        const formData = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            mobile: this.state.mobile
        }
        // if(this.state.password !== this.state.password2){
        //     this.props.setAlert('Passwords do not match', 'danger')
        // }
        registerUser(formData)
        this.props.history.push('/login')
        console.log(formData)
    }

    render(){
        return(
            <div>
                <h2>Register Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    <br/>

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                    <br/>

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <br/>

                    {/* <label htmlFor="password2">Password</label>
                    <input type="password" name="password2" value={this.state.password2} onChange={this.handleChange}/>
                    <br/> */}

                    <label htmlFor="mobile">Mobile</label>
                    <input type="mobile" name="mobile" value={this.state.mobile} onChange={this.handleChange}/>
                    <br/>

                    <input type="submit" value="Register"/>
                </form>
            </div>
        )
    }
}

export default connect(null,{setAlert})(Register)