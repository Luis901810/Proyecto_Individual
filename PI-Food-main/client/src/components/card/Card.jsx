import React from "react"
import { useNavigate } from 'react-router-dom';
import styles from "./card.module.css";
import { recipeId } from "../../redux/action"
import {useDispatch} from "react-redux"



const Card = ({id, title, image, diets, healthScore })=>{
    console.log(id)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleImageClick = () => {
        dispatch(recipeId(id));
        navigate(`/detail/${id}`);
      };
   
 

    return(
        <div >
        
            <h4 className= {styles.cards}>{id}</h4>         
            <div  className= {styles.car_detail}>
            <h2 className={styles.title_card}>{title}</h2>
            <img  className= {styles.image_card} onClick={handleImageClick} src={image} alt={title} />          
            <h3 className={styles.diet_title_card}>Tipos de Dietas</h3>
            <ul className={styles.diet_card}>
                {
                diets.map((ele, index)=>(
                
                    <li key={index}>{ele}</li>)
                )}
            </ul>
          
            <h3>{healthScore}</h3>

        </div>
    </div>
    );
};
                        


export default Card;