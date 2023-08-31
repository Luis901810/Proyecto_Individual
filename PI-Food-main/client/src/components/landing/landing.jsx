import { useNavigate } from "react-router-dom"
import styles from "./landing.module.css"

const Loading = () =>{

    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.h1}>
            <h1> welcome to Food </h1>
            </div>

            <button className={styles.btn} onClick={()=>navigate("/home")}>Home</button>
  
        </div>
    );
}
export default Loading;