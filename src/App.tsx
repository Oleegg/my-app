import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import List from './components/List/List';
import { BrowserRouter as Router } from 'react-router-dom';
import Routings from './Routes/Routing';
import { AuthProvider } from './components/Auth/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Header />
          <Routings />
          <Footer />
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
