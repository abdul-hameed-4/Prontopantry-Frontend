import logo from './logo.svg';
import './App.css';
import Login from './Components/Login'
import TermsOfService from './Components/TermsOfService';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/termsOfservice" element={<TermsOfService />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
