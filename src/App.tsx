import { Routes, Route } from 'react-router-dom';
import Welcome from './components/pages/Configuration/Welcome';
import Confirmation from './components/pages/Configuration/Confirmation';
import AddUserRole from './components/pages/Configuration/AddUserRole';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/add-user-role" element={<AddUserRole />} />
      </Routes>
    </div>
  );
}

export default App;
