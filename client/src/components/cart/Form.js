import React, { Fragment } from "react"

class OrderForm extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            mobile: props.user&&props.user.mobile?props.user.mobile:'',
            address: props.user&&props.user.address?props.user.address:''
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
            mobile: this.state.mobile,
            address: this.state.address
        }
        this.props.onSubmit(formData)
    }
    render(){
        return(
        <Fragment>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="mobile">Mobile</label>
                <input type="text" name="mobile" onChange={this.handleChange} value={this.state.mobile} required/>
                <br/>

                <label htmlFor="address">Address</label>
                <textarea name="address" onChange={this.handleChange} value={this.state.address} required/>
                <br/>

                <input type="submit" value="Edit Details"/>
            </form>
        </Fragment>
    )}
}

export default OrderForm