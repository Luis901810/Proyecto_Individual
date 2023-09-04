import Card from "../card/Card";
import styles from "./cards.module.css";


export default function Cards({recipesAll}){

    return(
        <div className={styles.conteiner_car}>
        {
        recipesAll.map(({id, title, image, diets, healthScore}, index) =>{
           // console.log(recipesAll)
           
            return (
                <Card
                key={`${id}-${diets.join('-')}-${index}`}
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