import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Gallery from './components/Gallery';
import Dashboard from './components/Dashboard';
import Contactus from './components/Contactus';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <h1 style={{ backgroundColor: "black", color: "white" }}>Welcome to My React App</h1> */}
      <Header />
     
      <BrowserRouter>
         {/* <Home/> */}
        
        <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
        
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
