import React from "react"
import Card from "../card/Card";
import styles from "./cards.module.css";


export default function Cards({recipeId}){
    console.log(recipeId)
    // if(!recipeId || recipeId.length === 0){
    //     return <div>No hay recetas disponibles</div>
    // }
   

    return(
        <div className={styles.conteiner_car}>
        {
        recipeId.map(({id, title, image, diets, healthScore}, index) =>{
            console.log(id)  
          
            return (
                <Card
                key={index}
                id={id}
                title ={title}
                image= {image}
                diets= {diets}
                healthScore= {healthScore}
                />)
                  
            }
        )
            
        }
        </div>
    )
}