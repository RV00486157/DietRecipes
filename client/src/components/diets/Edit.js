import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { editDiets } from '../../actions/diet'
import DietForm from './DietForm'
import { dietSelector } from '../../selectors/dietSelector'

const DietEdit = (props) =>{
    const id = props.match.params.id
    const handleSubmit = (formData) =>{
        props.editDiets(formData, id)
        props.history.push('/diets')
        window.location.reload()
    }
    return (
        <Fragment>
            <h2>Edit Diet</h2>
            <DietForm handleSubmit={handleSubmit} diet={props.diet}/>
        </Fragment>
    )
}
const mapStateToProps = (state, props) =>{
    const id = props.match.params.id
    return {
        diet: dietSelector(state.diets,id )
    }
}
export default connect(mapStateToProps,{ editDiets })(DietEdit)