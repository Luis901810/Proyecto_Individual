
import { useNavigate } from 'react-router-dom'


const Card = ({recipesAll})=>{
    const navigate = useNavigate()

    return(
        <div className="conteiner-car">
            {recipesAll.map(({id,title,image,diets,healthScore})=>{
            return(
                <div key={id} className='cards'>
                <div  className='car-detail'>
                    <h2 id='title-card'>{title}</h2>
                    <img  id='image-card' onClick={()=>navigate(`/detail/${id}`)} src={image} alt={title} />
                        
                    <h3 id='diet-title-card'>Tipos deDietas</h3>
                    <h4 id='diet-card' >{diets?.map((ele,index)=>(
                                           <div key={index}>
                                            <li>{ele}</li>
                                            </div>)
                                        )}
                    </h4>
          
                    <h3>{healthScore}</h3>

                </div>
            </div>
                        
)})}
    </div>
    )
}

export default Card;