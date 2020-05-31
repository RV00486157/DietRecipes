import React from 'react'
import { connect } from 'react-redux'

import { dietSelector } from '../../selectors/dietSelector'
import { Link } from 'react-router-dom'

const DietShow = (props) =>{
    return(
        <>
        {
            props.diet ? (
                <>
                    <h2>{props.diet.kind_of_diet}</h2>
                    <hr/>
                    {/* <p>{props.diet.description}</p> */}
                    {
                        props.diet.description.split('\n').map((str,i)=>{
                        return <p key={i}>{str}</p>
                        })
                    }
                    <button className="links"><Link to="/diets">Back</Link></button>
                </>
            ) :
            (
                <p>loading</p>
            )
        }
        </>
    )
}

const mapStateToProps = (state, props) =>{
    const id = props.match.params.id
    return {
        diet: dietSelector(state.diets,id )
    }
}
export default connect(mapStateToProps, null)(DietShow)