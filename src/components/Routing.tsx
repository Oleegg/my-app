import { Route, Routes } from 'react-router-dom';
import Auth from "./Auth/Auth";
import List from './List/List';
import ButtonsPage from './ButtonsPage/ButtonsPage';
import Asistent from './Asistent/Asistent';

function Routings() {
  return (      
    <div className='wrapper'>    
        <Routes>
          <Route path="/" element={<ButtonsPage/>} />
          <Route path="/login" element={<Auth/>} />
          <Route path="/dialogs" element={<List/>} />
          <Route path="/asistent" element={<Asistent/>} />
        </Routes> 
    </div> 
  );
}

export default Routings
