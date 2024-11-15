import { Route, Routes } from 'react-router-dom';
import Auth from "./Auth/Auth";
import List from './List/List';
import ButtonsPage from './ButtonsPage/ButtonsPage';

function Routings() {
  return (      
    <div className='wrapper'>    
        <Routes>
          <Route path="/" element={<ButtonsPage/>} />
          <Route path="/login" element={<Auth/>} />
          <Route path="/dialogs" element={<List/>} />
        </Routes> 
    </div> 
  );
}

export default Routings
