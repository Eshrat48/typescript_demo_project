import { Routes, Route } from 'react-router-dom';
import Welcome from './components/pages/Configuration/Welcome';
import Confirmation from './components/pages/Configuration/Confirmation';
import AddUserRole from './components/pages/Configuration/AddUserRole';
import AddUser from './components/pages/Configuration/AddUser';
import UserActivation from './components/pages/Configuration/UserActivation';
import CountryRegion from './components/pages/Configuration/CountryRegion';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/add-user-role" element={<AddUserRole />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/user-activation" element={<UserActivation />} />
        <Route path="/country-region" element={<CountryRegion />} />
      </Routes>
    </div>
  );
}

export default App;
