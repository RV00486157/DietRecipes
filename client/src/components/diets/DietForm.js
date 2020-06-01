import React from 'react'
import {connect} from 'react-redux'

import {addDiets} from '../../actions/diet'

class DietForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            kind_of_diet: props.diet?props.diet.kind_of_diet:'',
            Preference: props.diet?props.diet.Preference:'',
            description: props.diet?props.diet.description:''
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
            kind_of_diet: this.state.kind_of_diet,
            Preference: this.state.Preference,
            description: this.state.description
        }
        this.props.handleSubmit(formData)
        
        //window.location.reload()

        // axios.post('diets/add_diet',({
        //     headers:{
        //         'x-auth': localStorage.getItem('x-auth')
        //     }
        // }))
        //     .then((response)=>{
        //         console.log(response.data)
        //     })
        //     .catch(err=>{
        //         console.log(err)
        //     })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}className='form'>
                <label htmlFor='kind_of_diet'>Kind of Diet</label>
                <input type='text' value={this.state.kind_of_diet} name='kind_of_diet' onChange={this.handleChange} required/>
                <br/>
                <label htmlFor='description'>Description</label>
                <textarea value={this.state.description} name='description' onChange={this.handleChange} required/>
                <br/>
                {/* <label htmlFor='Preference'>Preference</label>
                <input type='text' value={this.state.Preference} name='Preference' onChange={this.handleChange}/>
                <br/> */}
                <input type='submit'/>
            </form>
        )
    }
}

export default connect(null,{addDiets})(DietForm)