export const recipeSelector = (recipes,id)=>{
    return recipes.find(recipe=>{
       return recipe._id == id 
    })
}