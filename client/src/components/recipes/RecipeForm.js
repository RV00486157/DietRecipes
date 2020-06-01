import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { addRecipes } from '../../actions/recipes'
class RecipeForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: props.recipe? props.recipe.name:'',
            image: null,
            description: props.recipe? props.recipe.description:'',
            ingredients: props.recipe? props.recipe.ingredients:'',
            calories: props.recipe? props.recipe.calories:'',
            serving: props.recipe? props.recipe.serving:'',
            type: props.recipe? props.recipe.type:'',
            diet: props.recipe? props.recipe.diet:'',
            steps:props.recipe? props.recipe.steps:'',
            price: props.recipe? props.recipe.price:'',
            diets:[]
        }
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleDietChange=(e)=>{
        this.setState({
          diets:e
        })
    }

    onChangeImage = (e) =>{
        this.setState({image:e.target.files[0]});
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const formData = {
            name: this.state.name,
            description: this.state.description,
            ingredients: this.state.ingredients,
            calories: this.state.calories,
            serving: this.state.serving,
            type:this.state.type,
            steps: this.state.steps,
            price: this.state.price,
            diet:this.state.diet
        }

        console.log(formData)
        this.props.handleSubmit(formData)
        // const formData = {}
        // //formData.append('file',this.state.image);
        // formData['file'] = this.state.image
        // console.log(formData)
        // const config = {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // };
        // axios.post("/upload",formData,config)
        //     .then((response) => {
        //         alert("The file is successfully uploaded");
        //     }).catch((error) => {
        // });
    }

    render(){
        return(
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required/>
                    <br/>

                    {/* <label htmlFor="image">Image</label>
                    <input type="file" name="image" onChange= {this.onChangeImage} />
                    <br/> */}

                    <label htmlFor="description">Description</label>
                    <textarea name="description" onChange={this.handleChange} value={this.state.description} cols="60" required/>
                    <br/>

                    <label htmlFor="ingredients">Ingredients</label>
                    <textarea name="ingredients" onChange={this.handleChange} value={this.state.ingredients} cols="60" required/>
                    <br/>

                    <label htmlFor="steps">Steps</label>
                    <textarea name="steps" onChange={this.handleChange} value={this.state.steps} cols="60" required/>
                    <br/>

                    <label htmlFor="calories">Calories</label>
                    <input type="text" name="calories" onChange={this.handleChange} value={this.state.calories} required/>
                    <br/>

                    <label htmlFor="serving">Serving</label>
                    <input type="text" name="serving" onChange={this.handleChange} value={this.state.serving} required/>
                    <br/>

                    <label htmlFor="price">Price</label>
                    <input type="text" name="price" onChange={this.handleChange} value={this.state.price} required/>
                    <br/>

                    <label htmlFor="type">Type</label>
                    <select value={this.state.type} onChange={this.handleChange} name="type" required>
                        <option value="">Select type</option>
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="Non-Vegetarian">Non-vegetarian</option>
                        <option value="Vegan">Vegan</option>
                        <option value="Eggetarian">Eggetarian</option>
                    </select>

                    <label htmlFor="diet">Diet type</label>
                    <select value={this.state.diet} onChange={this.handleChange} name="diet" required>
                        <option value="">Select type</option>
                        {
                            this.props.diets&& this.props.diets.map(diet=>{
                            return <option key={diet._id} value={diet._id}>{diet.kind_of_diet}</option>
                            })
                        }
                    </select>

                    {/* <Select name="diets" id="diets" value={this.state.diets} onChange={(e)=>this.handleDietChange(e)}
                    isMulti options={this.props.diets.map((diet)=>{
                      return { 
                        value: diet._id,
                        label:diet.name
                      }
                    })} className="basic-multi-select"
                    classNamePrefix
                    ="select" 
                    /> */}
                    <br/>
                    <input type="submit"/>

                </form>
            </Fragment>
        )
    }
}

const mapStateToProps = state =>{
    return{
        diets: state.diets
    }
}

export default connect(mapStateToProps,{addRecipes})(RecipeForm)