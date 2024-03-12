import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { Home } from './Pages/Home';
import { Pricing } from './Pages/Pricing';
import { About } from './Pages/About';

function App() {
  console.log(window.location);
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
