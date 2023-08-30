import { useDispatch, useSelector } from "react-redux";
import { recipeAll } from "../../redux/action";
import Nav from "../nav/Nav"

const resetAllRecipe =()=>{
    dispatch(recipeAll())
    // para volver a la pagina principal
    setPage(1) 
    setIndex(0)

}

const Home = () => {
    return (
        <div>
             <div>
                <Nav
                    setPage={setPage}
                    setIndex={setIndex}
                />
        </div>
            
        <div>
            <h1> HOLA SOY EL INICIO</h1>
        </div>

        </div>
       
        
    )
}
    
export default Home;