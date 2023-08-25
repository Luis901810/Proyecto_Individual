const  typesDietsFuntion  = require("../handlers/handlerDiets");
const {Diets} = require('../db')

const typeDiets = async(req, res)=>{
    try {

        // ********************   LLAMAMOS LAS DIETAS DE LA BD   ******************** 
        let diet = await Diets.findAll();
        
      
        if (diet.length === 0){
            const arrayDiets = await typesDietsFuntion() 
            arrayDiets.forEach(async(ele)=>{
                await Diets.create({
                    name:ele
                })   
            })
            return res.status(200).json(arrayDiets)
        }
        
        // ********************   SI EXISTEN DIETAS EN LA BD   ******************** 
        return res.status(200).json(diet)
       
    } catch (error) {
        res.status(500).json({error:"Recipe no encontrado con ese id"})  
    }
 }

 module.exports= typeDiets
