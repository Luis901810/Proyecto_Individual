import { useDispatch, useSelector } from "react-redux";
import {recipeAll, addTypeRecipe, filterForStorage,  upwardOrfalling,upwardOrfallingTitle,filterForDiet, filterHealthScore} from "../../redux/action";
import { useEffect, useState } from "react";
import Nav from "../nav/Nav"
import Card from "../card/Card"
import Paginado from '../paginado/paginado';
import Loading from '../landing/Landing';


const Home = () => {


    const dispatch = useDispatch();
     //-------------------   LOADING   -------------------//
     const loading=useSelector(state=>state.loading)
    //-------------------             -------------------//


     const recipesAll = useSelector(state => state.recipe);
     const recipeFilter = useSelector(state => state.recipeFilter);
     const numberOfRecets=recipeFilter.length
     console.log(numberOfRecets)


     //-------------------   PAGINADO   -------------------//

    const [index,setIndex]=useState(0) // se crea este estado dentro de "HomePage" con la finalidad de pasarlo por props al componente "Nav" y utilizarlo, pero el uso principal de este hook es en el componente "Paginado"
    
    const [recipeForPage] = useState(10)
    const [page,setPage] = useState(1) 
  
    const inicio = (page - 1) * recipeForPage;
  
    const final = inicio + recipeForPage;
  
    const cards = recipeFilter.slice(inicio, final);

    //-------------------             -------------------//
        


     //-------------------   CARGAMOS LOS ESTADOS CON LAS RECETAAS   -------------------//
    useEffect(()=>{
        !recipeFilter.length && dispatch(recipeAll())
        recipeFilter.length !== recipesAll.length && dispatch(filterForStorage())
    },[dispatch, recipeFilter.length, recipesAll.length])


                //-------------------   FILTROS   -------------------//
        //-------------------   ID   -------------------//
    const handleOrder=(event)=>{
        dispatch(upwardOrfalling(event.target.value))
    }

     //-------------------   TITULO   -------------------//

    const handleOrdertitle=(event)=>{
        dispatch(upwardOrfallingTitle(event.target.value))
    }
    
    //-------------------   API O BD   -------------------//
    const handleOrderForStorage =(event)=>{
        dispatch(filterForStorage(event.target.value))

    }

    //-------------------   TIPO DE DIETA   -------------------//
        //.......cargamos y traemos las dietas
        useEffect(()=>{

            dispatch(addTypeRecipe())
        },[dispatch])
        
        const typeDiet = useSelector((state)=>state.typesDiets)
      

        const handleFilterDiets =(event)=>{
            dispatch(filterForDiet(event.target.value))
    
        }

    //-------------------   HEALTH SCORE   -------------------//
        const handleOrderHealthScore =(event)=>{
            dispatch(filterHealthScore(event.target.value))

        }


    //-------------------   RESET   -------------------// 
    const resetAllRecipe =()=>{
        dispatch(recipeAll())
        // para volver a la pagina principal
        setPage(1) 
        setIndex(0)

    }

    return (
        <div className="conteiner-homePage">
            {loading && <Loading/>}
            <div>
                <Nav
                    setPage={setPage}
                    setIndex={setIndex}
                />
            </div>
            
            <section id='section-home'>
                <div>
                    <select className='input' placeholder='Orden' onChange={handleOrder}>
                        <option  >Order</option>
                        <option value="Ascendente" >Ascendente</option>
                        <option value="Descendente">Descendente</option>
                    </select>
                </div>

                <div>
                    <select className='input' placeholder='Orden' onChange={handleOrdertitle}>
                        <option  >Select for name</option>
                        <option value="A-Z" >A-Z</option>
                        <option value="Z-A">Z-A</option>
                    </select>    
                </div>

               
               <div>
                    <select className='input' placeholder='Orden' onChange={handleOrderForStorage}>
                        <option  >Filter for storage</option>
                        <option value="API" >API</option>
                        <option value="BASE DE DATOS">BASE DE DATOS</option>
                    </select>
               </div>

               <div>
                    <select className='input' placeholder='Type Diet' onChange={handleFilterDiets}>
                            <option  value="diets">type of diets</option>
                            {typeDiet.map((diet)=>(
                            <option  key= {diet.id} value={diet.name} >{diet.name}</option>
                            ))}
                    </select>
               </div>

                <div>
                    <select className='input' placeholder='Orden' onChange={handleOrderHealthScore}>
                        <option  >Health Score</option>
                        <option value="Ascendente" >Ascendente</option>
                        <option value="Descendente">Descendente</option>
                    </select>
                </div>

                <div>
                    <button className='input' onClick={resetAllRecipe}>Reset</button>
                </div>
            </section>

            <div className="recipe">
                {!loading && <Card recipesAll={cards}/>}
                
            </div>
            <Paginado
                numberOfRecets={numberOfRecets}
                page={page}
                recipeForPage={recipeForPage}
                setPage={setPage}
                index={index}
                setIndex={setIndex}
            />
        </div>

        
       
        
    )
}
    
export default Home;