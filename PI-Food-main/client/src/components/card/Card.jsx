
import { useNavigate } from 'react-router-dom';
import styles from "./card.module.css";


const Card = ({id, title, image, diets, healthScore })=>{
   
    const navigate = useNavigate()

    return(
        <div >
        
            <h4 className= {styles.cards}>{id}</h4>         
            <div  className= {styles.car_detail}>
            <h2 className={styles.title_card}>{title}</h2>
            <img  className= {styles.image_card} onClick={()=> navigate(`/detail/${id}`)} src={image} alt={title} />          
            <h3 className={styles.diet_title_card}>Tipos de Dietas</h3>
            <ul className={styles.diet_card}>
                {
                diets?.map((ele, index)=>(
                
                    <li key={`${id}-diet-${index}`}>{ele}</li>)
                )}
            </ul>
          
            <h3>{healthScore}</h3>

        </div>
    </div>
    );
};
                        


export default Card;