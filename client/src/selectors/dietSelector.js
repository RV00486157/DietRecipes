export const dietSelector = (diets,id)=>{
    return diets.find(diet=>{
       return diet._id == id 
    })
}