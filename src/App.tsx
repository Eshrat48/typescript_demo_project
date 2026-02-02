import { Routes, Route } from 'react-router-dom';
import Welcome from './components/pages/Configuration/Welcome';
import Confirmation from './components/pages/Configuration/Confirmation';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </div>
  );
}

export default App;
