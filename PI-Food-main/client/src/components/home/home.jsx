import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {recipesAll, addTypeRecipe, filterForStorage,  upwardOrfalling, upwardOrfallingTitle, filterForDiet, filterHealthScore} from "../../redux/action";
import Nav from "../nav/Nav"
import Cards from "../cards/Cards";
import Paginado from '../paginado/paginado';
import Loading from '../landing/Landing';
import styles from "./home.module.css"


const Home = () => {

    const dispatch = useDispatch();

    const loading = useSelector((state) => state.loading);
    const recipeId = useSelector((state) => state.recipe);
    
    // const recipeFilter = useSelector((state) => state.recipeFilter);
    const typeDiet = useSelector((state) => state.typesDiets);
    const numberOfRecets = recipeId?.length || 0; // Usar recipesAll para contar todas las recetas
  
    const [index, setIndex] = useState(0);
    const [recipeForPage] = useState(10);
    const [page, setPage] = useState(1);
    // const inicio = (page - 1) * recipeForPage;
    // const final = inicio + recipeForPage;
   // const cards = recipeFilter.slice(inicio, final);
  
    // Cargar todas las recetas al iniciar la página
    useEffect(() => {
      dispatch(recipesAll());
      dispatch(addTypeRecipe());
    }, [dispatch]);

 
  
    const handleOrder = (event) => {
      dispatch(upwardOrfalling(event.target.value));
    };
  
    const handleOrdertitle = (event) => {
      dispatch(upwardOrfallingTitle(event.target.value));
    };
  
    const handleOrderForStorage = (event) => {
      dispatch(filterForStorage(event.target.value));
    };
  
    const handleFilterDiets = (event) => {
      dispatch(filterForDiet(event.target.value));
    };
  
    const handleOrderHealthScore = (event) => {
      dispatch(filterHealthScore(event.target.value));
    };
  
    const resetAllRecipe = () => {
      dispatch(recipesAll());
      setPage(1);
      setIndex(0);
    };
  
    return (
      <div className={styles.conteiner_home}>
        {loading && <Loading />}
        <div>
          <Nav setPage={setPage} setIndex={setIndex} />
        </div>
  
        <section className={styles.section_home}>
          <div>
            <select
              className={styles.input}
              placeholder="Orden"
              onChange={handleOrder}
            >
              <option value="">Order</option>
              <option value="Ascendente">Ascendente</option>
              <option value="Descendente">Descendente</option>
            </select>
          </div>
  
          <div>
            <select
              className={styles.input}
              placeholder="Orden"
              onChange={handleOrdertitle}
            >
              <option value="">Select for name</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>
          </div>
  
          <div>
            <select
              className={styles.input}
              placeholder="Orden"
              onChange={handleOrderForStorage}
            >
              <option value="">Filter for storage</option>
              <option value="API">API</option>
              <option value="BASE DE DATOS">BASE DE DATOS</option>
            </select>
          </div>
  
          <div>
            <select
              className={styles.input}
              placeholder="Type Diet"
              onChange={handleFilterDiets}
            >
              <option value="diets">Type of diets</option>
              {typeDiet.map((diet) => (
                <option key={diet.id} value={diet.name}>
                  {diet.name}
                </option>
              ))}
            </select>
          </div>
  
          <div>
            <select
              className={styles.input}
              placeholder="Orden"
              onChange={handleOrderHealthScore}
            >
              <option value="">Health Score</option>
              <option value="Ascendente">Ascendente</option>
              <option value="Descendente">Descendente</option>
            </select>
          </div>
  
          <div>
            <button className={styles.input} onClick={resetAllRecipe}>
              Reset
            </button>
          </div>
        </section>
  
        <div className={styles.recipe}>
          {!loading && recipeId && <Cards recipeId={recipeId} />}
          
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
    );
  }; 
export default Home;