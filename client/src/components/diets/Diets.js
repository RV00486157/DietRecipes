import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'
import { getDiets, removeDiets } from '../../actions/diet'

function Diets(props){
    useEffect(()=>{
        if(props.diets.length===0){
            props.getDiets()
        }
    },[props.getDiets])
    
    const handleRemove = (id) =>{
        props.removeDiets(id)
        window.location.reload()
    }
    return(
        <Fragment>
            {
                Object.keys(props.user).length===0?null:props.user.role ==='admin'&& 
                <Link to="/add_diet"><button className='primary'>Add Diet</button></Link>
            } 
            {
                props.diets.length>0?
                (
                    <>
                        <h1>Diets Available</h1>
                        <p>Click on the diet type for more details</p>
                        <ul className="diets">
                        {
                            Object.keys(props.user).length!==0&&props.user.role ==='admin'?
                            (
                                    props.diets.map(diet=>{   
                                        return <li key={diet._id}><Link to={`/diets/${diet._id}`}>{diet.kind_of_diet}</Link>  <button className="btn-sm"><Link className="link" to={`/diets/edit/${diet._id}`} style={{color:'black'}}>Edit</Link></button> <button className="btn-sm" onClick={()=>{handleRemove(diet._id)}}>Remove</button></li>
                                    })
                            ):
                            (
                                    props.diets.map(diet=>{   
                                        return <li key={diet._id}><Link to={`/diets/${diet._id}`}>{diet.kind_of_diet}</Link> </li>
                                    })
                            )
                        }
                        </ul>
                    </>
                ):(
                    <Spinner/>
                )
            }
        </Fragment>
    )
}

const mapStateToProps = state =>{
    return {
        diets : state.diets,
        user : state.user
    }
}

export default connect(mapStateToProps,{getDiets, removeDiets })(Diets)