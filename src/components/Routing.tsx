import { Route, Routes } from 'react-router-dom';
import Auth from "./Auth/Auth";
import List from './List/List';

function Routings() {
  return (      
    <div className='wrapper'>    
        <Routes>
        <Route path="/login" element={<Auth/>} />
        <Route path="/" element={<List/>} />
        </Routes> 
    </div> 
  );
}

export default Routings
