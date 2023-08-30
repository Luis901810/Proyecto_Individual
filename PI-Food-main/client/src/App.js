import './App.css';
import { Routes, Route } from "react-router-dom";
import Landing from './components/landing/Landing';
import Home from './components/home/Home';
import Form from './components/form/Form';
import DetailRecipe from "./components/detail/Detail"




function App() {
  return (
    <div className="App">

      <Routes>
       
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/detail/:id' element={<DetailRecipe/>}></Route>
        

        <Route path='/form' element={<Form/>}></Route>
          
      </Routes>
      
    </div>
  );
}

export default App;
