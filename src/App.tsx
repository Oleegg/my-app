import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Routings from './components/Routing';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">        
         <Router> 
            <Header/>            
              <Routings/>
            <Footer/>
          </Router>        
    </div>
  );
}

export default App;
