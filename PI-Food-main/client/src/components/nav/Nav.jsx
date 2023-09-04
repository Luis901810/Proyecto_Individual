import React from 'react'
import Search from '../search/Search'
import { useNavigate } from 'react-router-dom'
import styles from "./nav.module.css"

function Nav({setPage,setIndex}) {

  const navigate = useNavigate()
  return (
    <div className={styles.conteiner_nav}>
        <button className={styles.input_nav} onClick={()=>navigate("/")}>EXIT</button>
        <Search
        setPage={setPage}
        setIndex={setIndex}/>
        <button className={styles.input_nav} onClick={()=>navigate("/form")}>NEW RECIPE</button>
    </div>
  )
}

export default Nav