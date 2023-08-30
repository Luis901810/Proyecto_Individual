import React from 'react'
import Search from '../search/Search'
import { useNavigate } from 'react-router-dom'


function Nav({setPage,setIndex}) {

  const navigate = useNavigate()
  return (
    <div id='conteiner-nav'>
        <button className='input-nav' onClick={()=>navigate("/")}>EXIT</button>
        <Search
        setPage={setPage}
        setIndex={setIndex}/>
        <button className='input-nav' onClick={()=>navigate("/form")}>NEW RECIPE</button>
    </div>
  )
}

export default Nav