import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home"
import GetProd from "./pages/getProd";
import AddProd from "./pages/addProd";
import UpdateProd from "./pages/updateProd";
import RemoveProd from "./pages/removeProd";
import ErrorPg from "./pages/error";


function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/products' element={<GetProd/>} />
        <Route path='/new' element={<AddProd />} />
        <Route path='/update/' element={<UpdateProd/>} />
        <Route path='/remove/' element={<RemoveProd />} />
        <Route path='*' element ={<ErrorPg/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
