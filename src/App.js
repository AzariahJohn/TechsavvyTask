import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/HomePage/Home';
import Login from './pages/Login/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
