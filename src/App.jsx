import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About'
import Admission from './Pages/Admission'
import NewsArchive from './Pages/NewsArchive';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import WChooseZ from './Pages/WChooseZ';
import History from './Pages/History';


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
      < Route path='/' element={<Home />}  />
      <Route path='/About' element={<About />}  />
      <Route path='/Admmission' element={<Admission />} />
      <Route path='/NewsArchive' element={<NewsArchive />} />  
      <Route path="*" element={<h1>Page Not Found</h1>} />
      <Route path='/WChooseZ' element={<WChooseZ />} />
      <Route path='/History' element={<History />} />
      </Routes>
      <Footer/>
    </Router>
  );
}


export default App;