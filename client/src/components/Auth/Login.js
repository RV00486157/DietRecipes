import React from 'react'
import { connect } from 'react-redux'
import axios from '../../config/Axios'
import {getUser, login} from '../../actions/user'
import {setAlert} from '../../actions/alert'

class Login extends React.Component{
    constructor(){
        super()
        this.state ={
            email: '',
            password: ''
        }
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = async(e) =>{
        e.preventDefault()
        const formData = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post("users/login", formData)
            .then(response=>{
                const token =response.data['x-auth']
                if(token){
                    localStorage.setItem('x-auth', token)
                    this.props.getUser()
                    this.props.history.push('/diets')
                }else{
                    alert('Invalid email/password')
                    //setAlert('Invalid email/password', 'danger')
                }
                
            })
            .catch(err=>{
                console.log(err)
            })
        // if(localStorage.getItem('x-auth')){
        //     this.props.getUser()
        //     this.history.push("/recipes")
        // }else{
        //     alert('Invalid email/password')
        // }
        
    }

    render(){
        return(
            <div>
                <h2>Login Form</h2>
                <form onSubmit={this.handleSubmit}>
                    
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                    <br/>

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <br/>

                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return{
        user : state.user
    }
}

export default connect(mapStateToProps,{getUser, login, setAlert})(Login)