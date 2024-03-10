import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import AddProd from "./pages/addProd";
import UpdateProd from "./pages/updateProd";
import RemoveProd from "./pages/removeProd";
import ErrorPg from "./pages/error";

const id =""
function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/new' element={<AddProd />} />
        <Route path='/update' element={<UpdateProd/>} />
        <Route path='/remove' element={<RemoveProd />} />
        <Route path='*' element ={<ErrorPg/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
