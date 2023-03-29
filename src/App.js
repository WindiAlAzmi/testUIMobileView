import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './page/Main';
import Notification from './page/Notification';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />

      <Route path="/notification" element={<Notification />} />
   
    </Routes>
  );
}

export default App;
