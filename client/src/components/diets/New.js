import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {addDiets} from '../../actions/diet'
import DietForm from './DietForm'

const DietNew = (props) =>{
    const handleSubmit = (formData) =>{
        props.addDiets(formData)
        this.props.addDiets(formData)
        this.props.history.push('/diets')
    }
    return (
        <Fragment>
            <h2>Add new Diet</h2>
            <DietForm handleSubmit={handleSubmit}/>
        </Fragment>
    )
}

export default connect(null,{ addDiets })(DietNew)