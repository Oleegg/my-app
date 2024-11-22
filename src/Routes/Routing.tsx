import { Route, Routes } from 'react-router-dom';
import Auth from '../components/Auth/Auth';
import ButtonsPage from '../components/ButtonsPage/ButtonsPage';
import List from '../components/List/List';
import PrivateRoute from './PrivateRoute';
import { useAuth } from '../components/Auth/AuthContext';
import AuthRoute from './AuthRoute';

function Routings() {
  const { isAuthenticated } = useAuth()
  return (
    <div className='wrapper'>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/buttons" element={<ButtonsPage />} />
          <Route path="/dialogs" element={<List />} />
        </Route>
        <Route element={<AuthRoute />}>
          <Route path="/" element={<Auth />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Routings;
