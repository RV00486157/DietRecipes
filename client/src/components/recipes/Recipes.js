import React , {Fragment, useEffect} from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { getRecipes } from '../../actions/recipes'
import Display from './Display'
import Spinner from '../layout/Spinner'

class Recipes extends React.Component{
    constructor(props){
        super(props)
        this.state={
            recipes: props.recipes,
            filterByDiet: ''
        }
    }
    // static getDerivedStateFromProps(props, state) {
    //     return {recipes: props.recipes}
    // }

    // componentDidMount(props){
    //     this.setState({
    //         recipes: this.props.recipes
    //     })
    // }
    
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        },()=>{
            if(this.state.filterByDiet){
                this.setState({
                    recipes: this.props.recipes.filter(recipe=>recipe.diet == this.state.filterByDiet)
                })
            }else{
                this.setState({
                    recipes: this.props.recipes
                })
            }
        })
        //e.persist()
        
        
    }

    render(){
        return (
            <Fragment>
            { Object.keys(this.props.user).length === 0 ? <Redirect to="/diets" /> : (
                    <Fragment>
                { Object.keys(this.props.user).length > 0 && this.props.user.role === 'admin' && 
                <Link to="/add_recipes"><button>Add Recipes</button></Link> }
                <div className="filter">
                    <label htmlFor="filterByDiet">Filter by diet</label>
                    <select name="filterByDiet" value={this.state.filterByDiet} onChange={this.handleChange}> 
                        <option value="">All</option>
                        {
                            this.props.diets.map(diet=>{
                                return <option value={diet._id} key={diet._id}>{diet.kind_of_diet}</option>
                            })
                        }
                    </select>
                </div>
                {this.state.recipes.length>0?<Display recipes={this.state.recipes}/>:<Spinner/>}
            </Fragment>
                )
            }
        </Fragment> 
        )
    }
    
}

const mapStateToProps = state =>{
    return {
        recipes: state.recipes,
        diets: state.diets,
        user: state.user
    }
}

export default connect(mapStateToProps,{ getRecipes })(Recipes)